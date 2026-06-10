import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import campaignImg from "../../assets/images/socialmedia4.webp"

export default function AdCampaignSection() {

  const navigate = useNavigate()

  return (
    <section className="w-full">

      <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">

        {/* ================= LEFT SIDE ================= */}
        <div className="bg-[#f4f4f4] flex items-center">

          <div className="max-w-xl px-8 md:px-16 py-20">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            >
              Ad Campaign <br /> Setup & <br /> Management
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg mb-8"
            >
              Ad Campaign Setup & Management – ₹500 per campaign
              Includes campaign configuration and performance monitoring.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => navigate("/contact")}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Contact
            </motion.button>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative">
          <img
            src={campaignImg}
            alt="Ad campaign"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  )
}
