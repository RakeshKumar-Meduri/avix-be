import { motion } from "framer-motion";

import img1 from "../../assets/images/3_2.webp";
import img2 from "../../assets/images/3_3.webp";
import img3 from "../../assets/images/3_4.webp";

export default function ServicesBuild() {
  const services = [
    {
      img: img1,
      tag: "Deliver",
      title: "Fast, responsive websites that sell",
      desc: "Business sites, landing pages, e-commerce platforms, and optimized user experiences.",
    },
    {
      img: img2,
      tag: "Grow",
      title: "Growth and marketing campaigns",
      desc: "Data-driven digital marketing that reaches your audience and generates qualified leads.",
    },
    {
      img: img3,
      tag: "Create",
      title: "Creative studio and visual content",
      desc: "Ad creatives, motion graphics, reels, and 3D visuals that elevate your brand presence.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-black text-white py-24 lg:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-gray-400 mb-3">Build</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 break-words">
            What we build
          </h2>

          <p className="text-gray-400 break-words">
            High-performance websites and landing pages designed to convert visitors into customers.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl w-full"
            >

              {/* IMAGE */}
              <img
                src={service.img}
                alt=""
                className="
                  w-full
                  h-[420px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/65" />

              {/* TEXT */}
              <div className="absolute bottom-8 left-6 right-6 space-y-3">

                <p className="text-sm text-gray-300 break-words">
                  {service.tag}
                </p>

                <h3 className="text-2xl font-semibold leading-snug break-words">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 break-words">
                  {service.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
