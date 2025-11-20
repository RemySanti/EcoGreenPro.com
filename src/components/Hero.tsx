import { Button } from "./ui/button";
import { Phone, MapPin, Sparkles } from "lucide-react";
import bannerImage from "figma:asset/64c3746f4770ab8e68aff5ec951dc98c1ad827c2.png";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-900 to-green-700 text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster={bannerImage}
        >
          <source src="https://drive.google.com/uc?export=download&id=1S0FMbUhqNVvHaJ_DtUWc7riAbhQmtSCW" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <img
            src={bannerImage}
            alt="Clean home interior"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-900/30"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-green-200">
            <MapPin className="w-5 h-5" />
            <span>Serving 100-Mile Radius from Bethlehem, PA</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6">
            Professional Cleaning Services You Can Trust
          </h1>
          
          <p className="text-xl mb-8 text-green-100">
            Expert carpet, upholstery, tile, area rug, dryer vent, and HVAC vent cleaning services for your home or business.
          </p>
          
          <div className="bg-green-800/50 border-2 border-green-400 rounded-lg p-4 mb-8 inline-block">
            <div className="flex items-center gap-2 text-green-100">
              <Sparkles className="w-6 h-6 text-green-300" />
              <span className="text-lg">
                <strong className="text-white">Special Offer:</strong> Book 3 Rooms, Get 1 FREE!
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToContact} className="bg-white text-green-900 hover:bg-green-50">
              Get Free Quote
            </Button>
            <a 
              href="tel:484-268-3078" 
              onClick={() => trackPhoneCall('hero_button')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg border-2 border-green-400 group"
            >
              <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-green-100 uppercase tracking-wide">Call Now</span>
                <span className="text-lg">(484) 268-3078</span>
              </div>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <div className="text-3xl mb-1">15+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl mb-1">10K+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl mb-1">100%</div>
              <div className="text-green-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}