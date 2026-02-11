"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

type RollingGalleryItem = {
  src: string;
  alt?: string;
};

type RollingGalleryProps = {
  items: RollingGalleryItem[];
  autoplay?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export default function RollingGallery({
  items,
  autoplay = false,
  pauseOnHover = false,
  className = "",
}: RollingGalleryProps) {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 900 : 1400;
  const faceCount = Math.max(items.length, 1);
  const faceWidth = (cylinderWidth / faceCount) * 1.4;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const handleDrag = (_: unknown, info: { offset: { x: number } }) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: unknown, info: { velocity: { x: number } }) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  useEffect(() => {
    if (!autoplay || items.length <= 1) return undefined;

    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - 360 / faceCount);
    }, 2200);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, rotation, controls, faceCount, items.length]);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover && autoplayRef.current) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2200);
    }
  };

  if (!items.length) return null;

  return (
    <div className={`rolling-gallery ${className}`.trim()}>
      <div className="rolling-gallery-gradient rolling-gallery-gradient-left" />
      <div className="rolling-gallery-gradient rolling-gallery-gradient-right" />
      <div className="rolling-gallery-content">
        <motion.div
          drag="x"
          className="rolling-gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {items.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className="rolling-gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <div className="rolling-gallery-card">
                <img src={item.src} alt={item.alt ?? "brand"} className="rolling-gallery-img" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
