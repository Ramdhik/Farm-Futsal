import AboutUs from "./AboutUs/page";
import Hero from "./Hero/page";
import Facilities from "./Facilities/page";
import Contact from "./Contact/page";
import Navbar from "@/components/ui/navbar";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Facilities />
      <Contact />
    </div>
  );
}
