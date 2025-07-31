import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const affectedAreas = [
  "Articulaciones (artritis, artrosis)",
  "Músculos (miopatías inflamatorias)",
  "Huesos (osteoporosis, enfermedad de Paget)",
  "Tendones y ligamentos (tendinitis, fibromialgia)",
  "Tejido conectivo (lupus eritematoso sistémico, esclerosis sistémica)",
  "Sistema vascular (vasculitis)",
  "Órganos internos cuando están afectados por enfermedades autoinmunes",
];

const diseaseTypes = [
    { type: "Inflamatorias", examples: "Artritis reumatoide, lupus, espondiloartritis" },
    { type: "Degenerativas", examples: "Osteoartrosis, osteoporosis" },
    { type: "Metabólicas", examples: "Gota, condrocalcinosis" },
    { type: "Autoinmunes", examples: "Síndrome de Sjögren, vasculitis" },
    { type: "Del tejido conectivo", examples: "Esclerodermia, dermatomiositis" },
];

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Definición
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              ¿Qué es la Reumatología?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La Reumatología es la especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades del aparato locomotor y del tejido conectivo. Esta disciplina abarca más de 200 enfermedades diferentes.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Áreas Afectadas</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {affectedAreas.map((area, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="h-5 w-5 mr-2 mt-1 text-primary flex-shrink-0" />
                                <span>{area}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl">
              Tipos de Enfermedades Reumatológicas
            </h3>
            <div className="grid gap-4">
                {diseaseTypes.map((disease, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{disease.type}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{disease.examples}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
