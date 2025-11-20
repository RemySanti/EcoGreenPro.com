import { MapPin, CheckCircle, ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cities } from "../data/cities";
import { useState } from "react";

export function ServiceArea() {
  const [showAllCities, setShowAllCities] = useState(false);

  return (
    <section id="service-area" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <span>Wide Service Coverage</span>
          </div>
          <h2 className="text-gray-900 mb-4">Serving Your Area</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly serve all communities within a 100-mile radius of Bethlehem, PA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-900 mb-4">Coverage Area</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-2">
                        Based in <span className="text-green-600">Bethlehem, Pennsylvania</span>
                      </p>
                      <p className="text-gray-600">
                        We service all residential and commercial properties within a 100-mile radius, ensuring professional cleaning services are accessible to your community.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-4">Major Cities We Serve</h3>
                  <button
                    onClick={() => setShowAllCities(!showAllCities)}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all mb-3"
                  >
                    <span className="text-gray-700">
                      {showAllCities ? `All ${cities.length} Cities` : `View All ${cities.length} Cities We Serve`}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-600 transition-transform ${
                        showAllCities ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showAllCities && (
                    <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      {cities.map((city) => (
                        <div key={city.id} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {city.name}, {city.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!showAllCities && (
                    <p className="text-sm text-gray-500">
                      Serving 20 cities across Pennsylvania and New Jersey
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-600 text-white rounded-lg text-center">
                <p>
                  Not sure if we service your area?{" "}
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="underline hover:text-green-100"
                  >
                    Contact us
                  </button>{" "}
                  and we'll let you know!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}