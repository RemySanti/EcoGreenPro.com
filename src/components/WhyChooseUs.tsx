import { Shield, Clock, ThumbsUp, Award, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day and emergency services available for urgent needs.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We're not happy until you're completely satisfied with our work.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted expertise in all types of cleaning services.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our team is certified and continuously trained in the latest techniques.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, effective cleaning solutions that protect your family and pets.",
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34, 197, 94) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref as any}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose EcoGreen Pro?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional results and outstanding service
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}