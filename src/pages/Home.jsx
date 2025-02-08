// import { Link } from "react-router-dom";
import CountUp from "react-countup";

import { Link } from "react-router-dom";
import HeroCard from "../components/common/HeroCard";
import SecHeading from "../components/common/SecHeading";
import Button from "../components/common/Button";
import OurServices from "../components/OurServices";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import Marquee from "../components/common/marquee/Marquee";
import LetsWork from "../components/common/LetsWork";

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
    styling: "",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/amalogo_n7sav9.png",
    styling: "",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/vitalstrategieslogo_i6znja.png",
    styling: "",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084980/pyrite/policeservicelogo_wdst6t.png",
    styling: "",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721086062/pyrite/globalroadsafetylogo_yfyrji.png",
    styling: "max-w-[130px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/roadsafetylogo_z4uqge.png",
    styling: "max-w-[130px]",
  },
];

const Home = () => {
  return (
    <section className=" homepage ">
      <HeroCard />
      <section className="home_about bg-[var(--bg-color)] flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 lg:flex-row  items-start lg:items-center  p-4 py-16  lg:px-[3rem] ">
        <div className="about_text max-w-[600px] lg:max-w-[50%] flex flex-col items-start lg:justify-between gap-4 lg:w-[50%] ">
          <SecHeading
            title={"about us"}
            titleStyle={""}
            heading={"We Are a Team of Passionate Filmmakers"}
            headingStyle={"md:text-[3rem] max-w-[500px]  lg:text-[4rem]"}
            divStyle={""}
          />
          <div className="all_countups grid grid-cols-2 gap-x-16 gap-y-7 py-5">
            {countUpValues.map((value) => (
              <div
                key={value.name}
                className="countup flex flex-col gap-2 bg-[#1d07026e] p-4 pt-6 items-center justify-center"
              >
                <p className="flex items-center gap-1  text-base text-center">
                  <span className="font-bold text-[3rem]">
                    <CountUp
                      end={value.value}
                      duration={7}
                      enableScrollSpy
                      scrollSpyDelay={20}
                      scrollSpyOnce
                    />
                  </span>
                  <sup className="font-bold text-[1.7rem] text-[var(--secondary-color)]">
                    +
                  </sup>
                </p>
                <p className="capitalize font-light text-[var(--secondary-color)] text-center">
                  {value.name}
                </p>
              </div>
            ))}
          </div>
          {/* 
          <p className=" text-[1.1rem]  ">
            Dedicated to bringing creative and compelling stories to life on
            screen
          </p> */}
          <p>
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
            dui.
          </p>
          <Button refLink={"#"}>learn more</Button>
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
      <section className="cinematography p-6 flex flex-col md:flex-row md:gap-8 items-start gap-5 md:items-center">
        <div className="cinema_img  md:w-[50%] overflow-hidden max-w-[500px] rounded-lg md:max-w-[50%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722247263/pyrite/IMG_9331_weto6p.jpg"
            alt="about us"
            className="w-full rounded-lg  object-cover object-left hover:scale-110 ease-in duration-300 md:h-[70vh]"
          />
        </div>
        <div className="cinema_text items-start md:items-start md:w-[55%] md:pr-12 text-[var(--secondary-color)] flex flex-col gap-5">
          <SecHeading
            title={"our cinematography"}
            titleStyle={""}
            heading={"Cinematography and Film Production"}
            headingStyle={"md:text-[3rem] max-w-[500px]  lg:text-[4rem]"}
            divStyle={""}
          />
          <p className="font-bold text-[1.3rem] leading-7 md:text-[1.6rem] ">
            Our video production company is here to help you create stunning
            images from start to finish.
          </p>
          <p>
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
            dui. Integer consequat consectetur est id blandit. Proin et magna
            blandit arcu pellentesque scelerisque sit amet a sapien.
          </p>
          <Button refLink={"#"}>get started</Button>
        </div>
      </section>
      <OurServices />
      <OurProjects />
      <section className="trusted my-24 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-cover bg-center min-h-[50vh]">
        <div className="cover min-h-[50vh] py-7 flex flex-col items-center justify-evenly">
          <p className="text-center px-5 text-[white] text-[2rem] font-semibold">
            Trusted by many clients
          </p>
          <Marquee marqueestyle={""}>
            {trustedBrands.map((brand) => (
              <img
                src={brand.img}
                className={`max-w-[300px]  ${brand.styling}`}
                alt="trusted brand"
                key={brand.img}
              />
            ))}
          </Marquee>
        </div>
      </section>
      <Testimonials />
      <LetsWork />
    </section>
  );
};

export default Home;
