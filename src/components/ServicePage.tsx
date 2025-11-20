import { Phone, CheckCircle, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";
import { useSEO } from "../hooks/useSEO";

interface ServicePageProps {
  service: {
    id: string;
    title: string;
    icon: any;
    shortDescription: string;
    longDescription: string;
    image: string;
    benefits: string[];
    process: string[];
    pricing: string;
  };
  onBack: () => void;
}

const serviceContent: Record<string, {
  heroSubtitle: string;
  whyChooseImage: string;
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChoosePoints: string[];
  processImage: string;
  resultsImage: string;
  resultsTitle: string;
  resultsDescription: string;
  faqImage: string;
  faqs: { question: string; answer: string }[];
}> = {
  "carpet-cleaning": {
    heroSubtitle: "Professional Deep Steam Cleaning for Healthier, Fresher Carpets",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Why Choose EcoGreen Pro for Carpet Cleaning?",
    whyChooseDescription: "We combine industry-leading equipment with eco-friendly solutions to deliver exceptional results while keeping your family and pets safe.",
    whyChoosePoints: [
      "Certified technicians with 10+ years experience",
      "Non-toxic, biodegradable cleaning solutions",
      "Advanced hot water extraction technology",
      "Same-day service available",
      "100% satisfaction guarantee",
      "Free stain protection treatment with full-home service"
    ],
    processImage: "https://images.unsplash.com/photo-1625044364652-c841c1ae31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJwZXQlMjBjbGVhbmluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYyOTExMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "Experience the EcoGreen Pro Difference",
    resultsDescription: "Our customers consistently report cleaner, fresher carpets that dry faster and stay cleaner longer. We don't just clean the surface – we extract deep-down dirt and allergens that other methods miss.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "How long does it take for carpets to dry?",
        answer: "Most carpets dry within 2-4 hours with our fast-drying technology. We use powerful extraction equipment that removes more water than traditional methods."
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer: "Absolutely! We use only non-toxic, biodegradable cleaning solutions that are safe for your entire family, including children and pets."
      },
      {
        question: "How often should I have my carpets professionally cleaned?",
        answer: "We recommend professional cleaning every 6-12 months for most homes, or more frequently for high-traffic areas or homes with pets and children."
      },
      {
        question: "Can you remove all stains?",
        answer: "While we can remove most stains, some permanent stains like bleach or dye may not be completely removable. We'll assess each stain and let you know what to expect."
      }
    ]
  },
  "upholstery-cleaning": {
    heroSubtitle: "Expert Cleaning for Furniture & Car Upholstery",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Why Choose Our Upholstery Cleaning Service?",
    whyChooseDescription: "Every fabric is unique, and our trained specialists know exactly how to clean each type safely and effectively, whether it's your favorite sofa or your car's interior.",
    whyChoosePoints: [
      "Fabric-specific cleaning methods for all materials",
      "Gentle on fabrics, tough on stains",
      "Color-safe processes that won't cause fading",
      "Odor elimination, not just masking",
      "Mobile service available for car upholstery",
      "Fabric protection options to prevent future stains"
    ],
    processImage: "https://images.unsplash.com/photo-1684165610413-2401399e0e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHNvZmElMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyOTExMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "Restore Your Furniture's Beauty",
    resultsDescription: "Professional upholstery cleaning doesn't just clean – it revitalizes. We remove years of accumulated dirt, body oils, and allergens that regular vacuuming can't reach, bringing your furniture back to life.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "Do you clean leather furniture?",
        answer: "Yes! We have specialized cleaning and conditioning treatments for leather upholstery that clean, protect, and restore the natural beauty of your leather furniture."
      },
      {
        question: "Can you clean car seats and interiors?",
        answer: "Absolutely! We offer mobile upholstery cleaning for vehicles, including car seats, door panels, headliners, and trunk areas."
      },
      {
        question: "How long until I can use my furniture again?",
        answer: "Most upholstery dries within 2-6 hours depending on fabric type. We use low-moisture cleaning methods when possible to speed up drying time."
      },
      {
        question: "Will cleaning damage delicate fabrics?",
        answer: "No – we always test fabric compatibility first and use the gentlest effective method for each material. Our technicians are trained in handling all fabric types, from cotton to silk."
      }
    ]
  },
  "tile-grout-cleaning": {
    heroSubtitle: "Restore the Original Beauty of Your Tile & Grout",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Professional Tile & Grout Restoration",
    whyChooseDescription: "Stop scrubbing on your hands and knees! Our professional-grade equipment and techniques make even the dirtiest grout lines look new again.",
    whyChoosePoints: [
      "High-pressure steam cleaning technology",
      "Removes years of built-up dirt and stains",
      "Professional grout sealing available",
      "Safe for all tile types including natural stone",
      "Eco-friendly cleaning solutions",
      "Dramatically improves appearance and hygiene"
    ],
    processImage: "https://images.unsplash.com/photo-1577198069945-c7333d7b7000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwZ3JvdXQlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjI5MTEyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "See the Transformation",
    resultsDescription: "Our customers are amazed at how much brighter and cleaner their tile floors look after our service. Grout that looked permanently stained returns to its original color, and tile surfaces regain their shine.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "Should I seal my grout after cleaning?",
        answer: "Yes, we highly recommend grout sealing! It creates a protective barrier that prevents future staining and makes regular cleaning much easier."
      },
      {
        question: "Can you clean natural stone tile?",
        answer: "Absolutely! We have special cleaning solutions and techniques specifically designed for natural stone like marble, travertine, and slate."
      },
      {
        question: "How long does the cleaning process take?",
        answer: "Most residential tile cleaning jobs take 2-4 hours depending on square footage and soil level. Sealing adds additional time."
      },
      {
        question: "Will you damage my tile during cleaning?",
        answer: "No – we adjust our equipment and techniques based on your tile type. Our process is safe for all tile surfaces and actually helps preserve them."
      }
    ]
  },
  "area-rug-cleaning": {
    heroSubtitle: "Specialized Care for Your Valuable Rugs",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Expert Care for Every Type of Rug",
    whyChooseDescription: "From delicate Persian rugs to modern synthetics, we have the expertise to clean your area rugs safely and effectively at your location, preserving their beauty and value.",
    whyChoosePoints: [
      "Hot water extraction for deep cleaning",
      "On-site service - we come to you",
      "Color bleeding prevention techniques",
      "Safe for Persian, Oriental, and all rug types",
      "Fringe cleaning and restoration",
      "Pet odor and stain removal specialists"
    ],
    processImage: "https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmllbnRhbCUyMHJ1ZyUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MjkxMTIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "Preserve Your Investment",
    resultsDescription: "Area rugs are often valuable investments that deserve professional care. Our specialized hot water extraction cleaning preserves the integrity of the fibers, prevents color bleeding, and extends the life of your rugs for generations to come.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "Do you use hot water extraction for area rugs?",
        answer: "Yes! We use professional hot water extraction equipment specifically designed for area rugs. This deep-cleaning method effectively removes embedded dirt and allergens while being safe for all rug types."
      },
      {
        question: "Do you clean rugs at my home or do I need to bring them in?",
        answer: "We clean your area rugs right at your location! Our technicians bring all necessary equipment to your home, so there's no need to move or transport your rugs."
      },
      {
        question: "Can you remove pet odors from rugs?",
        answer: "Yes! We have specialized enzymatic treatments that break down pet urine at the molecular level, completely eliminating odors rather than just masking them."
      },
      {
        question: "How long does it take for area rugs to dry?",
        answer: "Most area rugs dry within 4-8 hours depending on thickness and humidity. Our powerful extraction equipment removes maximum moisture to speed up drying time."
      }
    ]
  },
  "dryer-vent-cleaning": {
    heroSubtitle: "Reduce Fire Risk & Improve Dryer Efficiency",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Critical Safety Service for Your Home",
    whyChooseDescription: "Clogged dryer vents cause over 15,000 house fires annually. Our professional cleaning service removes dangerous lint buildup, reduces fire risk, and improves your dryer's performance.",
    whyChoosePoints: [
      "Reduces fire risk by up to 80%",
      "Improves dryer efficiency and performance",
      "Lowers energy bills significantly",
      "Extends dryer lifespan",
      "Eliminates moisture and mildew problems",
      "Complete system inspection included"
    ],
    processImage: "https://images.unsplash.com/photo-1627257062083-0b09fafdeed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnllciUyMGxpbnQlMjBmaXJlJTIwc2FmZXR5fGVufDF8fHx8MTc2MjkxMTIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "Feel the Difference Immediately",
    resultsDescription: "After our service, you'll notice your dryer works better immediately – faster drying times, less heat, and lower energy bills. More importantly, you'll have peace of mind knowing your family is safer.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "How often should I have my dryer vent cleaned?",
        answer: "We recommend annual cleaning for most homes. If you have a large family or do lots of laundry, consider cleaning every 6 months."
      },
      {
        question: "What are warning signs my vent needs cleaning?",
        answer: "Long drying times, excessive heat, burning smell, lint around the dryer, or the outside vent hood not opening properly are all warning signs."
      },
      {
        question: "Do you clean the entire vent system?",
        answer: "Yes! We clean from the dryer connection all the way to the exterior vent, including all bends and sections of ductwork."
      },
      {
        question: "How long does the service take?",
        answer: "Most dryer vent cleaning takes 45-90 minutes depending on vent length and condition. We'll have your dryer running safely in no time."
      }
    ]
  },
  "hvac-vent-cleaning": {
    heroSubtitle: "Breathe Cleaner Air & Boost System Efficiency",
    whyChooseImage: "https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjkxMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    whyChooseTitle: "Improve Your Indoor Air Quality",
    whyChooseDescription: "Your HVAC system circulates air throughout your home thousands of times. When ducts are dirty, you're breathing dust, allergens, and potentially mold. Our professional cleaning makes a real difference.",
    whyChoosePoints: [
      "Removes dust, allergens, and contaminants",
      "Reduces allergy and asthma symptoms",
      "Improves HVAC system efficiency",
      "Eliminates musty odors",
      "Extends equipment lifespan",
      "Lowers energy costs up to 30%"
    ],
    processImage: "https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwYWlyJTIwZHVjdCUyMHN5c3RlbXxlbnwxfHx8fDE3NjI5MTEyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsImage: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    resultsTitle: "Notice the Difference in Your Home",
    resultsDescription: "After HVAC cleaning, customers report less dust on furniture, fewer allergy symptoms, better airflow, and fresher-smelling air. Your heating and cooling system will also run more efficiently.",
    faqImage: "https://images.unsplash.com/photo-1650964336783-fd8c0c241b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYyOTExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    faqs: [
      {
        question: "How often should HVAC ducts be cleaned?",
        answer: "We recommend cleaning every 3-5 years for most homes. Homes with pets, smokers, or allergy sufferers may benefit from more frequent cleaning."
      },
      {
        question: "Will duct cleaning help with allergies?",
        answer: "Yes! Removing accumulated dust, pet dander, pollen, and other allergens from your ductwork can significantly reduce indoor air allergens and symptoms."
      },
      {
        question: "Do you clean all parts of the HVAC system?",
        answer: "We clean all accessible ductwork, registers, grilles, and the main unit. We can also clean the blower motor and coils for comprehensive system cleaning."
      },
      {
        question: "How long does HVAC cleaning take?",
        answer: "Most residential systems take 3-5 hours to clean thoroughly. Larger homes or more complex systems may take longer."
      }
    ]
  }
};

