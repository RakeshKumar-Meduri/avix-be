import { motion } from "framer-motion";
import heroImg from "../../assets/images/3_1.webp";

export default function ServicesHero() {
  return (
    <section className="w-full overflow-hidden bg-[#f3f3f3] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center bg-white rounded-2xl overflow-hidden shadow-sm">

          {/* ================= LEFT TEXT ================= */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-8 sm:px-14 lg:px-20 py-16"
            >
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Digital solutions
                  <br />
                  that drive
                  <br />
                  real growth
                </h1>

                <p className="text-gray-600 text-base md:text-lg">
                  Avix Studio builds websites, manages campaigns, and creates visuals
                  that work. We help businesses reach their audience and convert
                  visitors into customers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[350px] sm:h-[450px] lg:h-[520px]"
            >
              <img
                src={heroImg}
                alt="services hero"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
