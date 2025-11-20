import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience professional cleaning services? Contact us for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-2 text-gray-900">Thank You!</h3>
                <p className="text-gray-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm mb-2 text-gray-700">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Get Free Quote
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-green-600 text-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="tel:484-268-3078" 
                  onClick={() => trackPhoneCall('contact_section')}
                  className="flex items-center gap-3 hover:text-green-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(484) 268-3078</span>
                </a>
                <a 
                  href="mailto:info@ecogreenproservices.com"
                  className="flex items-center gap-3 hover:text-green-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@ecogreenproservices.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Bethlehem, PA 18015</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl mb-4 text-gray-900">Business Hours</h3>
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
            </div>
          </div>
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
