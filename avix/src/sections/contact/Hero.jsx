import { motion } from "framer-motion"
import heroImg from "../../assets/images/1_1.webp"

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ================= SAFE ZOOM BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div className="max-w-3xl text-white">

          {/* small label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase tracking-widest text-sm mb-6 text-gray-300"
          >
            Connect
          </motion.p>

          {/* big heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            Let’s start your <br /> project
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            Have a project idea or need digital growth support?
            Share your requirements and we’ll discuss the best approach.
          </motion.p>

          {/* button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Schedule
          </motion.button>

        </div>
      </div>

    </section>
  )
}

export default Hero
