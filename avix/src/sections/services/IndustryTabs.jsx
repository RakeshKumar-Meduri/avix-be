import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/images/3_5.webp";
import img2 from "../../assets/images/3_6.webp";
import img3 from "../../assets/images/3_7.webp";

export default function IndustryTabs() {
  const tabs = [
    {
      id: "realestate",
      label: "Real Estate",
      category: "Property",
      title: "Real estate marketing and lead generation",
      desc: "We generate qualified leads and present property projects through conversion-focused landing pages.",
      img: img1
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      category: "Commerce",
      title: "E-commerce growth and performance marketing",
      desc: "We build high-converting product pages and optimize checkout flows.",
      img: img2
    },
    {
      id: "startups",
      label: "Startups",
      category: "Innovation",
      title: "Startup branding and scalable systems",
      desc: "From MVP to scale, we create flexible platforms.",
      img: img3
    }
  ];

  const [[index, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newIndex =
      (index + newDirection + tabs.length) % tabs.length;

    setPage([newIndex, newDirection]);
  };

  const swipeConfidenceThreshold = 100;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  /* ================= SAFE RESPONSIVE VARIANTS ================= */
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  return (
    <section className="w-full overflow-hidden bg-gray-100 py-20 md:py-28">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-14">
        <p className="text-sm text-gray-500 mb-3">Industries</p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Solutions built for your sector
        </h2>

        <p className="text-gray-600 mt-4">
          We tailor solutions to your market and goals.
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex justify-center gap-8 mb-12 text-sm font-medium px-6 flex-wrap">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setPage([i, i > index ? 1 : -1])}
            className="relative pb-2"
          >
            <span className={index === i ? "text-black" : "text-gray-500"}>
              {tab.label}
            </span>

            {index === i && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* ================= CARD ================= */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
          relative
          min-h-[620px]
          sm:min-h-[650px]
          md:min-h-[500px]
        ">

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={tabs[index].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full grid md:grid-cols-2"
            >

              {/* ================= IMAGE ================= */}
              <div className="h-[340px] sm:h-[380px] md:h-auto">
                <img
                  src={tabs[index].img}
                  alt="industry"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= TEXT ================= */}
              <div className="px-6 py-8 sm:px-8 sm:py-10 md:p-12 flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-4">
                  {tabs[index].category}
                </p>

                <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                  {tabs[index].title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {tabs[index].desc}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}
