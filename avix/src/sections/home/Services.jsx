import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/4_4.webp";
import img2 from "../../assets/images/4_5.webp";
import img3 from "../../assets/images/4_6.webp";

export default function Services() {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-100 py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-3">Services</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What we build
          </h2>

          <p className="text-gray-600 text-lg">
            Clean, high-converting digital work
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Website development"
            tag="Development"
            desc="Fast, scalable sites that convert"
            img={img1}
            navigate={navigate}
          />

          <ServiceCard
            title="Growth and marketing"
            tag="Services"
            desc="Paid ads, SEO, and social strategy"
            img={img2}
            navigate={navigate}
          />

          <ServiceCard
            title="Creative studio"
            tag="What we build"
            desc="Motion, 3D, and ad creatives"
            img={img3}
            navigate={navigate}
          />

        </div>
      </div>
    </section>
  );
}


/* ================= CARD COMPONENT ================= */

function ServiceCard({ title, tag, desc, img, navigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        bg-white
        rounded-xl
        shadow-sm
        overflow-hidden
        hover:shadow-xl
        transition
        group
      "
    >

      {/* TEXT */}
      <div className="p-6 space-y-3">

        <p className="text-sm text-gray-500">
          {tag}
        </p>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 text-sm">
          {desc}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/services")}
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-black
            font-medium
            hover:gap-3
            transition-all
          "
        >
          Explore
          <span className="text-lg">→</span>
        </button>

      </div>

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="
            w-full
            h-56
            object-cover
            group-hover:scale-105
            transition duration-500
          "
        />
      </div>

    </motion.div>
  );
}
