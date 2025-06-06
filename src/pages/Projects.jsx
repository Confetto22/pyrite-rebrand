import { Link } from "react-router-dom";
import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { projects } from "../components/common/projects";
import { motion } from "framer-motion";

const Projects = () => {
  //   const navigate = useNavigate();
  return (
    <section>
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        // currProject={'name'}
        currPage={"Projects"}
        prevPage={"Home"}
        prevLink={"/"}
      />
      <section className="projects_content px-8 py-24 flex flex-col gap-7">
        <SecHeading
          title={"Our Projects"}
          titleStyle={""}
          heading={"Videos That Will Last Lifetime"}
          headingStyle={
            "md:text-[3rem] text-black max-w-full md:w-[80%]  lg:text-[4rem]"
          }
          divStyle={
            "flex items-center md:items-start md:text-left text-center md:w-[70%] "
          }
          newDivStyle={"md:justify-start  justify-center "}
        />

        <div className="all_projects grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:items-center">
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
                  className="flex flex-col items-start gap-3 text-white"
                >
                  <Link
                    to={`/projects/${project.name
                      .replaceAll(" ", "-")
                      .toLowerCase()}`}
                    className="capitalize font-semibold text-[var(--primary-color)] text-[1.5rem] cursor-pointer"
                  >
                    {project.name} - {project.year}
                  </Link>
                  <p className="text-white">
                    {/* {project.desc[0].slice(0, 100)}... */}
                    {project.desc.pargagraph1.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/projects/${project.name
                      .replaceAll(" ", "-")
                      .toLowerCase()}`}
                    className="flex items-center gap-1 hover:gap-2 ease-in duration-200 uppercase  hover:text-[var(--primary-color)] font-semibold  "
                  >
                    see more <HiOutlineArrowLongRight />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
