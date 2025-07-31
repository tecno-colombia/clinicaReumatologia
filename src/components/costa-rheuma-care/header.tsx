"use client";

import { HeartPulse, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#medicos", label: "Médicos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-lg sm:text-xl">
              Costa Rheuma Care
            </span>
          </a>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80 font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button>Agendar Cita</Button>
        </nav>
        <div className="ml-auto md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menú</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-4 py-6">
                    <a href="#" className="flex items-center space-x-2">
                        <HeartPulse className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">
                        Costa Rheuma Care
                        </span>
                    </a>
                    <div className="grid gap-2">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                        >
                        {link.label}
                        </a>
                    ))}
                    </div>
                    <Button>Agendar Cita</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
