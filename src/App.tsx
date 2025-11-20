import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ServiceArea } from "./components/ServiceArea";
import { Testimonials } from "./components/Testimonials";
import { Contact, Footer } from "./components/ContactFooter";
import { ServicePage } from "./components/ServicePage";
import { services } from "./data/services";

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const service = selectedService 
    ? services.find(s => s.id === selectedService) 
    : null;

  if (service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ServicePage service={service} onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services onSelectService={handleSelectService} />
      <WhyChooseUs />
      <ServiceArea />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
