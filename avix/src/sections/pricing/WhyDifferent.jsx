import { motion } from "framer-motion"
import whyImg from "../../assets/images/socialmedia5.webp"

export default function WhyDifferent() {
  return (
    <section className="w-full bg-[#14110f] text-white py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={whyImg}
            alt="Why Avix Studio"
            className="w-full h-[400px] md:h-[520px] object-cover"
          />
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm text-gray-400 mb-4">
            Why
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            What makes Avix <br /> Studio different
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-xl">
            We build content that drives real results. Every piece is crafted
            with your business goals in mind.
          </p>

          <div className="grid sm:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Strategy first
              </h3>
              <p className="text-gray-400">
                We plan before we create, ensuring every post and video
                serves your conversion goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Production quality
              </h3>
              <p className="text-gray-400">
                Professional equipment and experienced crew deliver visuals
                that stand out and perform.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
