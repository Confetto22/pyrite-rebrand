import { useParams } from "react-router-dom";
// import OurProjects from "../components/OurProjects";
import { projects } from "../components/common/projects";
import PageHead from "../components/common/PageHead";
// import { IoPersonOutline } from "react-icons/io5";
// import { AiOutlineFileSearch } from "react-icons/ai";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { SlLocationPin } from "react-icons/sl";
// import { TiFolderOpen } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
// import Button from "../components/common/Button";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

// const cardDetails = [
//   {
//     name: "Client",
//     icon: <IoPersonOutline />,
//     value: "Hazel Potter",
//   },
//   {
//     name: "Project  Name",
//     icon: <AiOutlineFileSearch />,
//     value: "X-Copter",
//   },
//   {
//     name: "Project Year",
//     icon: <FaRegCalendarAlt />,
//     value: "2021",
//   },
//   {
//     name: "Location",
//     icon: <SlLocationPin />,
//     value: "Tabanan, Bali",
//   },
//   {
//     name: "Category",
//     icon: <TiFolderOpen />,
//     value: "Aerial VR",
//   },
// ];
// const defaultValue = [
//   {
//     name: "Client",
//     icon: <IoPersonOutline />,
//   },
//   {
//     name: "Project  Name",
//     icon: <AiOutlineFileSearch />,
//   },
//   {
//     name: "Project Year",
//     icon: <FaRegCalendarAlt />,
//   },
//   {
//     name: "Location",
//     icon: <SlLocationPin />,
//   },
//   {
//     name: "Category",
//     icon: <TiFolderOpen />,
//   },
// ];
// const projectList = [
//   "City In The Snow",
//   "Paradise Waterfall",
//   "Hidden Beach",
//   "Wind Farm Inspections",
//   "Event Photography",
//   "360 Videography",
// ];

const ProjectDetail = () => {
  const { name } = useParams();
  const filterProjects = projects.filter(
    (newFilter) =>
      newFilter.name.replaceAll(" ", "-").toLowerCase() ===
      name.replaceAll(" ", "-").toLowerCase()
  );

  const project = filterProjects[0];
  // console.log(name);

  return (
    <section className="project_details overflow-x-hidden">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        currProject={project.name}
        currPage={project.name}
        prevPage={"Projects"}
        prevLink={"/projects"}
      />
      <section className="detail_area px-8">
        <section className="pb-16 flex flex-col gap-14 md:gap-0 md:flex-row md:items-start  md:justify-around">
          <div className="details_area  w-full text-[var(--secondary-color)] md:w-[55%]">
            <div className="flex flex-col gap-5 items-start py-16">
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
                className="text-black font-bold text-[1.6rem] md:text-[2rem] uppercase tracking-wide"
              >
                {project.name} - {project.year} {project.genre}
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
                className="md:text-[1.1rem]  lg:text-[1.3rem] font-[400]"
              >
                {project.desc.pargagraph1}
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
                className="md:text-[1.1rem]  lg:text-[1.3rem] font-[400]"
              >
                {project.desc.pargagraph2}
              </motion.p>
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
                className="project_banner relative  w-full "
              >
                <img
                  src={project.slideshow[0]}
                  alt="pyrite classics"
                  className="w-full aspect-[18/12]  object-cover object-center"
                />
                <div className=" bg-[#000000ab] absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <FaCirclePlay className="text-[2.4rem] md:text-[4.4rem] text-white" />
                </div>
              </motion.div>
            </div>
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
              className="text-[1.5rem] md:text-[2.5rem] font-[700] text-black"
            >
              Project Overview
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
              className="text-[1rem] md:text-[1.2rem] font-[400] text-[var(--secondary-color)]"
            >
              {project.overview}
            </motion.p>
          </div>

          <aside className="flex flex-col gap-12 md:w-[40%]  rounded-md md:sticky md:top-3">
            <div className="shadow-2xl detail_card rounded-sm text-white bg-[var(--secondary-color)]  py-8 max-w-[500px] md:max-w-full mx-auto  p-4 flex flex-col gap-7 items-center w-full">
              <p className="font-bold text-[1.5rem] uppercase text-center">
                project detail
              </p>
              <div className="allcard_dets flex flex-col items-start justify-center  w-[90%] gap-5">
                {project.cardDetails.map((detail) => (
                  <div
                    className="detail_value  flex items-center justify-between   p-2 gap-5 w-full capitalize text-[1.2rem] "
                    key={detail.name}
                  >
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
                      className="flex  gap-2  justify-start  items-center  "
                      key={detail.name}
                    >
                      <span className="text-[1.7rem] text-[var(--primary-color)]">
                        <i className={detail.icon}></i>
                      </span>{" "}
                      {detail.name}:
                    </motion.p>

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
                      className="text-white   "
                    >
                      {detail.value}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
        <section className=" execution flex flex-col md:flex-row-reverse md:items-center md:justify-around pb-16">
          <div className="execution text md:w-[40%] p-4 text-[var(--secondary-color)] flex flex-col items-start gap-5">
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
              className="text-[1.5rem] md:text-[2.5rem] font-[700] text-black"
            >
              Project Execution
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
              className="text-[1.1rem]"
            >
              {project.execution?.writeUp}
            </motion.p>
            <ul className="flex flex-col gap-3">
              {project.execution?.points.map((singleList) => (
                <motion.li
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  key={singleList}
                  className="list-none flex items-start gap-1 font-[600] text-[1.1rem] "
                >
                  <span>
                    <GiCheckMark className="text-[var(--primary-color)]" />
                  </span>
                  {singleList}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="project_slideshow md:w-[50%]">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper imagesContainer w-full"
            >
              {project.slideshow.map((image) => (
                <SwiperSlide key={image}>
                  <div className=" max-h-[600px]">
                    <img
                      src={image}
                      alt="project"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </section>
  );
};
export default ProjectDetail;
