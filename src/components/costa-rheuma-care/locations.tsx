import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Barranquilla - Sede Principal",
    services: ["Centro de investigación completo", "Todas las salas especializadas", "Laboratorio de referencia", "Programa de formación de residentes"],
  },
  {
    name: "Cartagena - Sede Histórica",
    services: ["Consulta externa completa", "Sala de infusión", "Procedimientos diagnósticos", "Telemedicina con otras sedes"],
  },
  {
    name: "Santa Marta - Sede Turística",
    services: ["Consulta externa", "Infiltraciones básicas", "Sala de infusión", "Conexión con sede principal"],
  },
  {
    name: "Riohacha - Sede Fronteriza",
    services: ["Consulta externa", "Procedimientos básicos", "Telemedicina especializada", "Programa de alcance comunitario"],
  },
];

export function Locations() {
  return (
    <section id="ubicaciones" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Cobertura Regional
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Cuatro Sedes en la Región Caribe
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estratégicamente ubicadas para brindar un acceso conveniente a nuestros servicios especializados en toda la costa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Card key={location.name} className="flex flex-col transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {location.services.map((service) => (
                    <li key={service} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
