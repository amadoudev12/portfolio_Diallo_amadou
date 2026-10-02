import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span className="text-accent">404</span>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        Page introuvable
      </p>
      <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        Le lien est peut-être erroné, ou la page a été déplacée.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
      </div>
    </Container>
  );
}
