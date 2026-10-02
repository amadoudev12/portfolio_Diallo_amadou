"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation, sectionHref } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = navigation.map((item) => item.id);
const MOBILE_MENU_ID = "menu-mobile";
const DESKTOP_QUERY = "(min-width: 768px)";

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const visibleSection = useActiveSection(SECTION_IDS, isHome);
  const activeId = isHome
    ? visibleSection
    : pathname.startsWith("/projets")
      ? "projets"
      : null;

  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Menu mobile ouvert : on fige l'arrière-plan et on gère Échap / redimensionnement.
  useEffect(() => {
    if (!isOpen) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const pageContent = document.querySelectorAll<HTMLElement>("[data-page-content]");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const handleBreakpoint = () => {
      if (desktop.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpoint);
    document.body.style.overflow = "hidden";
    pageContent.forEach((element) => {
      element.inert = true;
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpoint);
      document.body.style.overflow = "";
      pageContent.forEach((element) => {
        element.inert = false;
      });
    };
  }, [isOpen]);

  return (
    <nav aria-label="Navigation principale">
      <ul className="hidden items-center gap-1 md:flex">
        {navigation.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <Link
                href={sectionHref(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                  isActive ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-px origin-left bg-ink transition-transform duration-300 ease-out-expo",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={MOBILE_MENU_ID}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="-mr-2 grid size-11 place-items-center rounded-full text-ink md:hidden"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 sm:px-8">
              {navigation.map((item, index) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.04 * index, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <Link
                    href={sectionHref(item.id)}
                    aria-current={item.id === activeId ? "location" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 py-5 text-3xl font-semibold tracking-tight"
                  >
                    <span aria-hidden="true" className="font-mono text-xs font-normal text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
