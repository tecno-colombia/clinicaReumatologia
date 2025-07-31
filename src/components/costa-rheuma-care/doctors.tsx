import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const doctors = [
  {
    name: "Dr. Antonio Iglesias",
    specialty: "Reumatólogo",
    image: "https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2Fantonio_iglescias.png?alt=media&token=98f9e7e9-9e44-4462-be9a-96e585642661",
    hint: "doctor portrait",
  },
  {
    name: "Dr. Jorge Pérez",
    specialty: "Reumatólogo",
    image: "https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2FWhatsApp%20Image%202025-07-31%20at%205.27.13%20PM.jpeg?alt=media&token=3142f4fc-7ab9-4ecd-aed9-fbe1e9959b91",
    hint: "doctor portrait",
  },
  {
    name: "Dr. Jesús Godoy",
    specialty: "Reumatólogo",
    image: "https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2FDr.godoy_-400x393%20(1).png?alt=media&token=f633ef6c-91f1-4ca6-bd2d-71c9d1593d1d",
    hint: "doctor portrait",
  },
  {
    name: "Dra. Tatiana González",
    specialty: "Reumatóloga Pediatra",
    image: "https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2F6ac61a63-82f9-47c7-8eb2-1c04120821d4.jpg?alt=media&token=9739bf97-18cc-459c-af59-82671ab9910d",
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
        <div className="py-12">
        <Carousel
          opts={{
            align: "start",
            loop: doctors.length > 3,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
        >
          <CarouselContent>
            {doctors.map((doctor) => (
              <CarouselItem key={doctor.name} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card className="pt-6 border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-0 gap-4">
                      <Image
                        src={doctor.image}
                        alt={`Foto de ${doctor.name}`}
                        width={180}
                        height={180}
                        className="rounded-full aspect-square object-cover"
                        data-ai-hint={doctor.hint}
                      />
                      <div className="text-center">
                        <h3 className="font-headline text-2xl font-semibold">{doctor.name}</h3>
                        <div className="mt-1 flex items-center justify-center gap-2 text-muted-foreground">
                            <Stethoscope className="h-4 w-4" />
                            <span>{doctor.specialty}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        </div>
      </div>
    </section>
  );
}
