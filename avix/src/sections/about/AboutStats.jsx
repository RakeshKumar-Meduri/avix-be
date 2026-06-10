import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import statsImg from "../../assets/images/2_3.webp";

function useCounter(end, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function AboutStats() {
  const projects = useCounter(15);
  const satisfaction = useCounter(10);
  const years = useCounter(1);

  return (
    <section className="w-full bg-black text-white py-24 lg:py-32 overflow-hidden">
      
      <div className="grid lg:grid-cols-5 items-center">

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:col-span-3 h-[320px] sm:h-[400px] lg:h-[500px]"
        >
          <img
            src={statsImg}
            alt="stats"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:col-span-2 px-8 sm:px-12 lg:px-20 mt-12 lg:mt-0 space-y-10"
        >
          <div>
            <p className="text-sm text-gray-400 mb-2">Impact</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Numbers that matter
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-5xl font-bold">{projects}+</h3>
              <p className="text-gray-400">Projects completed</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">{satisfaction}+</h3>
              <p className="text-gray-400">Client satisfaction rate</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">{years}+</h3>
              <p className="text-gray-400">Years in digital growth</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
