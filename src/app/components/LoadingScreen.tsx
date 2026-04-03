import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_50%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Watch Icon Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-32 h-32 border-2 border-[#d4af37]/30 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-24 h-24 border-2 border-[#d4af37]/50 rounded-full flex items-center justify-center"
            >
              {/* Center Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-4 h-4 bg-[#d4af37] rounded-full shadow-lg shadow-[#d4af37]/50"
              />
            </motion.div>
          </motion.div>

          {/* Watch Hands */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-gradient-to-t from-[#d4af37] to-transparent origin-bottom -translate-x-1/2"
            style={{ transformOrigin: "50% 100%" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-gradient-to-t from-[#d4af37]/70 to-transparent origin-bottom -translate-x-1/2"
            style={{ transformOrigin: "50% 100%" }}
          />
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl tracking-[0.3em] mb-4 text-white"
        >
          HOMAGE WATCH
        </motion.div>

        {/* Loading Text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-sm tracking-widest text-[#d4af37]"
        >
          LOADING LUXURY
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-8 w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
