import { useNavigate } from "react-router-dom"
import img1 from "../../assets/images/1_2.webp"
import img2 from "../../assets/images/1_3.webp"
import img3 from "../../assets/images/1_4.webp"

function ConnectOptions() {
  const navigate = useNavigate()

  return (
    <section className="bg-black text-white py-20 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 md:mb-24">
          <p className="uppercase tracking-widest text-sm text-zinc-400 mb-4">
            Reach out
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Three ways to connect <br /> with us
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Pick the method that works best for your schedule.
          </p>
        </div>


        {/* ================= CARDS ================= */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* ================= EMAIL ================= */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col shadow-xl
                          hover:-translate-y-2 hover:shadow-blue-500/20
                          transition duration-300">

            <img
              src={img1}
              alt="email"
              className="w-full h-[260px] object-cover rounded-xl mb-6"
            />

            <h3 className="text-3xl font-semibold mb-3">
              Send us an email
            </h3>

            <p className="text-zinc-400 mb-6 text-lg">
              Send your project details or service inquiries and receive a response shortly.
            </p>

            <div className="mt-auto">
              <a
                href="mailto:avixstudio.ax@gmail.com"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium
                           hover:bg-blue-500 hover:text-white transition"
              >
                Email
              </a>
            </div>
          </div>



          {/* ================= WHATSAPP ================= */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col shadow-xl
                          hover:-translate-y-2 hover:shadow-blue-500/20
                          transition duration-300">

            <img
              src={img2}
              alt="whatsapp"
              className="w-full h-[260px] object-cover rounded-xl mb-6"
            />

            <h3 className="text-3xl font-semibold mb-3">
              Message on WhatsApp
            </h3>

            <p className="text-zinc-400 mb-6 text-lg">
              Quickly discuss ideas, services, or project questions.
            </p>

            <div className="mt-auto">
              <a
                href="https://wa.me/917702512704"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium
                           hover:bg-green-500 hover:text-white transition"
              >
                Message
              </a>
            </div>
          </div>



          {/* ================= CONTACT ================= */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col shadow-xl
                          hover:-translate-y-2 hover:shadow-blue-500/20
                          transition duration-300">

            <img
              src={img3}
              alt="meeting"
              className="w-full h-[260px] object-cover rounded-xl mb-6"
            />

            <h3 className="text-3xl font-semibold mb-3">
              Schedule a meeting
            </h3>

            <p className="text-zinc-400 mb-6 text-lg">
              Book a consultation session to discuss project goals and digital strategy.
            </p>

            <div className="mt-auto">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium
                           hover:bg-blue-500 hover:text-white transition"
              >
                Contact
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ConnectOptions
