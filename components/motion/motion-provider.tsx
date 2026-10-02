"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Charge uniquement les fonctionnalités d'animation DOM de Framer Motion
 * (composants `m.*`) et respecte `prefers-reduced-motion` : les déplacements
 * sont alors désactivés, seuls les fondus sont conservés.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
