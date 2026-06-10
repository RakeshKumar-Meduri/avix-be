import { motion } from "framer-motion"

import img1 from "../../assets/images/socialmedia2.webp"
import img2 from "../../assets/images/socialmedia3.webp"

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-[#14110f] text-white py-24 md:py-32">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20">

        <p className="text-sm text-gray-400 mb-3">
          Services
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          What we offer
        </h2>

        <p className="text-gray-400">
          Two core offerings built to drive real business growth
        </p>

      </div>


      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* ================= CARD 1 ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            border border-white/10
            rounded-2xl
            overflow-hidden
            flex
            flex-col md:flex-row
          "
        >

          {/* IMAGE */}
          <div className="w-full md:w-[40%] h-[380px] md:h-[460px]">
            <img
              src={img1}
              alt="Social media packages"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">

            <p className="text-sm text-gray-400 mb-4">
              Content
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Social media <br /> packages
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Posts, reels, and strategic content planning
            </p>

          </div>

        </motion.div>



        {/* ================= CARD 2 ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            border border-white/10
            rounded-2xl
            overflow-hidden
            flex
            flex-col md:flex-row
          "
        >

          {/* IMAGE */}
          <div className="w-full md:w-[40%] h-[380px] md:h-[460px]">
            <img
              src={img2}
              alt="Ad shoot packages"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">

            <p className="text-sm text-gray-400 mb-4">
              Production
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Ad shoot <br /> packages
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Professional videos that convert viewers into customers
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
