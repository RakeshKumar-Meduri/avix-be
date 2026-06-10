import heroDesktop from "../../assets/images/socialmedia1.webp"
import heroMobile from "../../assets/images/socialmedia1_mobile.webp"

function PricingHero() {
  return (
    <section className="bg-[#f4f4f4] py-20 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="relative rounded-2xl overflow-hidden min-h-[85vh] md:min-h-[70vh]">

          {/* Desktop Image */}
          <img
            src={heroDesktop}
            alt="Social media and ads"
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
          />

          {/* Mobile Image */}
          <img
            src={heroMobile}
            alt="Social media and ads"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
          />

          {/* Softer overlay on mobile */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white">

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Powerful Social <br /> Media & Ads
              </h1>

              <p className="text-gray-200 text-base md:text-lg">
                Flexible social media and ad production packages designed to grow your brand
                visibility and sales. We create content that converts.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default PricingHero
