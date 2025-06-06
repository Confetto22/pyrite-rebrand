import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const heroCardValues = [
  {
    bgPic:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722246751/pyrite/newAsset_yadwup.jpg')]",
    subtitle: "One scene at a time - JILova Studios.",
    h1: "We produce brand videos that drive results",
    desc: "Creating ideas that are difficult to ignore, hard to forget, and very highly effective",
    buttons: [
      {
        button1text: "get started",
        button1Link: "/services",
        button2text: "view our works",
        button2Link: "/projects",
      },
    ],
  },
  {
    bgPic:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1720833104/pyrite/pyritePic4_nym5nn.jpg')]",
    subtitle: "One scene at a time - jilova studios.",
    h1: "Experience The difference with our professional services",
    desc: "Your Creative Roadmap Starts Here. We support you from creative inception to final production.",
    buttons: [
      {
        button1text: "contact us",
        button1Link: "/contact",
        button2text: "view our works",
        button2Link: "/projects",
      },
    ],
  },
];

const HeroCard = () => {
  return (
    <Swiper
      // navigation={true}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="mySwiper  imagesContainer w-full md:w-full "
    >
      {heroCardValues.map((heroCard) => (
        <SwiperSlide key={heroCard.h1}>
          <section
            className={`hero text-white  flex flex-col items-start justify-center gap-3  min-h-[90vh] bg-no-repeat bg-cover ${heroCard.bgPic}`}
          >
            <div className="cover min-h-[90vh] p-5 px-8 gap-3 md:gap-6 flex flex-col items-start justify-center">
              <motion.h3
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                // viewport={{ once: true }}
                className="text-[var(--primary-color)] uppercase md:flex-row flex-col w-full flex items-start md:items-center gap-4 font-bold text-[1rem] md:max-w-[600px] md:text-[1.1rem] md:w-full"
              >
                <hr className="bg-[var(--primary-color)] border-none h-[1px] w-[13%]" />{" "}
                {heroCard.subtitle}
              </motion.h3>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                // viewport={{ once: true }}
                className="text-[1.9rem] capitalize font-bold md: max-w-[450px] md:text-[3.2rem] md:leading-[3.6rem] lg:leading-[4.6rem] lg:text-[4.1rem] lg:max-w-[760px] "
              >
                {heroCard.h1}
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                // viewport={{ once: true }}
                className="text-[1rem] font-semibold md: max-w-[450px] md:text-[1.2rem] md:max-w-[600px]"
              >
                {heroCard.desc}
              </motion.p>
              <div className="flex items-center justify-start w-full gap-6 mt-3 md: max-w-[600px] md:text-[]">
                <Link
                  to={heroCard.buttons[0]?.button1Link}
                  className="bg-[var(--primary-color)] rounded-sm px-5 py-2 uppercase font-semibold hover:-translate-y-2 ease-in duration-200"
                >
                  {heroCard.buttons[0]?.button1text}
                </Link>
                <Link
                  to={heroCard.buttons[0]?.button2Link}
                  className="flex items-center gap-2 hover:text-[var(--primary-color)] hover:-translate-y-2 ease-in duration-200 px-5 py-2"
                >
                  {heroCard.buttons[0]?.button2text} <FaPlayCircle />
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCard;
