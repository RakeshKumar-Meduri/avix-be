import { useState } from "react"

import img1 from "../../assets/images/1_5.webp"
import img2 from "../../assets/images/1_6.webp"
import img3 from "../../assets/images/1_7.webp"

function WhyContact() {
  const [active, setActive] = useState(0)

  const data = [
    {
      title: "Structured project communication from start to finish",
      text: "We keep you informed at every stage. No surprises, no confusion. Just clear updates and honest conversations about your project’s progress and direction.",
      img: img1,
      label: "Communication"
    },
    {
      title: "Performance focused strategies that deliver real growth",
      text: "Every action we take is backed by data and measurable results so your business scales faster with predictable outcomes.",
      img: img2,
      label: "Performance"
    },
    {
      title: "Long-term partnership built on trust and clarity",
      text: "We stay committed even after launch. Continuous support and improvements ensure lasting success for your brand.",
      img: img3,
      label: "Partnership"
    }
  ]

  const item = data[active]

  return (
    <section className="bg-[#0b0f14] text-white py-24 md:py-32">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-14 md:mb-20">

          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
            Trust
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Why contact Avix <br /> Studio
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            We bring clarity to every project and deliver solutions built for real results.
            Our team stays committed to your success long after launch.
          </p>
        </div>



        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-16 text-sm md:text-base">

          {[
            "Clear communication",
            "Performance focused",
            "Long-term partnership"
          ].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`pb-2 border-b transition ${
                active === index
                  ? "border-white text-white"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>



        {/* ================= CONTENT ================= */}
        {/* responsive magic here */}
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            gap-12 md:gap-20
            items-center
          "
        >

          {/* ===== IMAGE ===== */}
          <div className="w-full">

            <img
              src={item.img}
              alt="trust"
              className="
                w-full
                h-[260px] sm:h-[340px] md:h-[420px]
                object-cover
                rounded-2xl
              "
            />
          </div>



          {/* ===== TEXT ===== */}
          <div className="text-center md:text-left">

            <p className="text-sm text-zinc-400 mb-4">
              {item.label}
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
              {item.title}
            </h3>

            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {item.text}
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyContact
