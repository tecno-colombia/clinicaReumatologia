import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. Jorge Pérez",
    image: "https://placehold.co/400x400.png",
    hint: "doctor portrait",
  },
  {
    name: "Dr. Antonio Iglesias",
    image: "https://placehold.co/400x400.png",
    hint: "doctor portrait",
  },
  {
    name: "Dr. Jesús Godoy",
    image: "https://placehold.co/400x400.png",
    hint: "doctor portrait",
  },
];

export function Doctors() {
  return (
    <section id="medicos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Nuestro Equipo
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Reumatólogos Expertos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un equipo de profesionales altamente calificados y dedicados a su bienestar.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden text-center transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={doctor.image}
                  alt={`Foto de ${doctor.name}`}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                  data-ai-hint={doctor.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{doctor.name}</CardTitle>
                <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground">
                    <Stethoscope className="h-4 w-4" />
                    <span>Reumatólogo</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
