import { Link } from "react-router-dom";
import SecHeading from "./common/SecHeading";
import { services } from "./common/allServices";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

// import { HiMiniArrowLongRight } from "react-icons/hi2";

const OurServices = () => {
  return (
    <section className="our_services text-black flex flex-col items-start gap-8 ">
      <section className="flex flex-col md:flex-row-reverse md:items-stretch md:gap-6">
        <div className="imgBox relative md:w-[50%] ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1749124929/pyrite/director-service-bg-updated_u3qkxb.jpg"
            alt="pyrite classics"
            className="w-full h-full object-cover object-center"
          />
          <div className="bg-[#00000077] w-full h-full absolute top-0"></div>
        </div>
        <section className="px-3 pt-16 md:w-[50%] flex flex-col items-start md:items-stretch gap-4 pb-16">
          <SecHeading
            title={"services"}
            titleStyle={""}
            heading={"our services"}
            headingStyle={"md:text-[3rem] text-black max-w-[500px]  "}
            divStyle={" px-8 "}
            newDivStyle={" "}
          />
          <div className="allServices  grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 ">
            {services.slice(0, 4).map((service) => (
              <Link
                to={`/services/${service.name
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                key={service.name}
              >
                <div
                  className={`cursor-pointer service ease-in duration-300   bg-center bg-cover ${service.bgImg} max-w-[400px] h-full`}
                >
                  <div className="black_cover hover:bg-transparent ease-in duration-300 bg-[#000] w-full h-full">
                    <div className="w-full h-full bg-[#000000d6] px-8 py-10 flex flex-col items-start gap-4">
                      <img
                        src={service.icon}
                        alt="movie production"
                        className="max-w-[50px] md:max-w-[80px]"
                      />
                      <h2 className="text-white capitalize md:text-[1.4rem] font-bold">
                        {service.name}
                      </h2>
                      <p className="text-white font-[300]">
                        {service.desc.slice(0, 83)}...
                      </p>
                      <p className="text-[var(--neon)] capitalize flex items-center font-[600] text-[1.2rem]">
                        read more <GoArrowUpRight />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to={`/services`}
            className="all-services w-[60%] md:w-full  bg-[var(--secondary-color)] px-7 py-4 font-[600] uppercase text-white rounded-sm flex items-center gap-2 hover:gap-[60%] md:hover:gap-[70%] border-2 border-[var(--secondary-color)] hover:bg-transparent hover:text-[var(--secondary-color)]"
          >
            All Services <FaArrowRightLong />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default OurServices;
