"use client";

import { HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#medicos", label: "Médicos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <HeartPulse className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Costa Rheuma Care
            </span>
          </a>
        </div>
        <nav className="flex items-center gap-4 text-sm lg:gap-6 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </a>
          ))}
          <Button>Agendar Cita</Button>
        </nav>
      </div>
    </header>
  );
}
