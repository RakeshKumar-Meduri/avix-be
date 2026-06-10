import img1 from "../../assets/images/1_8.webp"
import img2 from "../../assets/images/1_9.webp"
import img3 from "../../assets/images/1_10.webp"

function Process() {
  return (
    <section className="bg-[#f4f4f4] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* ===== label ===== */}
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
          Process
        </p>


        {/* ===== title ===== */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          What happens after you <br /> contact us
        </h2>


        {/* ===== subtitle ===== */}
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-20">
          We move fast but thoughtfully. Here’s how we turn your idea into reality.
        </p>



        {/* ================================================= */}
        {/* DESKTOP VERSION */}
        {/* ================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-20 relative items-start">

          {/* ===== LINE (through dots) ===== */}
          <div className="absolute left-0 right-0 top-[376px] h-[2px] bg-black z-0"></div>



          {/* ===== STEP ===== */}
          {[ 
            {
              img: img1,
              title: "Review",
              text: "We analyze your project details and understand what you're trying to achieve."
            },
            {
              img: img2,
              title: "Strategy",
              text: "We connect with you to discuss ideas, challenges, and the best path forward."
            },
            {
              img: img3,
              title: "Proposal",
              text: "We deliver a clear roadmap and service proposal tailored to your needs."
            }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center relative z-10">

              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[330px] object-cover rounded-3xl mb-10"
              />

              {/* dot */}
              <div className="w-4 h-4 bg-black rounded-full mb-10"></div>

              <h3 className="text-3xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 text-lg max-w-md">
                {step.text}
              </p>

            </div>
          ))}

        </div>



        {/* ================================================= */}
        {/* MOBILE VERSION */}
        {/* ================================================= */}
        <div className="md:hidden space-y-16">

          {[ 
            {
              img: img1,
              title: "Review",
              text: "We analyze your project details and understand what you're trying to achieve."
            },
            {
              img: img2,
              title: "Strategy",
              text: "We connect with you to discuss ideas, challenges, and the best path forward."
            },
            {
              img: img3,
              title: "Proposal",
              text: "We deliver a clear roadmap and service proposal tailored to your needs."
            }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">

              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[240px] object-cover rounded-2xl mb-6"
              />

              <div className="w-4 h-4 bg-black rounded-full mb-6"></div>

              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 text-base px-4">
                {step.text}
              </p>

              {/* vertical connector */}
              {i !== 2 && (
                <div className="w-[2px] h-10 bg-black mt-8"></div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Process
