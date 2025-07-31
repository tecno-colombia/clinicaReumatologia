import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Microscope, Beaker, Syringe, ClipboardType, FlaskConical, Check } from "lucide-react";

const ServiceItem = ({ icon: Icon, title, description, children }: { icon: React.ElementType, title: string, description: string, children: React.ReactNode }) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-full">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-headline text-primary">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        {children}
      </div>
    </div>
)

const ProcedureSection = ({ title, items }: { title: string, items: string[] }) => (
    <div className="mt-6">
        <h4 className="font-bold text-lg font-headline text-primary/90 bg-primary/10 px-4 py-2 rounded-md inline-block">{title}</h4>
        <ul className="mt-4 space-y-3">
            {items.map((item, index) => 
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>)}
        </ul>
    </div>
)

export function Services() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Servicios Ambulatorios
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una atención integral y de vanguardia para el diagnóstico y tratamiento de enfermedades reumatológicas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12">
            <ServiceItem icon={Stethoscope} title="Consulta Externa Especializada" description="Atención médica experta para el diagnóstico y manejo de sus condiciones.">
                <div className="grid md:grid-cols-2 gap-8">
                  <ProcedureSection title="Primera Vez:" items={["Evaluación integral del paciente", "Historia clínica detallada", "Examen físico completo del aparato locomotor", "Solicitud de estudios complementarios", "Plan diagnóstico y terapéutico inicial", "Educación al paciente y familia"]} />
                  <ProcedureSection title="Control y Seguimiento:" items={["Monitoreo de evolución clínica", "Ajuste de tratamientos", "Evaluación de respuesta terapéutica", "Detección temprana de complicaciones", "Seguimiento de estudios paraclínicos"]} />
                </div>
            </ServiceItem>
            
            <ServiceItem icon={Microscope} title="Sala de Procedimientos Diagnósticos" description="Tecnología avanzada para un diagnóstico preciso.">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline text-primary">Capilaroscopia</h3>
                  <p className="text-muted-foreground mb-4">Procedimiento no invasivo para evaluación microvascular.</p>
                  <ProcedureSection title="Indicaciones:" items={["Diagnóstico de esclerosis sistémica", "Evaluación de fenómeno de Raynaud", "Síndrome de Sjögren", "Dermatomiositis", "Lupus eritematoso sistémico", "Vasculitis primarias"]} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline text-primary">Biopsia de Glándulas Salivales Menores</h3>
                  <p className="text-muted-foreground mb-4">Procedimiento diagnóstico mínimamente invasivo.</p>
                  <ProcedureSection title="Indicaciones:" items={["Diagnóstico de síndrome de Sjögren", "Evaluación de xerostomía de causa autoinmune", "Sospecha de infiltración glandular", "Diagnóstico diferencial de xeroftalmia"]} />
                </div>
              </div>
            </ServiceItem>
        </div>
      </div>
    </section>
  );
}
