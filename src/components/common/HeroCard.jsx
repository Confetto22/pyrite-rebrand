import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const heroCardValues = [
  {
    bgPic:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722246751/pyrite/newAsset_yadwup.jpg')]",
    subtitle: "One scene at a time - pyrite classics.",
    h1: "We produce brand videos that drive results",
    desc: "Creating ideas that are difficult to ignore, hard to forget, and very highly effective",
    buttons: [
      {
        button1text: "get started",
        button1Link: "#",
        button2text: "view our works",
        button2Link: "#",
      },
    ],
  },
  {
    bgPic:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722246751/pyrite/newAsset_yadwup.jpg')]",
    subtitle: "One scene at a time - pyrite classics.",
    h1: "We produce brand videos that drive results",
    desc: "Creating ideas that are difficult to ignore, hard to forget, and very highly effective",
    buttons: [
      {
        button1text: "get started",
        button1Link: "#",
        button2text: "view our works",
        button2Link: "#",
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
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="mySwiper  imagesContainer w-full md:w-full "
    >
      {heroCardValues.map((heroCard) => (
        <SwiperSlide key={heroCard.h1}>
          <section
            className={`hero text-white  flex flex-col items-start justify-center gap-3  min-h-[90vh] bg-no-repeat bg-cover ${heroCard.bgPic}`}
          >
            <div className="cover min-h-[90vh] p-5 gap-6 flex flex-col items-start justify-center">
              <h3 className="text-[var(--primary-color)] uppercase md:flex-row flex-col w-full flex items-start md:items-center gap-4 font-bold text-[1rem] md:max-w-[600px] md:text-[1.1rem] md:w-full">
                <hr className="bg-[var(--primary-color)] border-none h-[1px] w-[13%]" />{" "}
                {heroCard.subtitle}
              </h3>
              <h1 className="text-[1.9rem] capitalize font-bold md: max-w-[600px] md:text-[3.2rem] md:leading-[3.6rem] lg:leading-[4.6rem] lg:text-[4.1rem] lg:max-w-[760px]">
                {heroCard.h1}
              </h1>
              <p className="text-[1rem] font-semibold md: max-w-[600px] md:text-[1.2rem]">
                {heroCard.desc}
              </p>
              <div className="flex items-center justify-start w-full gap-6 mt-3 md: max-w-[600px] md:text-[]">
                <button className="bg-[var(--primary-color)] rounded-sm px-5 py-2 uppercase font-semibold hover:-translate-y-2 ease-in duration-200">
                  {heroCard.buttons[0].button1text}
                </button>
                <button className="flex items-center gap-2 hover:text-[var(--primary-color)] hover:-translate-y-2 ease-in duration-200 px-5 py-2">
                  {heroCard.buttons[0]?.button2text} <FaPlayCircle />
                </button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCard;
