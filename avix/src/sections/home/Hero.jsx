import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import desktopHero from "../../assets/images/4_1.webp";
import mobileHero from "../../assets/images/4_1_mobile.webp";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="relative h-screen overflow-hidden">

      {/* ================= Background ================= */}

      <motion.img
        src={desktopHero}
        alt="Hero"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      <motion.img
        src={mobileHero}
        alt="Hero"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* ================= Content ================= */}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div className="max-w-4xl text-white">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-extrabold tracking-tight leading-tight mb-8 text-[clamp(2.5rem,7vw,6rem)]"
          >
            Digital Creativity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-300 leading-relaxed mb-10 max-w-xl md:max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Avix Studio creates high-performance websites and marketing
            campaigns for real estate, e-commerce, and startups,
            combining strategy, design, and technology to drive results.
          </motion.p>

          <motion.button
            onClick={() => navigate("/services")}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-7 py-3 rounded-md font-medium shadow-lg"
          >
            Explore
          </motion.button>

        </div>
      </div>
    </section>
  );
}
