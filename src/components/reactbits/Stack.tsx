"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type React from "react";

type StackCard = {
  id: string;
  img: string;
};

type StackProps = {
  randomRotation?: boolean;
  sensitivity?: number;
  cardsData: StackCard[];
  animationConfig?: { stiffness: number; damping: number };
};

const rotationById = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 1000;
  }
  const normalized = (hash / 1000) * 10 - 5;
  return Number(normalized.toFixed(2));
};

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
}: {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: unknown, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 180,
  cardsData,
  animationConfig = { stiffness: 260, damping: 20 },
}: StackProps) {
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id: string) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div className="stack-container">
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? rotationById(card.id) : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="stack-card"
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              <Image
                src={card.img}
                alt="Infrastructure visual"
                fill
                unoptimized
                sizes="(max-width: 768px) 86vw, 320px"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
