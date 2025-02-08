import { Link, useParams } from "react-router-dom";
import OurProjects from "../components/OurProjects";
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
import Button from "../components/common/Button";

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
    (newFilter) => newFilter.name === name
  );
  return (
    <section className="project_details ">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        currProject={name}
        currPage={"Project Detail"}
        prevPage={"Home"}
        prevLink={"/"}
      />
      <section className="detail_area p-8 flex flex-col gap-5 md:flex-row">
        <div className="details_area flex flex-col gap-5 md:w-[60%] text-[var(--secondary-color)]">
          <div className="flex flex-col gap-5 items-start pr-10">
            <h1 className="text-white font-bold text-[1.4rem] md:text-[2rem] uppercase tracking-wide">
              {name} - {filterProjects[0].year} {filterProjects[0].genre}
            </h1>
            <p className="md:text-[1.1rem] text-[.9rem] lg:text-[1.3rem] font-light">
              {filterProjects[0].desc.pargagraph1}
            </p>{" "}
            <p className="md:text-[1.1rem] text-[.9rem] lg:text-[1.3rem] font-light">
              {filterProjects[0].desc.pargagraph2}
            </p>
            <Button
              refLink={filterProjects[0].refLink}
              btStyle="capitalize font-semibold text-[1.3rem]"
            >
              project video
            </Button>
          </div>
          <div className="project_slideshow pt-8">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              //   navigation={true}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper imagesContainer w-full"
            >
              {filterProjects[0].slideshow.map((image) => (
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
        </div>
        <aside className="md:w-[40%] flex flex-col gap-12  ">
          <div className="detail_card rounded-sm text-white bg-[#0C0E18] md:sticky md:top-3 py-8 max-w-[500px] md:max-w-full mx-auto  p-4 flex flex-col gap-7 items-center w-full">
            <p className="font-bold text-[1.5rem] uppercase text-center">
              project detail
            </p>
            <div className="allcard_dets flex flex-col items-start justify-center  w-[90%] gap-5">
              {/* {cardDetails.map((detail) => ( */}
              {filterProjects[0].cardDetails.map((detail) => (
                <div
                  className="detail_value  flex items-center justify-between   p-2 gap-5 w-full capitalize text-[1.2rem] "
                  key={detail.name}
                >
                  <p
                    className="flex  gap-2  justify-start  w-[40%] items-center  "
                    key={detail.name}
                  >
                    <span className="text-[1.7rem] text-[var(--neon)]">
                      <i className={detail.icon}></i>
                    </span>{" "}
                    {detail.name}
                  </p>

                  <p className="  w-[5%]">:</p>
                  <p className="text-[var(--secondary-color)] w-[40%]   ">
                    {detail.value}
                  </p>
                </div>
              ))}
              {/* // ))} */}
            </div>
          </div>
          {/* <div className="detail_card rounded-sm text-white bg-[#0C0E18] py-8 max-w-[500px] md:max-w-full mx-auto  p-4 flex flex-col gap-7 items-center w-full">
            <p className="font-bold text-[1.5rem] uppercase text-center">
              project list
            </p>
            <div className="allcard_dets flex flex-col items-start justify-center  w-[90%] gap-5">
              {filterProjects[0].projectList.map((list) => (
                <p
                  key={list}
                  className="text-[var(--secondary-color)] flex items-center gap-5  w-full text-[1.5rem]"
                >
                  <hr className="max-w-[22px] w-full border-none bg-[var(--neon)] h-[2px] rounded-md" />
                  {list}
                </p>
             
              ))}
            </div>
          </div> */}
        </aside>
      </section>
    </section>
  );
};

export default ProjectDetail;
