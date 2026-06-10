import { motion } from "framer-motion";

import contactImg from "../../assets/images/4_18.webp";
import emailIcon from "../../assets/images/mail.svg";
import callIcon from "../../assets/images/call.svg";

export default function Connect() {
  return (
    <section className="w-full bg-gray-100 overflow-hidden">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-5 gap-14 items-center">

        {/* ================================================= */}
        {/* ================= LEFT CONTENT (40%) ============= */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left md:col-span-2"
        >
          <p className="text-sm text-gray-500">Connect</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let’s talk
          </h2>

          <p className="text-gray-600">
            Ready to start your next project with us?
          </p>


          {/* ================= SMALLER CONTACT CARDS ================= */}
          <div className="space-y-4">

            {/* EMAIL */}
            <motion.a
              href="mailto:avixstudio.ax@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-3
                bg-white
                p-3
                rounded-lg
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <img src={emailIcon} alt="email" className="w-5 h-5" />

              <div>
                <h4 className="text-sm font-semibold">Email</h4>
                <p className="text-xs text-gray-500">
                  avixstudio.ax@gmail.com
                </p>
              </div>
            </motion.a>


            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/917702512704"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-3
                bg-white
                p-3
                rounded-lg
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <img src={callIcon} alt="call" className="w-5 h-5" />

              <div>
                <h4 className="text-sm font-semibold">WhatsApp</h4>
                <p className="text-xs text-gray-500">
                  +91 77025 12704
                </p>
              </div>
            </motion.a>
          </div>


          {/* ================= SMALL CTA BUTTON ================= */}
          <motion.a
            href="https://wa.me/917702512704"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block
              bg-black text-white
              px-5 py-2
              rounded-md
              text-sm
              font-medium
              mt-4
            "
          >
            Start →
          </motion.a>

        </motion.div>


        {/* ================================================= */}
        {/* ================= RIGHT IMAGE (60%) ============== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:col-span-3"
        >

          {/* glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-2xl" />

          <motion.img
            src={contactImg}
            alt="contact"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              rounded-xl
              shadow-2xl
              w-full
              h-[260px]
              sm:h-[360px]
              md:h-[480px]
              lg:h-[540px]
              object-cover
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
