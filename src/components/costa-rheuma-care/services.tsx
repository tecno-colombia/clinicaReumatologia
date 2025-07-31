import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Stethoscope, Microscope, Beaker, Syringe, ClipboardType, FlaskConical } from "lucide-react";

const ServiceItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <AccordionItem value={title}>
        <AccordionTrigger className="text-xl font-headline hover:no-underline">
            <div className="flex items-center gap-4">
                <Icon className="h-8 w-8 text-primary" />
                {title}
            </div>
        </AccordionTrigger>
        <AccordionContent className="pl-16 text-base">
            {children}
        </AccordionContent>
    </AccordionItem>
)

const ProcedureSection = ({ title, items }: { title: string, items: string[] }) => (
    <>
        <h4 className="font-bold text-lg mt-4 mb-2 font-headline text-primary/90">{title}</h4>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>
)

export function Services() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Portafolio de Servicios
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Nuestros Servicios Especializados
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una atención integral y de vanguardia para el diagnóstico y tratamiento de enfermedades reumatológicas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12">
            <Accordion type="single" collapsible className="w-full">
                <ServiceItem icon={Stethoscope} title="Servicios Ambulatorios">
                    <h3 className="font-bold text-xl mb-2 font-headline text-primary">Consulta Externa Especializada</h3>
                    <ProcedureSection title="Primera Vez:" items={["Evaluación integral del paciente", "Historia clínica detallada", "Examen físico completo del aparato locomotor", "Solicitud de estudios complementarios", "Plan diagnóstico y terapéutico inicial", "Educación al paciente y familia"]} />
                    <ProcedureSection title="Control y Seguimiento:" items={["Monitoreo de evolución clínica", "Ajuste de tratamientos", "Evaluación de respuesta terapéutica", "Detección temprana de complicaciones", "Seguimiento de estudios paraclínicos"]} />
                    <ProcedureSection title="Consulta de Alta Complejidad:" items={["Casos complejos multisistémicos", "Enfermedades raras del tejido conectivo", "Pacientes con múltiples comorbilidades", "Interconsulta con otras especialidades"]} />
                </ServiceItem>

                <ServiceItem icon={Microscope} title="Sala de Procedimientos Diagnósticos">
                    <h3 className="font-bold text-xl mb-2 font-headline text-primary">Capilaroscopia</h3>
                    <p className="text-muted-foreground mb-4">Procedimiento no invasivo para evaluación microvascular.</p>
                    <ProcedureSection title="Indicaciones:" items={["Diagnóstico de esclerosis sistémica", "Evaluación de fenómeno de Raynaud", "Síndrome de Sjögren", "Dermatomiositis", "Lupus eritematoso sistémico", "Vasculitis primarias"]} />
                    <ProcedureSection title="Características del servicio:" items={["Equipo de capilaroscopia de alta resolución", "Personal especializado certificado", "Interpretación inmediata", "Archivo digital de imágenes", "Seguimiento evolutivo de lesiones"]} />

                    <h3 className="font-bold text-xl mt-8 mb-2 font-headline text-primary">Biopsia de Glándulas Salivales Menores</h3>
                    <p className="text-muted-foreground mb-4">Procedimiento diagnóstico mínimamente invasivo.</p>
                    <ProcedureSection title="Indicaciones:" items={["Diagnóstico de síndrome de Sjögren", "Evaluación de xerostomía de causa autoinmune", "Sospecha de infiltración glandular", "Diagnóstico diferencial de xeroftalmia"]} />
                    <ProcedureSection title="Protocolo del procedimiento:" items={["Evaluación pre-procedimiento", "Anestesia local", "Toma de muestra de labio inferior", "Envío a anatomía patológica especializada", "Seguimiento post-procedimiento", "Entrega de resultados con interpretación"]} />
                </ServiceItem>

                <ServiceItem icon={Syringe} title="Sala de Infusión de Medicamentos">
                    <h3 className="font-bold text-xl mb-2 font-headline text-primary">Terapias Biológicas y Sintéticas Dirigidas</h3>
                    <ProcedureSection title="Medicamentos disponibles:" items={["Anti-TNF: Infliximab, Adalimumab, Rituximab", "Anti-CD20: Rituximab", "Anti-IL6: Tocilizumab", "Inhibidores JAK: Baricitinib, Tofacitinib", "Abatacept (modulador coestimulación)", "Belimumab (anti-BLYS)"]} />
                    <ProcedureSection title="Características de la sala:" items={["Ambiente controlado y aséptico", "Personal de enfermería especializado", "Monitoreo continuo durante infusión", "Manejo de reacciones adversas", "Protocolos de bioseguridad estrictos", "Sistema de farmacovigilancia"]} />

                    <h3 className="font-bold text-xl mt-8 mb-2 font-headline text-primary">Inmunosupresores Convencionales</h3>
                    <ProcedureSection title="" items={["Ciclofosfamida", "Metotrexato parenteral", "Leflunomida", "Azatioprina", "Micofenolato"]} />
                </ServiceItem>
                
                <ServiceItem icon={Beaker} title="Sala de Infiltración">
                    <h3 className="font-bold text-xl mb-2 font-headline text-primary">Procedimientos Intervencionistas</h3>
                    <ProcedureSection title="Infiltraciones Articulares:" items={["Grandes articulaciones: Rodilla, cadera, hombro, tobillo", "Pequeñas articulaciones: Manos, pies, muñecas", "Articulaciones axiales: Sacroilíacas, facetarias"]} />
                    <ProcedureSection title="Infiltraciones de Tejidos Blandos:" items={["Bursas (subacromial, trocantérea, olecraneana)", "Vainas tendinosas", "Puntos gatillo miofasciales", "Túnel del carpo"]} />
                    <ProcedureSection title="Medicamentos utilizados:" items={["Corticosteroides depot", "Ácido hialurónico", "Anestésicos locales", "Plasma rico en plaquetas (PRP)"]} />
                     <ProcedureSection title="Guía por imagen:" items={["Ecografía musculoesquelética", "Fluoroscopia cuando sea necesario", "Documentación por imágenes"]} />
                </ServiceItem>

                <ServiceItem icon={ClipboardType} title="Centro de Investigación Clínica">
                    <h3 className="font-bold text-xl mb-2 font-headline text-primary">Líneas de Investigación</h3>
                    <ProcedureSection title="Estudios Epidemiológicos:" items={["Prevalencia de enfermedades reumatológicas en el Caribe", "Factores de riesgo regionales", "Impacto socioeconómico de enfermedades autoinmunes"]} />
                    <ProcedureSection title="Ensayos Clínicos:" items={["Fase II y III de nuevos medicamentos", "Estudios de biosimilares", "Terapias combinadas", "Medicina personalizada"]} />
                    <ProcedureSection title="Investigación Traslacional:" items={["Biomarcadores de actividad de enfermedad", "Factores genéticos de susceptibilidad", "Microbioma y autoinmunidad", "Respuesta a tratamientos biológicos"]} />
                    <h3 className="font-bold text-xl mt-8 mb-2 font-headline text-primary">Colaboraciones Académicas</h3>
                     <ProcedureSection title="" items={["Universidad del Norte", "Universidad Simón Bolívar", "Universidad del Sinu", "Universidad de La Guajira", "Redes internacionales de investigación"]} />
                </ServiceItem>

            </Accordion>
        </div>
      </div>
    </section>
  );
}
