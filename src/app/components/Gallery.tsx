import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop&q=80",
    title: "Classic Chronograph",
    category: "Luxury"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=600&fit=crop&q=80",
    title: "Timeless Design",
    category: "Heritage"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=1200&fit=crop&q=80",
    title: "Modern Elite",
    category: "Contemporary"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1533139142403-4d9e755e4c8f?w=800&h=800&fit=crop&q=80",
    title: "Precision Craft",
    category: "Sport"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611132604734-5f04f8d3d0bd?w=800&h=1000&fit=crop&q=80",
    title: "Royal Collection",
    category: "Premium"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=600&fit=crop&q=80",
    title: "Swiss Movement",
    category: "Luxury"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&h=1000&fit=crop&q=80",
    title: "Limited Edition",
    category: "Exclusive"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&h=800&fit=crop&q=80",
    title: "Vintage Style",
    category: "Heritage"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Luxury", "Heritage", "Contemporary", "Sport", "Premium", "Exclusive"];

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block"
          >
            Our Showcase
          </motion.span>
          <h2 className="text-4xl md:text-5xl mb-4">Gallery</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of exquisite timepieces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 text-sm tracking-wide transition-all ${
                filter === category
                  ? "bg-[#d4af37] text-black"
                  : "bg-gray-200 dark:bg-white/5 backdrop-blur-sm border border-gray-400 dark:border-white/20 hover:border-[#d4af37] dark:hover:border-[#d4af37]/50 text-black dark:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  i % 7 === 0 || i % 7 === 3 ? "sm:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px]"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 transition-opacity"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#d4af37] tracking-wider uppercase mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-lg text-white">{item.title}</h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-10 h-10 bg-[#d4af37] flex items-center justify-center rounded-full"
                    >
                      <ZoomIn className="w-5 h-5 text-black" />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37] transition-all pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full hover:bg-[#d4af37] hover:border-[#d4af37] transition-all z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <span className="text-[#d4af37] text-sm tracking-wider uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl mt-2">{selectedImage.title}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
