import SecHeading from "./common/SecHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Joshua Artkinson",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1749433213/pyrite/IMG-20241011-WA0026_htw89r_ck6ivb.webp",
    text: "Working with Jilova Studios was an incredible experience! Their team brought our story to life with creativity and professionalism. The final film exceeded all our expectations.",
  },
  {
    name: "Vera Freeman",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1749433213/pyrite/IMG-20241011-WA0020_1_tku3th_bhfdzw.webp",
    text: " Jilova Studios handled every aspect of our documentary with care and attention to detail. Their passion for storytelling truly shines through in their work.",
  },
  {
    name: "Michael Morgan",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1749433213/pyrite/IMG-20241011-WA0027_lrbadq_mkgqzb.webp",
    text: "From start to finish, Jilova Studios made the production process seamless and enjoyable. I highly recommend them to anyone looking for top-notch film production.",
  },
  {
    name: "Mabel Bonney",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719852263/pyrite/14_gqkwwd.jpg",
    text: "The team at Jilova Studios is talented, dedicated, and innovative. Our project was delivered on time and the quality was outstanding. We look forward to working with them again!",
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
              slidesPerView: 3,
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
                    className="rounded-full w-[70px] h-[70px] max-w-[80px] object-cover object-top"
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
