import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import img1 from "../../assets/images/1_3.webp"
import img2 from "../../assets/images/1_4.webp"
import img3 from "../../assets/images/1_5.webp"

export default function ServicePackages() {

  const navigate = useNavigate()

  const packages = [
    {
      title: "Starter package",
      desc: "Landing page or basic website with core design work.",
      img: img1,
      route: "/pricing/website"
    },
    {
      title: "Growth package",
      desc: "Digital advertising with creative content and campaign optimization.",
      img: img2,
      route: "/pricing/social"
    },
    {
      title: "Premium package",
      desc: "Complete digital growth with website, marketing, and advanced visuals.",
      img: img3,
      route: "/pricing/3d"
    }
  ]

  return (
    <section className="w-full overflow-hidden bg-gray-100 py-20 md:py-28">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <p className="text-sm text-gray-500 mb-3">
          Plans
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Service packages
        </h2>

        <p className="text-gray-600 mt-4">
          Pick the plan that matches where you are right now.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 w-full">

          {packages.map((pkg, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  overflow-hidden
                  transition
                  hover:shadow-xl
                  hover:-translate-y-2
                "
              >

                {/* IMAGE */}
                <div 
                  className="h-[240px] overflow-hidden cursor-pointer"
                  onClick={() => navigate(pkg.route)}
                >
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                    {pkg.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {pkg.desc}
                  </p>

                  <button
                    onClick={() => navigate(pkg.route)}
                    className="text-black font-medium hover:underline"
                  >
                    Contact →
                  </button>
                </div>

              </motion.div>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}
