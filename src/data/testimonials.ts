export interface Testimonial {
  id: string;
  name: string;
  reviewCount: number;
  photoCount?: number;
  rating: 5;
  date: string;
  text: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jwill",
    reviewCount: 6,
    photoCount: 2,
    rating: 5,
    date: "a month ago",
    text: "I hardly leave reviews but after such a great experience, I had to. This is such a great company! Customer service was pleasant. The scheduler (Tatiana) was extremely flexible and the technician (Mr. Hayes) was very kind and a great conversationalist!\n\nMr. Hayes was able to get a stain out of my mattress that had been there for over two years! He was very thorough and made sure he didn't leave until I was 100% satisfied. Highly recommend this service! Non-toxic cleaning products were a huge plus. 10 out of 10!",
    service: "Upholstery Cleaning",
  },
  {
    id: "2",
    name: "Sylvie \"Sylvie BC\" BC",
    reviewCount: 24,
    rating: 5,
    date: "2 months ago",
    text: "So happy with their service! On time and very efficient!! And they were a pleasure to work with and my carpets look so good and smell so fresh and clean! Thank you, Eco Green Pro!",
    service: "Carpet Cleaning",
  },
  {
    id: "3",
    name: "Pattie Wisbeski",
    reviewCount: 5,
    rating: 5,
    date: "3 weeks ago",
    text: "Jovantae (not sure of the spelling) was prompt and extremely thorough and courteous. I highly recommend your services.",
  },
];