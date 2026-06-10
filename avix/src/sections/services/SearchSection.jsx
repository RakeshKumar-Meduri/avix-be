import { motion } from "framer-motion";
import mainImg from "../../assets/images/3_16.webp";

export default function SearchSection() {
  return (
    <section className="w-full overflow-hidden bg-gray-100 py-20 md:py-28">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <p className="text-sm text-gray-500 mb-3">Search</p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Built to be found
        </h2>

        <p className="text-gray-600 mt-4">
          Clean code and fast speeds help your site rank where it matters.
        </p>
      </div>

      {/* ================= GRID LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* ================= LEFT BIG CARD ================= */}
        <div className="overflow-hidden md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >

            {/* Image */}
            <div className="h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden">
              <img
                src={mainImg}
                alt="SEO Service"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <p className="text-sm text-gray-500 mb-3">
                Optimized
              </p>

              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                Digital agency services that deliver
              </h3>

              <p className="text-gray-600">
                We handle website development, marketing services,
                and creative design studio work.
              </p>
            </div>

          </motion.div>
        </div>

        {/* ================= RIGHT CARDS ================= */}
        <div className="flex flex-col gap-8">

          {/* Card 1 */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 md:p-10"
            >
              <div className="mb-4 text-xl">📊</div>

              <h4 className="text-xl md:text-2xl font-bold leading-tight mb-4">
                Strategy built on data and results
              </h4>

              <p className="text-gray-600 text-sm md:text-base">
                Every decision we make is backed by
                metrics that prove what works.
              </p>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 md:p-10"
            >
              <div className="mb-4 text-xl">⭐</div>

              <h4 className="text-xl md:text-2xl font-bold leading-tight mb-4">
                Content that ranks and converts
              </h4>

              <p className="text-gray-600 text-sm md:text-base">
                We build pages that search engines like
                and visitors want to stay on.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
