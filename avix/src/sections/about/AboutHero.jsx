import { motion } from "framer-motion";
import imgBig from "../../assets/images/2_2.webp";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 lg:py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4 uppercase">
              About Us
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Digital growth <br />
              through creative <br />
              technology
            </h1>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Avix Studio builds high-performing websites, marketing campaigns,
              and creative digital experiences for real estate businesses,
              e-commerce brands, and startups. We combine strategy, design, and
              technology to deliver measurable results.
            </p>
          </motion.div>


          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-end"
          >
            <div className="w-full max-w-[420px]">
              <img
                src={imgBig}
                alt="about"
                className="w-full object-cover shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
