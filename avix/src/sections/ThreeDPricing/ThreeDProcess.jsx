import conceptIcon from "../../assets/images/script.svg"
import modelIcon from "../../assets/images/modeling.svg"
import arrowIcon from "../../assets/images/arrow.svg"

import img1 from "../../assets/images/3dpricing3.webp"
import img2 from "../../assets/images/3dpricing4.webp"
import img3 from "../../assets/images/3dpricing5.webp"

export default function ThreeDProcess() {
  return (
    <section className="w-full bg-white py-28 md:py-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <p className="text-sm text-gray-500 mb-4">
            Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            How we build your <br /> animation
          </h2>

          <p className="text-gray-600 text-lg">
            Five deliberate steps from vision to delivery
          </p>
        </div>


        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ================= CARD 1 ================= */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden group shadow-lg">

            <img
              src={img1}
              alt=""
              className="absolute inset-0 w-full h-full object-cover 
                         transition duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
                            from-black/80 via-black/60 to-black/90 
                            group-hover:from-black/70 group-hover:to-black/80
                            transition duration-500" />

            <div className="relative h-full p-12 flex flex-col justify-end text-white">

              <img
                src={conceptIcon}
                alt=""
                className="w-9 mb-6 brightness-0 invert"
              />

              <h3 className="text-3xl font-bold mb-5">
                Concept and script development
              </h3>

              <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                We listen. You describe the story, the mood, the message.
                We sketch ideas, refine direction, and lock the narrative
                before a single model is built.
              </p>

              <img
                src={arrowIcon}
                alt=""
                className="w-5 opacity-80 brightness-0 invert"
              />
            </div>
          </div>


          {/* ================= CARD 2 ================= */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden group shadow-lg">

            <img
              src={img2}
              alt=""
              className="absolute inset-0 w-full h-full object-cover 
                         transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b 
                            from-black/80 via-black/60 to-black/90 
                            group-hover:from-black/70 group-hover:to-black/80
                            transition duration-500" />

            <div className="relative h-full p-12 flex flex-col justify-end text-white">

              <img
                src={modelIcon}
                alt=""
                className="w-9 mb-6 brightness-0 invert"
              />

              <h3 className="text-3xl font-bold mb-5">
                Modeling and texturing work
              </h3>

              <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                Digital geometry takes shape. Every surface, every material,
                every detail is crafted with precision. We build environments
                and objects that feel real.
              </p>

              <img
                src={arrowIcon}
                alt=""
                className="w-5 opacity-80 brightness-0 invert"
              />
            </div>
          </div>


          {/* ================= CARD 3 ================= */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden group shadow-lg">

            <img
              src={img3}
              alt=""
              className="absolute inset-0 w-full h-full object-cover 
                         transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b 
                            from-black/80 via-black/60 to-black/90 
                            group-hover:from-black/70 group-hover:to-black/80
                            transition duration-500" />

            <div className="relative h-full p-12 flex flex-col justify-end text-white">

              <p className="text-sm text-gray-300 mb-3">
                Three
              </p>

              <h3 className="text-3xl font-bold mb-5">
                Lighting and animation setup
              </h3>

              <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                Light reveals form. Motion tells story.
                We choreograph cameras, animate elements,
                and light scenes to guide the viewer's eye
                exactly where it needs to go.
              </p>

              <img
                src={arrowIcon}
                alt=""
                className="w-5 opacity-80 brightness-0 invert"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
