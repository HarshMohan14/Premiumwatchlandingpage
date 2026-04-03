import { motion } from "motion/react";
import { Award, Shield, TrendingUp, Users } from "lucide-react";

const brands = [
  { name: "Rolex", logo: "R" },
  { name: "Omega", logo: "Ω" },
  { name: "Tag Heuer", logo: "TH" },
  { name: "Breitling", logo: "B" },
  { name: "Cartier", logo: "C" },
  { name: "Patek Philippe", logo: "PP" }
];

const certifications = [
  {
    icon: Award,
    title: "ISO Certified",
    desc: "Quality Assured"
  },
  {
    icon: Shield,
    title: "2 Year Warranty",
    desc: "All Products"
  },
  {
    icon: TrendingUp,
    title: "Best Seller",
    desc: "2025 Award"
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Professional Service"
  }
];

export default function BrandShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10"
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
            Authorized Dealer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Premium Brands We Carry</h2>
          <p className="text-gray-400 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Official partner of the world's most prestigious watch manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 p-6 sm:p-8 rounded-lg flex items-center justify-center aspect-square group hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/20 group-hover:to-[#d4af37]/10 transition-all duration-500" />

              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4af37] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 p-6 rounded-lg text-center group hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:to-[#d4af37]/5 transition-all duration-500" />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#d4af37]/10 rounded-full flex items-center justify-center"
              >
                <cert.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#d4af37]" />
              </motion.div>

              <h4 className="text-base sm:text-lg mb-1 relative z-10">{cert.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 relative z-10">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
