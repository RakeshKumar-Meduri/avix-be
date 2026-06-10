import { motion } from "framer-motion"
import heroDesktop from "../../assets/images/3dpricing1.webp"
import heroMobile from "../../assets/images/3dpricing1-mobile.webp"

export default function ThreeDHero() {
  return (
    <section className="w-full bg-black py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-3xl overflow-hidden min-h-[80vh] md:min-h-[65vh]">

          {/* ================= DESKTOP IMAGE ================= */}
          <motion.img
            src={heroDesktop}
            alt="3D Animation"
            initial={{ scale: 1.07 }}
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
            alt="3D Animation"
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

          {/* ================= CINEMATIC GRADIENT ================= */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
            from-black/85
            via-black/60
            to-black/30
          "></div>

          {/* ================= CONTENT ================= */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div className="max-w-4xl text-white">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-4xl sm:text-5xl md:text-6xl
                  font-bold
                  leading-snug md:leading-tight
                  mb-6
                  drop-shadow-xl
                "
              >
                Cinematic 3D <br />
                Animation That <br />
                Sells
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="
                  text-gray-200
                  text-base md:text-lg
                  max-w-2xl
                  mx-auto
                "
              >
                We craft immersive visual stories that transform ideas into compelling motion.
                From concept to final frame, every detail serves your vision.
              </motion.p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
