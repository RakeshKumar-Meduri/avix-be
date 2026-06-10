import icon1 from "../../assets/images/animation.svg"
import icon2 from "../../assets/images/Vector.svg"
import sectionImg from "../../assets/images/3dpricing2.webp"

export default function ThreeDCapabilities() {
  return (
    <section className="w-full bg-[#f4f4f4] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            <p className="text-sm text-gray-500 mb-4">
              Capabilities
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              What 3D <br />
              animation does
            </h2>

            <p className="text-gray-600 mb-12 max-w-lg">
              Three-dimensional animation brings static concepts to life
              through digital modeling, texturing, and motion. It's the
              language of modern marketing, where ideas become tangible
              experiences that resonate with audiences.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="grid sm:grid-cols-2 gap-10">

              {/* Feature 1 */}
              <div>
                <img src={icon1} alt="Real Estate" className="w-8 h-8 mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  Real estate walkthroughs and property visualization
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We render spaces before they exist. Architects and developers
                  use our animations to sell vision, secure investment, and guide
                  construction with photorealistic precision.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <img src={icon2} alt="Product Demo" className="w-8 h-8 mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  Product demonstrations and commercial campaigns
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Every product has a story. We animate yours with cinematic
                  precision, revealing features, materials, and functionality
                  in ways that static imagery cannot match.
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>
            <img
              src={sectionImg}
              alt="3D Animation Example"
              className="w-full rounded-2xl object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  )
}
