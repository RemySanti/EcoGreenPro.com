import { MapPin, CheckCircle, ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cities } from "../data/cities";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ServiceArea() {
  const [showAllCities, setShowAllCities] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="service-area" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref as any}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 shadow-md">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Wide Service Coverage</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving Your Area</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve all communities within a 100-mile radius of Bethlehem, PA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-green-50 to-white shadow-xl border-2 border-green-100">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Major Cities We Serve</h3>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowAllCities(!showAllCities)}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all mb-3 shadow-sm hover:shadow-md"
                  >
                    <span className="text-gray-700 font-medium">
                      {showAllCities ? `All ${cities.length} Cities` : `View All ${cities.length} Cities We Serve`}
                    </span>
                    <motion.div
                      animate={{ rotate: showAllCities ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-green-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {showAllCities && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-2 gap-3"
                        >
                          {cities.map((city) => (
                            <motion.div
                              key={city.id}
                              variants={itemVariants}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {city.name}, {city.state}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!showAllCities && (
                    <p className="text-sm text-gray-500 font-medium">
                      Serving 20 cities across Pennsylvania and New Jersey
                    </p>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-center shadow-lg"
              >
                <p>
                  Not sure if we service your area?{" "}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="underline hover:text-green-100 font-semibold"
                  >
                    Contact us
                  </motion.button>{" "}
                  and we'll let you know!
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}