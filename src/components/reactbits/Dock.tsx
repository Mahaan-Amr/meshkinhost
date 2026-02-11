"use client";

import { useEffect, useMemo, useState } from "react";
import { animated, useSpring, useSprings } from "@react-spring/web";
import Link from "next/link";

type DockItem = {
  label: string;
  href: string;
  icon?: string;
};

type DockProps = {
  items: DockItem[];
  position?: "left" | "right" | "top" | "bottom";
  collapsible?: boolean;
  responsive?: "left" | "right" | "top" | "bottom";
};

export default function Dock({
  items,
  position = "bottom",
  collapsible = false,
  responsive = "bottom",
}: DockProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
      setIsCompact(window.innerWidth <= 768);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, responsive]);

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  const translateValue = useMemo(() => {
    switch (currentPosition) {
      case "left":
        return "translateX(5px)";
      case "right":
        return "translateX(-5px)";
      case "top":
        return "translateY(5px)";
      case "bottom":
        return "translateY(-5px)";
      default:
        return "translate(0)";
    }
  }, [currentPosition]);

  const [springs, api] = useSprings(items.length, () => ({
    transform: "scale(1)",
    config: { tension: 220, friction: 16 },
  }));

  useEffect(() => {
    api.start((index) => {
      if (hoverIndex === index) {
        return { transform: `${isCompact ? "scale(1.1)" : "scale(1.35)"} ${translateValue}` };
      }
      if (hoverIndex !== null && Math.abs(hoverIndex - index) === 1) {
        return { transform: isCompact ? "scale(1.04)" : "scale(1.2)" };
      }
      return { transform: "scale(1)" };
    });
  }, [api, hoverIndex, translateValue, isCompact]);

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div className="dock" style={visibilitySpring}>
        {items.map((item, index) => (
          <animated.div
            key={item.href}
            className="dock-item"
            style={springs[index]}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Link href={item.href} className="dock-link">
              <span className="dock-icon" aria-hidden="true">
                {item.icon ?? "*"}
              </span>
              <span className="dock-label">{item.label}</span>
            </Link>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
