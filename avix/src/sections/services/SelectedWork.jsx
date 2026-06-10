import { motion } from "framer-motion";

import project1 from "../../assets/images/project1.webp";
import project2 from "../../assets/images/project2.webp";
import project3 from "../../assets/images/project3.webp";

export default function SelectedWork() {

  const projects = [
    {
      title: "Luxury property site",
      desc: "Lead generation site redesign",
      image: project2,
      link: "https://assethub.co.in/",
      tags: ["Website", "Real estate", "Design"]
    },
    {
      title: "E-commerce pilot",
      desc: "Product catalog and checkout flow",
      image: project3,
      link:"https://www.bewakoof.com/",
      tags: ["Development", "E-commerce", "Strategy"]
    },
    {
      title: "Startup brand",
      desc: "Full brand identity and website launch",
      image: project1,
      link:  "https://recykal.com/",
      tags: ["Branding", "Startups", "Creative"]
    }
  ];

  return (
    <section className="w-full bg-[#0b0704] text-white py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Header ================= */}
        <div className="text-center mb-16">

          <p className="text-sm text-gray-400 mb-3">
            Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Selected work
          </h2>

          <p className="text-gray-400">
            Honest projects, real results
          </p>

        </div>

        {/* ================= Cards ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#14110f]
                rounded-xl
                overflow-hidden
                border border-white/10
                hover:border-white/30
                hover:shadow-2xl
                transition
                duration-300
              "
            >

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
