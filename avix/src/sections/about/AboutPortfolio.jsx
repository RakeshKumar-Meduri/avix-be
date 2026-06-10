import { motion } from "framer-motion";
import portfolioImg from "../../assets/images/2_4.webp";

export default function AboutPortfolio() {
  return (
    <section className="w-full overflow-hidden">

      {/* 50 / 50 split */}
      <div className="grid lg:grid-cols-2">

        {/* ================= LEFT (BLACK CONTENT) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-black
            text-white
            flex
            items-center
            px-10
            sm:px-16
            lg:px-24
            py-20
            lg:py-32
          "
        >
          <div className="max-w-md">
            <p className="text-sm text-gray-400 mb-4">Portfolio</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Work that speaks
              <br />
              for itself
            </h2>

            <p className="text-gray-400 leading-relaxed">
              This project redefined how a fintech startup connects with
              enterprise clients. We built a platform that handles complexity
              without sacrificing elegance.
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT (IMAGE) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[350px] sm:h-[450px] lg:h-[600px]"
        >
          <img
            src={portfolioImg}
            alt="portfolio"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
