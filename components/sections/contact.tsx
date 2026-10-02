import { ArrowUpRight, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { socialIcons } from "@/components/layout/social-links";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact, socialLinks } from "@/data/site";
import { formatUrlForDisplay } from "@/lib/utils";

export function Contact() {
  const { email } = contact;
  const hasContactDetails = email !== null || socialLinks.length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-titre"
      data-surface="dark"
      className="bg-ink text-paper"
    >
      <Container className="grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            id="contact-titre"
            index="04"
            label="Contact"
            title={"Un projet, une opportunité ? Parlons-en."}
            surface="dark"
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-night-muted text-pretty">
            Recruteur ou porteur de projet, je serai ravi d&apos;échanger avec vous.
          </p>

          {email && (
            <ButtonLink href={`mailto:${email}`} surface="dark" className="mt-10">
              <Mail aria-hidden="true" className="size-4" />
              M&apos;écrire par e-mail
            </ButtonLink>
          )}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:self-end">
          {hasContactDetails ? (
            <ul aria-label="Coordonnées" className="border-t border-night-line">
              {email && (
                <ContactRow
                  href={`mailto:${email}`}
                  label="E-mail"
                  value={email}
                  icon={<Mail aria-hidden="true" className="size-4" />}
                />
              )}
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                return (
                  <ContactRow
                    key={link.id}
                    href={link.href}
                    label={link.label}
                    value={formatUrlForDisplay(link.href)}
                    icon={<Icon className="size-4" />}
                    external
                  />
                );
              })}
            </ul>
          ) : (
            <p className="border-t border-night-line pt-6 text-sm leading-relaxed text-night-muted">
              Mes coordonnées seront ajoutées ici très prochainement.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

type ContactRowProps = {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  /** Ouvre le lien dans un nouvel onglet. */
  external?: boolean;
};

function ContactRow({ href, label, value, icon, external = false }: ContactRowProps) {
  return (
    <li className="border-b border-night-line">
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="group flex items-center gap-4 py-5 transition-colors duration-300 hover:text-accent-bright"
      >
        <span className="text-night-muted transition-colors duration-300 group-hover:text-accent-bright">
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-xs uppercase tracking-[0.18em] text-night-muted">
            {label}
          </span>
          <span className="mt-1 block truncate text-base font-medium">{value}</span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-night-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-bright"
        />
      </a>
    </li>
  );
}
