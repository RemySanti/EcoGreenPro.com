import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { useState } from "react";
import { trackPhoneCall } from "../hooks/useGoogleTagManager";

export function Testimonials() {
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const toggleReview = (id: string) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-emerald-600 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across the Lehigh Valley and beyond.
          </p>
          <a
            href="https://www.google.com/search?q=EcoGreen+Pro+Bethlehem+PA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <span>View all our Google reviews</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const isLongReview = testimonial.text.length > 200;
            const isExpanded = expandedReviews.has(testimonial.id);
            const displayText = isLongReview && !isExpanded 
              ? truncateText(testimonial.text, 200) 
              : testimonial.text;

            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.reviewCount} reviews
                        {testimonial.photoCount && ` · ${testimonial.photoCount} photos`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    {testimonial.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3 whitespace-pre-line">
                  {displayText}
                </p>

                {/* Read More Button */}
                {isLongReview && (
                  <button
                    onClick={() => toggleReview(testimonial.id)}
                    className="text-emerald-600 hover:text-emerald-700 text-sm mb-3"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}

                {/* Service Tag */}
                {testimonial.service && (
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                    {testimonial.service}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-emerald-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-emerald-900 mb-2">Ready to experience our service?</h3>
            <p className="text-gray-700 mb-4">
              Join hundreds of satisfied customers across Pennsylvania and New Jersey.
            </p>
            <a
              href="tel:484-268-3078"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              onClick={() => trackPhoneCall('testimonials_cta')}
            >
              Call (484) 268-3078
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}