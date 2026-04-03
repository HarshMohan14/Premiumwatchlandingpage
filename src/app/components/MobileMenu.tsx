import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, Instagram, Facebook, Twitter } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { name: "Collections", href: "#collections" },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/20 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <div className="text-lg tracking-wider">MENU</div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <nav className="space-y-2 mb-12">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                    onClick={onClose}
                    className="group flex items-center justify-between py-4 px-4 border-b border-white/10 hover:border-[#d4af37]/50 transition-all"
                  >
                    <span className="text-xl group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#d4af37]" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-[#d4af37] text-black tracking-wide hover:bg-[#f0c74a] transition-colors"
                >
                  Shop Now
                </motion.button>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center rounded hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-sm text-gray-400">Contact</p>
                  <p className="text-sm text-[#d4af37]">+91 98765 43210</p>
                  <p className="text-sm text-gray-300">info@homagewatchindia.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
