import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ctaImg from "../../assets/images/4_17.webp";

export default function CTA() {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0b0704] text-white py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to elevate
          </h2>

          <p className="text-gray-400 text-lg">
            Let's build something powerful together
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
              bg-white text-black
              px-6 py-3
              rounded-md
              font-medium
              hover:scale-105
              hover:bg-gray-200
              transition
            "
          >
            Contact
          </button>
        </motion.div>


        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={ctaImg}
            alt="cta"
            className="
              w-full
              rounded-xl
              shadow-2xl
              object-cover
              h-[320px] md:h-[420px]
            "
          />

          <div className="absolute inset-0 bg-blue-500/10 blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
