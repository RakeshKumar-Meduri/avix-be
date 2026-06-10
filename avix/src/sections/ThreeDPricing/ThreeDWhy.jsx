import img1 from "../../assets/images/3dpricing6.webp"
import img2 from "../../assets/images/3dpricing7.webp"

export default function ThreeDWhy() {
  return (
    <section className="w-full bg-black py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">

          <p className="text-sm text-gray-400 mb-4">
            Why
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why we stand apart
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We render at cinema quality. Every frame is processed with the precision
            that separates premium work from the ordinary.
          </p>

        </div>


        {/* ================= CARDS ROW ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ================= CARD 1 ================= */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden">

            {/* IMAGE */}
            <div>
              <img
                src={img1}
                alt="High-end rendering"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center">

              <p className="text-sm text-gray-500 mb-3">
                Craft
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                High-end rendering that commands attention
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Timelines matter. We commit to dates and meet them without
                cutting corners on quality.
              </p>

            </div>

          </div>


          {/* ================= CARD 2 ================= */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden">

            {/* IMAGE */}
            <div>
              <img
                src={img2}
                alt="Delivery on schedule"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center">

              <p className="text-sm text-gray-500 mb-3">
                Trust
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Delivery on schedule
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Animation is narrative. We don't just move objects.
                We craft moments that resonate, persuade,
                and stick with viewers.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
