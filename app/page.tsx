import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import { Cta4 } from "@/components/ui/cta-4";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Team />
        <Testimonials />
        <Pricing />
        <Cta4
          title="Your healthier smile begins here"
          description="Schedule your appointment today and experience dental care that puts your comfort and health first."
          buttonText="Book an appointment"
          buttonUrl="#cta"
          items={[
            "Experienced Professionals",
            "State-of-the-art Equipment",
            "Strict Infection Control",
            "Comprehensive Care",
            "Transparent Pricing"
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
