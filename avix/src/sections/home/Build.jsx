import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import buildImg from "../../assets/images/4_3.webp";
import buildIcon from "../../assets/images/build.svg";

export default function Build() {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0b0704] text-white py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* icon */}
            <img
              src={buildIcon}
              alt="build icon"
              className="w-14 h-14 opacity-80 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            />

            {/* heading */}
            <h2 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              We build digital <br /> solutions that work
            </h2>

            {/* description */}
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Avix Studio combines creativity, technology, and performance-driven
              thinking to deliver clean, effective, and scalable digital
              solutions. We focus on what matters—results that drive real growth
              for your business.
            </p>

            {/* button */}
            <button
              onClick={() => navigate("/about")}
              className="border border-gray-600 px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Learn more
            </button>

          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={buildImg}
              alt="solutions"
              className="w-full rounded-lg shadow-2xl"
            />

            <div className="absolute inset-0 bg-blue-500/10 blur-2xl -z-10 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
