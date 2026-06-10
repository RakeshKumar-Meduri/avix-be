import { motion } from "framer-motion";

import step1 from "../../assets/images/4_10.webp";
import step2 from "../../assets/images/4_11.webp";
import step3 from "../../assets/images/4_12.webp";

export default function Process() {
  const steps = [
    {
      img: step1,
      title: "One",
      desc: "We listen, ask the right questions, and plan the strategy."
    },
    {
      img: step2,
      title: "Two",
      desc: "We design and build clean, fast, performance-focused work."
    },
    {
      img: step3,
      title: "Three",
      desc: "We launch, measure results, and improve over time."
    }
  ];

  return (
    <section className="w-full bg-[#0b0704] text-white py-24 overflow-hidden">

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-6 mb-20"
      >
        <p className="text-sm text-gray-400 mb-2">Process</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          How we work
        </h2>

        <p className="text-gray-400 mt-4">
          Three clear steps from brief to launch.
        </p>

        <button className="mt-6 border border-gray-600 px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
          Start →
        </button>
      </motion.div>


      {/* ================= TIMELINE ================= */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* center line (desktop only) */}
        <div className="hidden md:block absolute top-[260px] left-0 right-0 h-[2px] bg-white/20" />

        <div className="grid md:grid-cols-3 gap-16">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >

              {/* image */}
              <motion.img
                src={step.img}
                alt="step"
                whileHover={{ scale: 1.05 }}
                className="
                  w-[180px] h-[180px]
                  md:w-[220px] md:h-[220px]
                  object-cover rounded-xl shadow-xl mb-8
                "
              />

              {/* timeline dot */}
              <div className="hidden md:block w-4 h-4 bg-white rounded-full mb-6" />

              {/* title */}
              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              {/* description */}
              <p className="text-gray-400 max-w-xs text-sm md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
