import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  watch: string;
  image: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment: "Absolutely stunning timepiece! The craftsmanship is exceptional and the attention to detail is remarkable. Worth every rupee.",
    watch: "Elite Chronograph",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, NCR",
    rating: 5,
    comment: "Bought this as a gift for my husband. He absolutely loves it! The packaging was premium and delivery was prompt. Highly recommend!",
    watch: "Classic Heritage",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Arjun Patel",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "The quality exceeded my expectations. It's elegant, sophisticated, and catches everyone's attention. A true masterpiece!",
    watch: "Luxury Prestige",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Meera Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment: "Customer service was exceptional! They helped me choose the perfect watch. The product quality is outstanding.",
    watch: "Royal Collection",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    comment: "This watch represents luxury and precision. The Swiss movement is smooth and accurate. Couldn't be happier!",
    watch: "Swiss Elite",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    location: "Pune, Maharashtra",
    rating: 5,
    comment: "Perfect blend of classic and modern design. The weight feels premium and the finishing is flawless. Love it!",
    watch: "Modern Classic",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
    date: "3 weeks ago"
  }
];

export default function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-[#d4af37]/5"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase mb-4 block"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their luxury timepiece needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveReview(i)}
              className="relative bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 sm:p-8 rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:to-[#d4af37]/5 transition-all duration-500" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center"
                >
                  <Quote className="w-8 h-8 text-[#d4af37]" />
                </motion.div>

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37]/30">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#d4af37] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </motion.div>

                  <div>
                    <h4 className="font-medium text-lg">{review.name}</h4>
                    <p className="text-xs text-gray-400 dark:text-gray-400">{review.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  "{review.comment}"
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 dark:border-white/10">
                  <span className="text-xs text-[#d4af37]">{review.watch}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 sm:p-8 rounded-lg max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl text-[#d4af37] mb-2">4.9</div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400">Average Rating</p>
            </div>

            <div className="h-16 w-px bg-white/10 dark:bg-white/10 hidden sm:block" />

            <div className="text-center">
              <div className="text-4xl sm:text-5xl text-[#d4af37] mb-2">10K+</div>
              <p className="text-sm text-gray-400 dark:text-gray-400">Happy Customers</p>
            </div>

            <div className="h-16 w-px bg-white/10 dark:bg-white/10 hidden sm:block" />

            <div className="text-center">
              <div className="text-4xl sm:text-5xl text-[#d4af37] mb-2">98%</div>
              <p className="text-sm text-gray-400 dark:text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
