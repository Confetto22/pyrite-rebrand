import SecHeading from "./common/SecHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "testimonial 1",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719660240/pyrite/01_qjqwba.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, excepturi quibusdam sint reiciendis, cupiditate at suscipit eveniet, nobis id necessitatibus aliquid dolore consequatur ad magni animi consectetur. Et, doloremque.",
  },
  {
    name: "testimonial 2",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719661026/pyrite/18_dyxmza.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, excepturi quibusdam sint reiciendis, cupiditate at suscipit eveniet, nobis id necessitatibus aliquid dolore consequatur ad magni animi consectetur. Et, doloremque.",
  },
  {
    name: "testimonial 3",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719661027/pyrite/19_xk0lol.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, excepturi quibusdam sint reiciendis, cupiditate at suscipit eveniet, nobis id necessitatibus aliquid dolore consequatur ad magni animi consectetur. Et, doloremque.",
  },
  {
    name: "testimonial 4",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719852263/pyrite/14_gqkwwd.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, excepturi quibusdam sint reiciendis, cupiditate at suscipit eveniet, nobis id necessitatibus aliquid dolore consequatur ad magni animi consectetur. Et, doloremque.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-24 p-5">
      <SecHeading
        title={"testimonials"}
        titleStyle={""}
        heading={"What Clients Say About Us"}
        headingStyle={"md:text-[3rem] text-black max-w-[500px]  lg:text-[4rem]"}
        divStyle={" items-center text-center"}
        newDivStyle={"justify-center "}
      />
      <div className="all_testimonials p-5">
        <Swiper
          //   slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper imagesContainer w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="testimonial bg-[#e0e0e0d9] p-6 py-12 flex flex-col gap-4 items-start">
                <p>{testimonial.text}</p>
                <div className="flex items-center gap-5 font-semibold ">
                  <img
                    src={testimonial.pic}
                    alt={testimonial.name}
                    className="rounded-full max-w-[80px]"
                  />
                  <p className="uppercase">{testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
