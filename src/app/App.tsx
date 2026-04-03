import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ChevronRight, Clock, Shield, Truck, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload images and handle loading state
  useEffect(() => {
    const imageUrls = [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611132604734-5f04f8d3d0bd?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548171838-1fd4cb4ab854?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?w=600&h=600&fit=crop&q=80"
    ];

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    });

    // Minimum loading time of 2 seconds for smooth experience
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2000));

    Promise.all([...imagePromises, minLoadTime]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&h=800&fit=crop&q=80",
      title: "Timeless Elegance",
      subtitle: "PREMIUM COLLECTION 2026"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&h=800&fit=crop&q=80",
      title: "Royal Heritage",
      subtitle: "LUXURY TIMEPIECES"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&h=800&fit=crop&q=80",
      title: "Modern Precision",
      subtitle: "CRAFTED EXCELLENCE"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611132604734-5f04f8d3d0bd?w=1200&h=800&fit=crop&q=80",
      title: "Elite Collection",
      subtitle: "SWISS ENGINEERING"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredWatches = [
    {
      id: 1,
      name: "Elite Chronograph",
      price: "₹2,49,999",
      image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&h=600&fit=crop&q=80",
      tag: "New Arrival"
    },
    {
      id: 2,
      name: "Classic Heritage",
      price: "₹1,89,999",
      image: "https://images.unsplash.com/photo-1548171838-1fd4cb4ab854?w=600&h=600&fit=crop&q=80",
      tag: "Limited Edition"
    },
    {
      id: 3,
      name: "Luxury Prestige",
      price: "₹3,99,999",
      image: "https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?w=600&h=600&fit=crop&q=80",
      tag: "Best Seller"
    }
  ];

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
        {/* Fixed Continuous Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-20 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#d4af37]/8 rounded-full blur-3xl" />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Glassmorphism Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/40 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/50'
            : 'bg-transparent backdrop-blur-sm border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl tracking-wider relative group cursor-pointer"
          >
            <span className="relative z-10">HOMAGE WATCH INDIA</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {["Collections", "New Arrivals", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="relative text-sm tracking-wide group cursor-pointer py-2"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#d4af37]">
                  {item}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-[#d4af37]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2.5 text-sm tracking-wide overflow-hidden group"
          >
            <span className="relative z-10 text-black font-medium">Shop Now</span>
            <motion.div
              className="absolute inset-0 bg-[#d4af37]"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#f0c74a] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#d4af37]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section with Slider and Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30 z-10" />
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Animated Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#d4af37]/10 z-20" />
        </motion.div>

        {/* Hero Content with Parallax Fade */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-30 max-w-7xl mx-auto px-6 w-full"
        >
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <div className="inline-block px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37]/30 backdrop-blur-sm mb-6">
                  <span className="text-[#d4af37] text-sm tracking-widest">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl mb-6 leading-tight"
              >
                {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === heroSlides[currentSlide].title.split(' ').length - 1 ? (
                      <span className="text-[#d4af37]">{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Discover India's finest collection of luxury timepieces.
              Handcrafted precision meets contemporary design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f0c74a" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#d4af37] text-black tracking-wide flex items-center gap-2 group text-lg"
              >
                Explore Collection
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/30 backdrop-blur-sm tracking-wide hover:bg-white/10 transition-colors text-lg"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Slider Indicators */}
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                >
                  <div className={`h-1 transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-16 bg-[#d4af37]'
                      : 'w-8 bg-white/30 hover:bg-white/50'
                  }`} />
                  {index === currentSlide && (
                    <motion.div
                      layoutId="activeSlide"
                      className="absolute inset-0 bg-[#d4af37] blur-sm"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20 max-w-3xl"
          >
            {[
              { num: "10K+", label: "Happy Customers" },
              { num: "500+", label: "Watch Models" },
              { num: "50+", label: "Luxury Brands" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl text-[#d4af37] mb-2">{stat.num}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection with Glassmorphism */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl mb-4"
            >
              Featured Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400"
            >
              Curated selection of our most exquisite timepieces
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWatches.map((watch, i) => (
              <motion.div
                key={watch.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:border-[#d4af37]/50 transition-all duration-300 rounded-lg overflow-hidden"
              >
                {/* Glassy effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/5 group-hover:to-[#d4af37]/10 transition-all duration-500 rounded-lg" />

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-[#d4af37] text-black text-xs tracking-wide shadow-lg shadow-[#d4af37]/50">
                    {watch.tag}
                  </span>
                </div>

                <div className="relative overflow-hidden mb-6 aspect-square rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <h3 className="text-2xl mb-2 relative z-10">{watch.name}</h3>
                <p className="text-[#d4af37] text-xl mb-4 relative z-10">{watch.price}</p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm tracking-wide text-gray-400 group-hover:text-[#d4af37] transition-colors relative z-10"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Collection with Glassmorphism */}
      <section className="py-24 px-6 relative overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Coming Soon</span>
            <h2 className="text-4xl md:text-5xl mb-4">Upcoming Collection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be the first to discover our latest luxury timepieces launching this season
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop&q=80"
                    alt="Upcoming collection preview"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-8">
                  <div>
                    <h3 className="text-3xl mb-2">Royal Heritage Series</h3>
                    <p className="text-[#d4af37]">Launching May 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl mb-4">Exclusive Pre-Launch Access</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Sign up now to get early access to our upcoming collection. Limited pieces available for pre-order.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Exclusive 20% pre-order discount",
                  "Priority delivery before public launch",
                  "Limited edition certificate of authenticity",
                  "VIP invitation to launch event"
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-[#d4af37] text-black tracking-wide hover:bg-[#f0c74a] transition-colors"
              >
                Notify Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with Glassmorphism */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "Complimentary shipping across India on all orders"
              },
              {
                icon: Shield,
                title: "2 Year Warranty",
                desc: "Comprehensive warranty on all luxury timepieces"
              },
              {
                icon: Clock,
                title: "Lifetime Service",
                desc: "Expert maintenance and servicing support"
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-6 bg-[#d4af37]/10 backdrop-blur-sm border border-[#d4af37]/30 flex items-center justify-center relative overflow-hidden group-hover:border-[#d4af37]/60 transition-all duration-300 rounded-lg"
                >
                  <feature.icon className="w-10 h-10 text-[#d4af37] relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section with Glassmorphism */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
            <p className="text-gray-400">We're here to help you find your perfect timepiece</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "+91 98765 43210",
                subdetail: "Mon-Sat, 10AM-8PM IST"
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: "info@homagewatchindia.com",
                subdetail: "24/7 Support Available"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                detail: "123 Luxury Plaza, Mumbai",
                subdetail: "Maharashtra 400001, India"
              }
            ].map((contact, i) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center hover:border-[#d4af37]/50 transition-all duration-300 group rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:to-[#d4af37]/5 transition-all duration-500" />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 flex items-center justify-center relative z-10 rounded-lg"
                >
                  <contact.icon className="w-8 h-8 text-[#d4af37]" />
                </motion.div>
                <h3 className="text-xl mb-3 relative z-10">{contact.title}</h3>
                <p className="text-[#d4af37] mb-2 relative z-10">{contact.detail}</p>
                <p className="text-sm text-gray-500 relative z-10">{contact.subdetail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-lg shadow-2xl shadow-black/50"
          >
            <h3 className="text-2xl mb-6 text-center">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37]/50 focus:bg-black/40 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37]/50 focus:bg-black/40 focus:outline-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37]/50 focus:bg-black/40 focus:outline-none transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37]/50 focus:bg-black/40 focus:outline-none transition-all resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#d4af37] text-black tracking-wide hover:bg-[#f0c74a] transition-colors rounded-lg shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer with Glassmorphism */}
      <footer className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl tracking-wider mb-4"
              >
                HOMAGE WATCH INDIA
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                India's premier destination for luxury timepieces. Crafting moments that last forever.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 rounded group overflow-hidden"
                  >
                    <social.icon className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-4 text-[#d4af37]">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Our Collections", "New Arrivals", "Best Sellers", "Gift Cards"].map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg mb-4 text-[#d4af37]">Customer Service</h3>
              <ul className="space-y-3">
                {["Contact Us", "Shipping & Delivery", "Returns & Exchanges", "Warranty Info", "Size Guide", "FAQ"].map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg mb-4 text-[#d4af37]">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe to get exclusive offers and updates on new arrivals.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 text-white text-sm placeholder-gray-500 focus:border-[#d4af37]/50 focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-[#d4af37] text-black text-sm tracking-wide hover:bg-[#f0c74a] transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Homage Watch India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookies"].map(link => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-gray-500 hover:text-[#d4af37] transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}