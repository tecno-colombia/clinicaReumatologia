import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <a href="https://www.clinicadelacosta.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mb-4">
              <Image src="https://www.clinicadelacosta.com/assets/images/logo.png" alt="Clinica de la Costa Logo" width={180} height={50} className="brightness-0 invert"/>
            </a>
            <p className="text-sm text-primary-foreground/80">Líderes en servicios de salud en el Caribe Colombiano.</p>
          </div>
          <address className="space-y-2 not-italic">
            <h4 className="font-semibold text-lg font-headline">Contacto Principal</h4>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              <a href="tel:+573369999" className="hover:underline">+57 3369999</a>
            </div>
             <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Cra. 50 N.º 80-90, Barranquilla</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <a href="mailto:contacto@clinicadelacosta.com" className="hover:underline">contacto@clinicadelacosta.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Globe className="h-4 w-4" />
              <a href="https://www.clinicadelacosta.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.clinicadelacosta.com</a>
            </div>
          </address>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg font-headline">Navegación</h4>
            <ul className="space-y-1">
              {['about', 'servicios', 'ubicaciones', 'investigacion', 'medicos', 'compromisos'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-sm capitalize text-primary-foreground/80 hover:text-primary-foreground">
                    {link === 'about' ? 'Qué es Reumatología' : link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           <div className="space-y-2">
                <h4 className="font-semibold text-lg font-headline">Reumatología</h4>
                <p className="text-sm text-primary-foreground/80">
                    Nuestro centro de reumatología es un referente en la Región Caribe, dedicado al manejo de enfermedades autoinmunes y del aparato locomotor.
                </p>
            </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Clínica de la Costa. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Diseñado y desarrollado por Fabián Muñoz Puello y Leidy Eva Anaya para Tecnosalud Internacional.
          </p>
        </div>
      </div>
    </footer>
  );
}
