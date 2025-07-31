import { Header } from "@/components/costa-rheuma-care/header";
import { Hero } from "@/components/costa-rheuma-care/hero";
import { About } from "@/components/costa-rheuma-care/about";
import { Services } from "@/components/costa-rheuma-care/services";
import { Locations } from "@/components/costa-rheuma-care/locations";
import { Doctors } from "@/components/costa-rheuma-care/doctors";
import { TargetAudience } from "@/components/costa-rheuma-care/target-audience";
import { Commitments } from "@/components/costa-rheuma-care/commitments";
import { Footer } from "@/components/costa-rheuma-care/footer";
import { Transversal } from "@/components/costa-rheuma-care/transversal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Transversal />
        <Locations />
        <TargetAudience />
        <Doctors />
        <Commitments />
      </main>
      <Footer />
    </div>
  );
}
