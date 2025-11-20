import { Shield, Clock, ThumbsUp, Award, Users, Leaf } from "lucide-react";

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
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Why Choose EcoGreen Pro?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional results and outstanding service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}