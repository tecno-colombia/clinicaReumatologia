import { Badge } from "@/components/ui/badge";

const conditions = [
  "Pacientes con artritis reumatoide",
  "Lupus eritematoso sistémico",
  "Espondiloartritis y espondilitis anquilosante",
  "Síndrome de Sjögren",
  "Esclerosis sistémica",
  "Vasculitis primarias y secundarias",
  "Fibromialgia y dolor musculoesquelético",
  "Osteoporosis y enfermedades metabólicas óseas",
  "Artritis psoriásica",
  "Gota y artropatías cristalinas",
];

export function TargetAudience() {
  return (
    <section id="poblacion" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Población Objetivo
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Atendemos una amplia gama de enfermedades reumatológicas y musculoesqueléticas, brindando un manejo especializado a pacientes con las siguientes condiciones:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-8 max-w-4xl">
            {conditions.map((condition) => (
              <Badge key={condition} variant="secondary" className="px-3 py-1.5 text-sm font-normal rounded-md">
                {condition}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
