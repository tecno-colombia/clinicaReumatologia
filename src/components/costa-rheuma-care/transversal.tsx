import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Users, GraduationCap, Radiation, HeartPulse } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Laboratorio Especializado",
    items: ["Autoanticuerpos específicos (ANA, anti-dsDNA, ENA)", "Marcadores de actividad inflamatoria", "Complemento (C3, C4, CH50)", "Crioglobulinas", "Factor reumatoide y anti-CCP"],
  },
  {
    icon: Radiation,
    title: "Imagenología Especializada",
    items: ["Ecografía musculoesquelética", "Resonancia magnética articular", "Densitometría ósea", "Radiografías especializadas", "Tomografía computarizada"],
  },
  {
    icon: Users,
    title: "Apoyo Terapéutico",
    items: ["Fisioterapia especializada", "Terapia ocupacional", "Trabajo social", "Psicología clínica", "Nutrición clínica"],
  },
  {
    icon: GraduationCap,
    title: "Programa de Educación",
    items: ["Escuela de pacientes", "Talleres familiares", "Material educativo", "Grupos de apoyo", "Teleorientación"],
  },
];

export function Transversal() {
  return (
    <section id="transversal" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                Soporte Integral
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Servicios Transversales
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un enfoque multidisciplinario para un cuidado completo y de calidad, coordinando múltiples especialidades para su bienestar.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.items.map((item, i) => (
                        <li key={i} className="flex items-start text-left">
                            <HeartPulse className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                            <span>{item}</span>
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
