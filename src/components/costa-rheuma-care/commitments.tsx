import { CheckCircle } from "lucide-react";

const commitments = [
  "Atención humanizada y centrada en el paciente",
  "Tecnología de vanguardia en diagnóstico y tratamiento",
  "Personal altamente calificado y en educación continua",
  "Investigación clínica de alto nivel",
  "Acceso equitativo a tratamientos innovadores",
  "Seguimiento integral y multidisciplinario",
  "Educación continua de pacientes y familias",
  "Impacto social en la región Caribe colombiana",
];

export function Commitments() {
  return (
    <section id="compromisos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
            Nuestro Compromiso con la Calidad
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nuestra misión es proporcionar una atención excepcional, guiada por la ciencia, la ética y la empatía.
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-start text-left gap-4 p-4 rounded-lg bg-secondary/50">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-base">{commitment}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
