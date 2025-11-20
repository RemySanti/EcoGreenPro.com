import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref as any}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience professional cleaning services? Contact us for a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
          >
            <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Thank You!</h3>
                <p className="text-gray-600">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="carpet">Carpet Cleaning</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="tile">Tile & Grout Cleaning</option>
                    <option value="area-rug">Area Rug Cleaning</option>
                    <option value="dryer-vent">Dryer Vent Cleaning</option>
                    <option value="hvac">HVAC Vent Cleaning</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full shadow-lg hover:shadow-xl">
                    Get Free Quote
                  </Button>
                </motion.div>
              </motion.form>
            )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  href="tel:484-268-3078" 
                  onClick={() => trackPhoneCall('contact_section')}
                  className="flex items-center gap-3 hover:text-green-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(484) 268-3078</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  href="mailto:info@ecogreenproservices.com"
                  className="flex items-center gap-3 hover:text-green-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@ecogreenproservices.com</span>
                </motion.a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Bethlehem, PA 18015</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Emergency services available 24/7</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">EcoGreen Pro</h3>
            <p className="text-gray-400">
              Professional cleaning services for your home and business in the Lehigh Valley and surrounding areas.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#carpet-cleaning" className="hover:text-white transition-colors">Carpet Cleaning</a></li>
              <li><a href="#upholstery-cleaning" className="hover:text-white transition-colors">Upholstery Cleaning</a></li>
              <li><a href="#tile-grout-cleaning" className="hover:text-white transition-colors">Tile & Grout Cleaning</a></li>
              <li><a href="#area-rug-cleaning" className="hover:text-white transition-colors">Area Rug Cleaning</a></li>
              <li><a href="#dryer-vent-cleaning" className="hover:text-white transition-colors">Dryer Vent Cleaning</a></li>
              <li><a href="#hvac-vent-cleaning" className="hover:text-white transition-colors">HVAC Vent Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoGreen Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
