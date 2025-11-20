import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "../data/services";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for your home or business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={`/${service.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectService(service.id);
                }}
                className="block"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={service.id === 'hvac-vent-cleaning' ? { objectPosition: 'center 20%' } : undefined}
                    />
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}