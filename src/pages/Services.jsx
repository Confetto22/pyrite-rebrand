import { Link } from "react-router-dom";
import { services } from "../components/common/allServices";
import PageHead from "../components/common/PageHead";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Services = () => {
  // const navigate = useNavigate();
  return (
    <section className="services overflow-x-hidden">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722251703/pyrite/IMG_0142_cyxfjq.webp')]"
        }
        // currProject={'name'}
        currPage={"Services"}
        prevPage={"Home"}
        prevLink={"/"}
        intro={
          "Your Creative Roadmap Starts Here. We support you from creative inception to final production."
        }
      />
      <div className="px-8 pt-24 flex flex-col items-center text-center gap-4">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="font-[700] text-[1.5rem] md:text-[2rem]"
        >
          VIDEO PRODUCTION SERVICES
        </motion.h2>
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
          className="font-[300] md:max-w-[800px]"
        >
          At Jilova Studios, we provide a wide range of video production
          services that meets the needs of all our clients. Working together, we
          will develop a thorough understanding of your goals, your budget and
          your creative vision. Whichever of our video production services you
          require we will be with you every step of the way, from conception to
          delivery to ensure you get the results you are looking for.
        </motion.p>
      </div>

      <div className="allServices px-8 pb-24 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
        {services.map((service) => (
          <Link
            to={`/services/${service.name.replaceAll(" ", "-").toLowerCase()}`}
            key={service.name}
          >
            <div
              className={`cursor-pointer service ease-in duration-300   bg-center bg-cover ${service.bgImg} max-w-[400px] h-full`}
            >
              <div className="black_cover hover:bg-[#00000088] ease-in duration-300 bg-[#00000000] w-full h-full">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="w-full h-full bg-[#0000008c] px-8 py-10 flex flex-col items-start gap-4"
                >
                  <img
                    src={service.icon}
                    alt="movie production"
                    className="max-w-[50px] md:max-w-[80px]"
                  />
                  <h2 className="text-white capitalize md:text-[1.4rem] font-bold">
                    {service.name}
                  </h2>
                  <p className="text-white">{service.desc.slice(0, 83)}...</p>
                  <p className="text-[var(--neon)] capitalize flex items-center font-[600] text-[1.2rem]">
                    read more <GoArrowUpRight />
                  </p>
                </motion.div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