export function ServicePage({ service, onBack }: ServicePageProps) {
  const content = serviceContent[service.id];
  const Icon = service.icon;

  useSEO({
    title: `${service.title} - EcoGreen Pro`,
    description: service.longDescription,
    keywords: `${service.title}, professional cleaning, eco-friendly, home maintenance, ${service.id}`
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-emerald-50 py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Section 1: Hero */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-emerald-900">{service.title}</h1>
              </div>
              <p className="text-gray-600 mb-6">{content.heroSubtitle}</p>
              <p className="text-gray-700 mb-8">{service.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:484-268-3078"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                  onClick={() => trackPhoneCall('service_page_hero')}
                >
                  <Phone className="w-5 h-5" />
                  Call (484) 268-3078
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                Serving PA & NJ
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                style={service.id === 'hvac-vent-cleaning' ? { objectPosition: 'center 20%' } : undefined}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src={content.whyChooseImage}
                alt="Professional cleaning team"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-emerald-900 mb-4">{content.whyChooseTitle}</h2>
              <p className="text-gray-700 mb-6">{content.whyChooseDescription}</p>
              <div className="space-y-3">
                {content.whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-emerald-900 mb-4">Our Professional Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={content.processImage}
                alt={`${service.title} process`}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Results & Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-emerald-900 mb-4">{content.resultsTitle}</h2>
              <p className="text-gray-700 mb-8">{content.resultsDescription}</p>
              <div className="grid grid-cols-1 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={content.resultsImage}
                alt="Clean home results"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-emerald-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Get answers to common questions about our {service.title.toLowerCase()} service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {content.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-emerald-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="sticky top-8">
              <ImageWithFallback
                src={content.faqImage}
                alt="Eco-friendly cleaning products"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover mb-6"
              />
              <div className="bg-emerald-600 text-white p-8 rounded-lg">
                <h3 className="mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Contact us today for a free quote and experience the EcoGreen Pro difference!
                </p>
                <a
                  href="tel:484-268-3078"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center"
                  onClick={() => trackPhoneCall('service_page_sidebar')}
                >
                  <Phone className="w-5 h-5" />
                  Call (484) 268-3078
                </a>
                <p className="text-emerald-100 text-sm mt-4 text-center">
                  Monday-Saturday: 9am-6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}