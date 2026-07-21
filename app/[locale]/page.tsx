import { Hero } from "@/sections/hero";
import { Brands } from "@/sections/brands";
import { Statistics } from "@/sections/statistics";
import { About } from "@/sections/about";
import { Timeline } from "@/sections/timeline";
import { Services } from "@/sections/services";
import { Process } from "@/sections/process";
import { WhyChoose } from "@/sections/why-choose";
import { Workshop } from "@/sections/workshop";
import { Gallery } from "@/sections/gallery";
import { Testimonials } from "@/sections/testimonials";
import { FAQ } from "@/sections/faq";
import { Contact } from "@/sections/contact";
import { Maps } from "@/sections/maps";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <Statistics />
      <About />
      <Timeline />
      <Services />
      <Process />
      <WhyChoose />
      <Workshop />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Maps />
    </main>
  );
}
