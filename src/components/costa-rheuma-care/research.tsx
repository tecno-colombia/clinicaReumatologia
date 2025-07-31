import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Beaker, Users, GraduationCap, Microscope, FileText, Network } from "lucide-react";

const ResearchPillar = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="mb-3 rounded-full bg-primary/10 p-3 text-primary">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-headline font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground mt-1">{description}</p>
  </div>
);

const collaborations = [
    "Universidad del Norte",
    "Universidad Simón Bolívar",
    "Universidad del Sinu",
    "Universidad de La Guajira",
    "Redes internacionales de investigación"
];

export function Research() {
  return (
    <section id="investigacion" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    Innovación
                </div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Centro de Investigación Clínica
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Avanzamos en el conocimiento de las enfermedades reumatológicas para ofrecer tratamientos innovadores y personalizados, contribuyendo al desarrollo científico de la región.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-xl"><Network className="h-6 w-6 text-primary"/>Colaboraciones Académicas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                            {collaborations.map((collab) => (
                                <li key={collab} className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                                    {collab}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <ResearchPillar icon={FileText} title="Estudios Epidemiológicos" description="Analizamos la prevalencia e impacto de enfermedades en el Caribe." />
                <ResearchPillar icon={Microscope} title="Ensayos Clínicos" description="Participamos en estudios de fase II y III para nuevos medicamentos." />
                <ResearchPillar icon={Beaker} title="Investigación Traslacional" description="Buscamos biomarcadores y factores genéticos de susceptibilidad." />
                <ResearchPillar icon={Users} title="Infraestructura de Investigación" description="Contamos con laboratorio, biobanco y unidad de ensayos clínicos certificados." />
            </div>
        </div>
      </div>
    </section>
  );
}
