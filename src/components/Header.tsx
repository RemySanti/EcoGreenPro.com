import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
              <Logo className="h-[58px]" />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, color: "#16a34a" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#16a34a" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("service-area")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Service Area
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#16a34a" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#16a34a" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </motion.button>
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:484-268-3078" 
              onClick={() => trackPhoneCall('header')}
              className="hidden lg:flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>(484) 268-3078</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => scrollToSection("contact")} className="shadow-md hover:shadow-lg">
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}