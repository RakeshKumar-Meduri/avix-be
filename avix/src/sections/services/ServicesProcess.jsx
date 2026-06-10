import { motion } from "framer-motion";

import img1 from "../../assets/images/4_10.webp";
import img2 from "../../assets/images/4_11.webp";
import img3 from "../../assets/images/4_12.webp";

export default function ServicesProcess() {
  return (
    <section className="w-full bg-[#0b0704] text-white py-24 md:py-32">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20">
        <p className="text-sm text-gray-400 mb-3">Process</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          How we work
        </h2>

        <p className="text-gray-400">
          Three straightforward steps take your project from concept to results.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {process.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="
              relative
              rounded-2xl
              overflow-hidden
              min-h-[350px]
              md:min-h-[420px]
              cursor-pointer
              group
            "
          >

            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Dark Base Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* 🔥 Animated Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="
                absolute inset-0
                bg-gradient-to-r
                from-blue-600/30
                via-purple-600/30
                to-blue-600/30
                bg-[length:200%_200%]
                mix-blend-overlay
              "
            />

            {/* Content */}
            <div className="
              relative z-10
              h-full
              p-10
              flex flex-col
              justify-end
            ">

              <p className="text-sm text-gray-300 mb-3">
                {item.step}
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

const process = [
  {
    step: "First",
    title: "Understand and plan",
    desc: "We listen to your goals and build a strategy that fits.",
    img: img1
  },
  {
    step: "Second",
    title: "Design and build",
    desc: "We create websites, campaigns, and visuals that match your brand.",
    img: img2
  },
  {
    step: "Third",
    title: "Launch and improve",
    desc: "We monitor performance and refine until results speak for themselves.",
    img: img3
  }
];
