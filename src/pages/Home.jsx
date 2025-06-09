// import { Link } from "react-router-dom";
import CountUp from "react-countup";

// import { Link } from "react-router-dom";
import HeroCard from "../components/common/HeroCard";
import SecHeading from "../components/common/SecHeading";
import Button from "../components/common/Button";
import OurServices from "../components/OurServices";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import Marquee from "../components/common/marquee/Marquee";
// import { Link } from "react-router-dom";
import ChooseUs from "../components/ChooseUs";
import { motion } from "framer-motion";
// import LetsWork from "../components/common/LetsWork";

const countUpValues = [
  {
    name: "years experience",
    value: 24,
  },
  {
    name: "Awards Winning",
    value: 12,
  },
  {
    name: "Professional Staff",
    value: 46,
  },
  {
    name: "Completed Projects",
    value: 100,
  },
];

const trustedBrands = [
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721679436/pyrite/bloombergLogo_yytgmn.svg",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/amalogo_n7sav9.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/vitalstrategieslogo_i6znja.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084980/pyrite/policeservicelogo_wdst6t.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721086062/pyrite/globalroadsafetylogo_yfyrji.png",
    styling: "max-w-[110px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/roadsafetylogo_z4uqge.png",
    styling: "max-w-[110px]",
  },
];

const Home = () => {
  return (
    <section className=" homepage text-black overflow-x-hidden">
      <HeroCard />
      <section className="home_about  flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 lg:flex-row  items-start lg:items-center  p-4 py-16  lg:px-[3rem] ">
        <div className="about_text max-w-[600px] lg:max-w-[50%] flex flex-col items-start lg:justify-between gap-4 lg:w-[50%] ">
          <SecHeading
            title={"about us"}
            titleStyle={""}
            heading={"We Are a Team of Passionate Filmmakers"}
            headingStyle={
              "md:text-[2.6rem] text-black max-w-[500px]  lg:text-[3.2rem]"
            }
            divStyle={""}
          />
          <div className="all_countups grid grid-cols-2 gap-x-16 gap-y-7 py-5">
            {countUpValues.map((value) => (
              <div
                key={value.name}
                className="countup flex flex-col gap-2 bg-[var(--secondary-color)] text-[white] p-4 pt-6 items-center justify-center"
              >
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-1  text-base text-center "
                >
                  <span className="font-bold text-[3rem] ">
                    <CountUp
                      end={value.value}
                      duration={7}
                      enableScrollSpy
                      scrollSpyDelay={20}
                      scrollSpyOnce
                      className=""
                    />
                  </span>
                  <sup className="font-bold text-[1.7rem]  ">+</sup>
                </motion.p>
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="capitalize font-light  text-center "
                >
                  {value.name}
                </motion.p>
              </div>
            ))}
          </div>
          {/* 
          <p className=" text-[1.1rem]  ">
            Dedicated to bringing creative and compelling stories to life on
            screen
          </p> */}
          <p>
            We are an independent media, branding agency with communications
            expertise, international reach, proven results and a relentless
            energy to push your business further.
          </p>
          <Button refLink={"/about-us"} btStyle={"bg-[var(--secondary-color)]"}>
            about us
          </Button>
          {/* <Link
            to={"#"}
            className="bg-[var(--primary-color)] rounded-sm px-5 py-2 uppercase font-semibold hover:-translate-y-2 ease-in duration-200 text-white"
          >
            learn more
          </Link> */}
        </div>
        <div className="about_img  h-full md:w-[70%] overflow-hidden max-w-[600px] rounded-lg lg:max-w-[50%] ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722247673/pyrite/IMG_0235_cnjfdq.webp"
            alt="about us"
            className="w-full rounded-lg aspect-[9/10]  object-cover object-left hover:scale-110 ease-in duration-300 "
          />
        </div>
      </section>
      <section className="cinematography bg-[var(--bg-color)] py-24 px-6 flex flex-col md:flex-row md:gap-8 items-start gap-5 md:items-center">
        <div className="cinema_img  md:w-[50%] overflow-hidden max-w-[500px] rounded-lg md:max-w-[50%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722247263/pyrite/IMG_9331_weto6p.jpg"
            alt="about us"
            className="w-full rounded-lg  object-cover object-left hover:scale-110 ease-in duration-300 md:h-[70vh]"
          />
        </div>
        <div className="cinema_text text-white items-start md:items-start md:w-[55%] md:pr-12 text-[var(--secondary-color)] flex flex-col gap-5">
          <SecHeading
            title={"our cinematography"}
            titleStyle={""}
            heading={"Cinematography and Film Production"}
            headingStyle={
              "md:text-[2.6rem] max-w-[500px]  lg:text-[3.2rem] text-white"
            }
            divStyle={""}
          />
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="font-bold text-[1.3rem] leading-7 md:text-[1.6rem] "
          >
            Our video production company is here to help you create stunning
            images from start to finish.
          </motion.p>

          <motion.p
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            At Jilova Studios, we are passionate about bringing stories to life
            through the art of cinematography and film production. Our team of
            experienced professionals is dedicated to crafting visually stunning
            and emotionally resonant films that captivate audiences and leave a
            lasting impression.By choosing Jilova Studios, you can trust that
            your film production project is in good hands. We are committed to
            delivering high-quality productions that meet your needs and exceed
            your expectations.
          </motion.p>
          {/* <Button refLink={"#"} btStyle={"bg-[var(--primary-color)] "}>
            get started
          </Button> */}
        </div>
      </section>
      <OurServices />
      <OurProjects />
      <ChooseUs />
      <section className="partner bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-cover bg-center">
        <div className=" min-h-[70vh] bg-[#000000c4] flex flex-col items-center justify-center text-white text-center p-8 gap-5">
          <h2 className="font-[800] text-[2rem] capitalize max-w-[700px]">
            Partner with Jilova Today! Contact Us for a Cinematic Journey.
          </h2>
          <p className="text-[1.2rem] font-light max-w-[700px]">
            Explore exciting partnership opportunities that bring stories to
            life. Let&apos;s create magic together in the world of film making.
          </p>
          {/* <Link
            to={"#"}
            className="uppercase bg-[var(--primary-color)] px-4 py-2 font-[700]"
          >
            case study
          </Link> */}
        </div>
      </section>
      <section className="trusted my-24  bg-[#0000008e]   min-h-[30vh] py-7 flex flex-col items-center justify-evenly">
        <p className="text-center px-5 text-[white] text-[2rem] font-semibold">
          Trusted by many clients
        </p>
        <Marquee marqueestyle={""}>
          {trustedBrands.map((brand) => (
            <img
              src={brand.img}
              className={`  ${brand.styling}`}
              alt="trusted brand"
              key={brand.img}
            />
          ))}
        </Marquee>
      </section>
      <Testimonials />
      {/* <LetsWork /> */}
    </section>
  );
};

export default Home;
