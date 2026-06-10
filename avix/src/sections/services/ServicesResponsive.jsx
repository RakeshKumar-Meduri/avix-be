import { motion } from "framer-motion";
import screenImg from "../../assets/images/3_15.webp";
import callToActionIcon from "../../assets/images/call_to_action.svg";
import pagesIcon from "../../assets/images/pages.svg";

export default function ServicesResponsive() {
  return (
    <section className="w-full overflow-hidden bg-black text-white py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Built for every screen
          </h2>

          <p className="text-lg text-gray-400">
            Your site works on phones, tablets, and desktops without compromise.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">

          {/* LEFT BIG CARD */}
          <div className="overflow-hidden lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                border border-white/10
                rounded-2xl
                bg-[#121212]
                h-full
                flex flex-col
              "
            >
              <img
                src={screenImg}
                alt="Responsive layouts"
                className="
                  w-full
                  h-[320px]
                  sm:h-[380px]
                  lg:h-[420px]
                  object-cover
                "
              />

              <div className="p-10 flex-1 flex flex-col justify-center">
                <p className="text-sm text-gray-400 mb-3">
                  Responsive
                </p>

                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Layouts that adapt and flow
                </h3>

                <p className="text-base text-gray-400 leading-relaxed">
                  Clean transitions between sizes keep the experience smooth and fast.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-10 h-full">

            {/* CARD 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="
                  border border-white/10
                  rounded-2xl
                  bg-[#121212]
                  p-10
                  flex-1
                  flex flex-col justify-center
                "
              >
                <img
                  src={callToActionIcon}
                  alt="Call to action icon"
                  className="w-10 h-10 mb-6 opacity-80"
                />

                <p className="text-sm text-gray-400 mb-3">
                  Buttons
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Buttons that stand out and convert
                </h3>

                <p className="text-base text-gray-400 leading-relaxed">
                  Every call to action is visible and easy to find on any device.
                </p>
              </motion.div>
            </div>

            {/* CARD 2 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="
                  border border-white/10
                  rounded-2xl
                  bg-[#121212]
                  p-10
                  flex-1
                  flex flex-col justify-center
                "
              >
                <img
                  src={pagesIcon}
                  alt="Pages icon"
                  className="w-10 h-10 mb-6 opacity-80"
                />

                <p className="text-sm text-gray-400 mb-3">
                  Performance
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Performance that matters
                </h3>

                <p className="text-base text-gray-400 leading-relaxed">
                  Fast loading times keep visitors engaged and reduce bounce rates.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
