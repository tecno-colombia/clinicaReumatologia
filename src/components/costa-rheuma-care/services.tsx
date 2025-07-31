import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Stethoscope, Microscope, Syringe, TestTube, CheckCircle, Hospital, Users, Dna, FlaskConical } from "lucide-react";


const ServiceCard = ({ icon: Icon, title, description, children, defaultOpen = false }: { icon: React.ElementType, title: string, description: string, children: React.ReactNode, defaultOpen?: boolean }) => (
  <Card className="overflow-hidden">
    <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : ""}>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="p-6 hover:no-underline hover:bg-secondary/50">
          <div className="flex items-start md:items-center gap-4 text-left">
            <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline text-primary">{title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{description}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-6 pb-6 pt-0">
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Card>
);

const ProcedureSection = ({ title, items, columns = 1 }: { title: string, items: string[], columns?: number }) => (
    <div className="mt-4">
        <h4 className="font-bold text-base font-headline text-primary/90 bg-primary/10 px-3 py-1.5 rounded-md inline-block mb-3">{title}</h4>
        <ul className={`space-y-2 ${columns > 1 ? `md:grid md:grid-cols-${columns} md:gap-x-6 md:space-y-0` : ''}`}>
            {items.map((item, index) => 
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{item}</span>
            </li>)}
        </ul>
    </div>
);


export function Services() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                Portafolio
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Servicios Ambulatorios
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una atención integral y de vanguardia para el diagnóstico y tratamiento de enfermedades reumatológicas.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl items-start gap-6 py-12">
            <ServiceCard icon={Hospital} title="Consulta Externa Especializada" description="Atención médica experta para el diagnóstico y manejo de sus condiciones." defaultOpen>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <ProcedureSection title="Primera Vez:" items={["Evaluación integral del paciente", "Historia clínica detallada", "Examen físico completo del aparato locomotor", "Solicitud de estudios complementarios", "Plan diagnóstico y terapéutico inicial", "Educación al paciente y familia"]} />
                  <ProcedureSection title="Control y Seguimiento:" items={["Monitoreo de evolución clínica", "Ajuste de tratamientos", "Evaluación de respuesta terapéutica", "Detección temprana de complicaciones", "Seguimiento de estudios paraclínicos"]} />
                  <div className="md:col-span-2">
                    <ProcedureSection title="Consulta de Alta Complejidad:" items={["Casos complejos multisistémicos", "Enfermedades raras del tejido conectivo", "Pacientes con múltiples comorbilidades", "Interconsulta con otras especialidades"]} columns={2}/>
                  </div>
                </div>
            </ServiceCard>
            
            <ServiceCard icon={Microscope} title="Sala de Procedimientos Diagnósticos" description="Tecnología avanzada para un diagnóstico preciso y oportuno.">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-2 font-headline text-primary">Capilaroscopia</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Procedimiento no invasivo para evaluación microvascular, clave en el diagnóstico temprano de esclerodermia y otras conectivopatías.</p>
                  <ProcedureSection title="Indicaciones:" items={["Diagnóstico de esclerosis sistémica", "Evaluación de fenómeno de Raynaud", "Síndrome de Sjögren", "Dermatomiositis", "Lupus eritematoso sistémico", "Vasculitis primarias"]} />
                  <ProcedureSection title="Características del servicio:" items={["Equipo de alta resolución", "Personal certificado", "Interpretación inmediata", "Archivo digital de imágenes", "Seguimiento evolutivo"]} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-headline text-primary">Biopsia de Glándulas Salivales Menores</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Procedimiento diagnóstico mínimamente invasivo, fundamental para la confirmación del Síndrome de Sjögren.</p>
                  <ProcedureSection title="Indicaciones:" items={["Diagnóstico de síndrome de Sjögren", "Evaluación de xerostomía autoinmune", "Sospecha de infiltración glandular", "Diagnóstico diferencial de xeroftalmia"]} />
                  <ProcedureSection title="Protocolo del procedimiento:" items={["Evaluación pre-procedimiento", "Anestesia local", "Toma de muestra de labio inferior", "Envío a patología especializada", "Seguimiento y entrega de resultados"]} />
                </div>
              </div>
            </ServiceCard>

            <ServiceCard icon={FlaskConical} title="Sala de Infusión de Medicamentos" description="Administración segura de terapias biológicas, sintéticas dirigidas e inmunosupresores.">
               <ProcedureSection title="Terapias Biológicas y Sintéticas Dirigidas:" items={["Anti-TNF: Infliximab, Adalimumab", "Anti-CD20: Rituximab", "Anti-IL6: Tocilizumab", "Inhibidores JAK: Baricitinib, Tofacitinib", "Modulador coestimulación: Abatacept", "Anti-BLYS: Belimumab"]} columns={2} />
               <ProcedureSection title="Inmunosupresores Convencionales:" items={["Ciclofosfamida", "Metotrexato parenteral", "Leflunomida", "Azatioprina", "Micofenolato"]} columns={2} />
               <ProcedureSection title="Características de la Sala:" items={["Ambiente controlado y aséptico", "Personal de enfermería especializado", "Monitoreo continuo durante infusión", "Manejo de reacciones adversas", "Protocolos de bioseguridad estrictos", "Sistema de farmacovigilancia"]} columns={2}/>
            </ServiceCard>

            <ServiceCard icon={Syringe} title="Sala de Infiltración" description="Procedimientos intervencionistas para el alivio del dolor y la inflamación articular.">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <ProcedureSection title="Infiltraciones Articulares:" items={["Grandes articulaciones: Rodilla, cadera, hombro", "Pequeñas articulaciones: Manos, pies, muñecas", "Articulaciones axiales: Sacroilíacas, facetarias"]} />
                        <ProcedureSection title="Infiltraciones de Tejidos Blandos:" items={["Bursas (subacromial, trocantérea)", "Vainas tendinosas", "Puntos gatillo miofasciales", "Túnel del carpo"]} />
                    </div>
                     <div>
                        <ProcedureSection title="Medicamentos Utilizados:" items={["Corticosteroides depot", "Ácido hialurónico", "Anestésicos locales", "Plasma rico en plaquetas (PRP)"]} />
                        <ProcedureSection title="Guía por Imagen:" items={["Ecografía musculoesquelética", "Fluoroscopia cuando sea necesario", "Documentación por imágenes"]} />
                    </div>
                </div>
            </ServiceCard>
        </div>
      </div>
    </section>
  );
}
