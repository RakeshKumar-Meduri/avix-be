import { motion } from "framer-motion";
import boxIcon from "../../assets/images/Relume.webp";

export default function Industries() {
  return (
    <section className="w-full bg-[#0b0704] text-white py-20 md:py-24 overflow-hidden">

      <div
        className="
          max-w-7xl mx-auto px-6
          grid
          md:grid-cols-2
          gap-14 md:gap-20
          items-start
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5 text-center md:text-left"
          >
            <p className="text-sm text-gray-400">
              Industries
            </p>

            <h2 className="
              font-bold leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            ">
              Where we make
              <br />
              the biggest impact
            </h2>

            <button className="
              border border-gray-600
              px-5 py-2
              rounded-md
              hover:bg-white hover:text-black
              transition
              mx-auto md:mx-0
            ">
              E-commerce →
            </button>

          </motion.div>
        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="space-y-10 md:space-y-12">

          <IndustryItem
            title="E-commerce"
            desc="Product catalogs and checkout flows built for conversion and scale"
            showLine
          />

          <IndustryItem
            title="Real estate"
            desc="Brand identity and scalable systems for successful launches and growth"
            showLine
          />

          <IndustryItem
            title="Startups"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          />

        </div>
      </div>
    </section>
  );
}


/* ================= RESPONSIVE ITEM ================ */

function IndustryItem({ title, desc, showLine }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex gap-4 md:gap-6 items-start"
      >

        {/* ICON COLUMN */}
        <div className="flex flex-col items-center shrink-0">

          <img
            src={boxIcon}
            alt="icon"
            className="w-7 h-7 md:w-8 md:h-8"
          />

          {showLine && (
            <div className="
              w-[2px]
              h-14 md:h-20
              bg-white/30
              mt-3 md:mt-4
            " />
          )}
        </div>

        {/* TEXT */}
        <div className="max-w-sm md:max-w-md">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {desc}
          </p>
        </div>

      </motion.div>
    </div>
  );
}
