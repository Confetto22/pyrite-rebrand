import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import { projects } from "./common/projects";
import SecHeading from "./common/SecHeading";
// import { IoPlayCircleOutline } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const OurProjects = () => {
  const navigate = useNavigate();
  return (
    <section className="our_projects p-6 flex flex-col gap-7 py-24">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between md:px-12">
        <SecHeading
          title={"Our Projects"}
          titleStyle={""}
          heading={"Videos That Will Last Lifetime"}
          headingStyle={"md:text-[3rem] max-w-full md:w-[80%]  lg:text-[4rem]"}
          divStyle={
            "flex items-center md:items-start md:text-left text-center md:w-[70%] "
          }
          newDivStyle={"md:justify-start  justify-center "}
        />
        <Button btStyle={"md:w-[30%] lg:w-[20%]  text-center"}>
          view more
        </Button>
      </div>
      <div className="all_projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-center">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`project ${project.img} bg-center bg-cover h-[60vh] max-w-[600px] relative `}
          >
            <div className="cover hover:bg-[#000000d4] ease-in duration-300 flex flex-col justify-between p-4 px-8">
              <p className="text-white text-center text-[1.6rem] font-semibold capitalize ">
                {project.name}
              </p>
              {/* <Link
                to={"#"}
                className="absolute text-white  top-0 bottom-0 left-0 right-0 m-auto cursor-pointer  ease-in duration-300 hover:text-[#E3F81F] max-h-[2.2rem]  max-w-[6rem]  flex items-center justify-center uppercase gap-1 hover:gap-2"
              >
                details <HiOutlineArrowLongRight />
              </Link> */}
              <div className="flex flex-col items-start gap-3 text-white">
                <p
                  className="capitalize font-semibold text-[#E3F81F] text-[1.5rem] cursor-pointer"
                  onClick={() => navigate(`/${project.name}`)}
                >
                  {project.name} - {project.year}
                </p>
                <p className="text-[var(--secondary-color)]">
                  {/* {project.desc[0].slice(0, 100)}... */}
                  {project.desc.pargagraph1.slice(0, 100)}...
                </p>
                <button
                  className="flex items-center gap-1 hover:gap-2 ease-in duration-200 uppercase  hover:text-[#E3F81F] font-semibold  "
                  type="button"
                  onClick={() => navigate(`/${project.name}`)}
                >
                  see more <HiOutlineArrowLongRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
