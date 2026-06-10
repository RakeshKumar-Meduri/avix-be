import { motion } from "framer-motion"
import heroDesktop from "../../assets/images/websitepricing1.webp"
import heroMobile from "../../assets/images/websitepricing1-mobile.webp"

export default function WebsiteHero() {
  return (
    <section className="bg-[#f4f4f4] py-20 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="relative rounded-3xl overflow-hidden min-h-[85vh] md:min-h-[75vh]">

          {/* ================= DESKTOP IMAGE ================= */}
          <motion.img
            src={heroDesktop}
            alt="Website SEO"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              hidden md:block
              brightness-95 contrast-110
            "
          />

          {/* ================= MOBILE IMAGE ================= */}
          <motion.img
            src={heroMobile}
            alt="Website SEO"
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              md:hidden
              brightness-95 contrast-110
            "
          />

          {/* ================= GRADIENT OVERLAY ================= */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
            from-black/85
            via-black/60
            to-black/30
          " />

          {/* ================= CONTENT ================= */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div className="max-w-3xl text-white">

              {/* ===== HEADING ===== */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-3xl sm:text-4xl md:text-6xl
                  font-bold
                  leading-snug md:leading-tight
                  mb-6
                  drop-shadow-xl
                "
              >
                Strategic SEO <br />
                and high-performing <br />
                websites
              </motion.h1>

              {/* ===== PARAGRAPH ===== */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-200 text-base md:text-lg space-y-2"
              >
                <span className="block">Engineered for scalability.</span>
                <span className="block">Optimized for search visibility.</span>
                <span className="block">Designed for conversion.</span>
              </motion.p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
