import { motion } from "framer-motion";
import ctaImg from "../../assets/images/4_17.webp";

export default function AboutCTA() {
  return (
    <section className="w-full bg-black text-white">

      {/* ================= CTA TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-20 lg:py-28 px-6"
      >
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to build
            <br />
            something powerful?
          </h2>

          <p className="text-gray-400 mb-8">
            Let's talk about your project. Share your vision and we'll show you
            what's possible.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Schedule
          </button>

        </div>
      </motion.div>


      {/* ================= IMAGE BANNER ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24"   /* top & bottom gap only */
      >
        <img
          src={ctaImg}
          alt="cta"
          className="
            w-full
            h-[260px]
            sm:h-[320px]
            lg:h-[670px]
            object-cover   /* fills full width, no side gap */
          "
        />
      </motion.div>

    </section>
  );
}
