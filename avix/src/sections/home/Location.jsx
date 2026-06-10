import { motion } from "framer-motion";
import locationImg from "../../assets/images/4_2.webp";

export default function Location() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* ================= LEFT IMAGE ================= */}
        <motion.img
          src={locationImg}
          alt="location"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="rounded-xl shadow-2xl w-full"
        />

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          {/* small label */}
          <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
            Location
          </p>

          {/* heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Based in <br />
            Hyderabad, India
          </h2>

          {/* paragraph */}
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Based in Hyderabad, India—working with growing brands across India
            and globally. We bring local expertise and global perspective to
            every project.
          </p>

          {/* stats / features */}
          <div className="grid grid-cols-2 gap-10">

            {/* India */}
            <div>
              <h3 className="text-3xl font-bold mb-2">India</h3>
              <p className="text-gray-600">
                Home base for creative and technical excellence
              </p>
            </div>

            {/* Global */}
            <div>
              <h3 className="text-3xl font-bold mb-2">Global</h3>
              <p className="text-gray-600">
                Serving brands and startups worldwide
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
