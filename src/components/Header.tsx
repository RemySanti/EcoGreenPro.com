import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
              <Logo className="h-[58px]" />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("service-area")} className="text-gray-700 hover:text-green-600 transition-colors">
              Service Area
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="tel:484-268-3078" 
              onClick={() => trackPhoneCall('header')}
              className="hidden lg:flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(484) 268-3078</span>
            </a>
            <Button onClick={() => scrollToSection("contact")}>Get a Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
}