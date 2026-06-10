import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/images/4_13.webp";
import img2 from "../../assets/images/4_14.webp";
import img3 from "../../assets/images/4_15.webp";
import img4 from "../../assets/images/4_16.webp";

export default function Why() {

  /* ====================================== */
  /* Slides data */
  /* ====================================== */

  const slides = [
    {
      title: "Creative and marketing development",
      desc: "Integrated approach across all disciplines",
      img: img1
    },
    {
      title: "Clean modern design",
      desc: "Minimal, sharp, and built to perform",
      img: img2
    },
    {
      title: "Performance focus",
      desc: "Speed, conversion, and measurable growth",
      img: img3
    },
    {
      title: "Long-term growth mindset",
      desc: "We build for lasting results",
      img: img4
    }
  ];

  const [[index, direction], setSlide] = useState([0, 0]);

  const next = () =>
    setSlide([(index + 1) % slides.length, 1]);

  const prev = () =>
    setSlide([(index - 1 + slides.length) % slides.length, -1]);


  /* ====================================== */
  /* Professional slide variants */
  /* ====================================== */

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -250 : 250,
      opacity: 0
    })
  };


  return (
    <section className="w-full bg-gray-100 py-16 md:py-24 overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12 md:mb-16 px-4">

        <p className="text-sm text-gray-500">
          Why
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Choose Avix Studio
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Four reasons we deliver results
        </p>
      </div>


      {/* ================= SLIDER ================= */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        <AnimatePresence mode="wait" custom={direction}>

          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="
              grid
              md:grid-cols-2
              bg-white
              rounded-xl
              shadow-xl
              overflow-hidden
            "
          >

            {/* ================= IMAGE ================= */}
            <motion.img
              src={slides[index].img}
              alt="slide"
              className="
                w-full
                h-[220px]
                sm:h-[260px]
                md:h-[480px]
                object-cover
              "
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />


            {/* ================= CONTENT ================= */}
            <motion.div
              className="
                flex flex-col justify-center
                p-6 sm:p-8 md:p-10
                space-y-5 md:space-y-6
                text-center md:text-left
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {slides[index].title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base">
                {slides[index].desc}
              </p>


              {/* ================= ARROWS ================= */}
              <div className="flex gap-3 md:gap-4 pt-2 justify-center md:justify-start">

                <button
                  onClick={prev}
                  className="
                    w-10 h-10 md:w-11 md:h-11
                    border rounded-md
                    hover:bg-black hover:text-white
                    transition
                    hover:scale-105
                  "
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="
                    w-10 h-10 md:w-11 md:h-11
                    border rounded-md
                    hover:bg-black hover:text-white
                    transition
                    hover:scale-105
                  "
                >
                  →
                </button>

              </div>

            </motion.div>

          </motion.div>

        </AnimatePresence>
      </div>
    </section>
  );
}
