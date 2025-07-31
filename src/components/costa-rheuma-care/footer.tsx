import { HeartPulse, Phone, Mail, Globe, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary/90 text-primary-foreground">
      <div className="relative overflow-hidden">
        <div
            className="absolute bottom-0 left-0 w-full h-32 "
            style={{
                background: 'linear-gradient(to right, #004E8F, #007CC3)',
            }}
        />
        <div className="container relative py-12 px-4 md:px-6 z-10">
            <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start">
                <a href="#" className="flex items-center space-x-2 mb-4">
                <HeartPulse className="h-8 w-8" />
                <span className="text-2xl font-bold font-headline">Costa Rheuma Care</span>
                </a>
                <p className="text-sm text-primary-foreground/80">Líderes en Reumatología del Caribe Colombiano.</p>
            </div>
            <div className="space-y-2">
                <h4 className="font-semibold text-lg font-headline">Contacto</h4>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+57 3369999</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contacto@costarheuma.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Globe className="h-4 w-4" />
                <span>www.clinicadelacosta.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <MapPin className="h-4 w-4" />
                    <span>Cra. 50 N.º 80-90, Barranquilla, Colombia</span>
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="font-semibold text-lg font-headline">Navegación</h4>
                <ul className="space-y-1">
                {['Servicios', 'Ubicaciones', 'Médicos', 'Compromisos'].map((link) => (
                    <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Clínica de la Costa. Todos los derechos reservados.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
