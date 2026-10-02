"use client";

import { useEffect, useState } from "react";

/**
 * Renvoie l'identifiant de la section qui traverse le milieu de la fenêtre.
 * `ids` doit être une référence stable (constante de module).
 */
export function useActiveSection(ids: readonly string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? activeId : null;
}
