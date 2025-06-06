import { Link } from "react-router-dom";

const PageHead = ({
  bgPic,
  currPage,
  prevPage,
  prevLink,
  currProject,
  intro,
}) => {
  return (
    <section className={`page_head min-h-[60vh] ${bgPic} `}>
      <div
        className={`w-full h-full bg-[#000000cd] min-h-[60vh] flex flex-col items-center gap-3 justify-center px-8  text-center`}
      >
        <p className="text-white text-[2rem] font-bold md:text-[3.5rem] uppercase">
          {currProject}
        </p>
        <p className=" text-[var(--secondary-color)] text-[1.3rem] md:text-[1.5rem] font-semibold">
          <Link
            to={prevLink}
            className="text-[var(--primary-color)] underline underline-offset-2 hover:underline-offset-4 ease-in duration-200 hover:opacity-70"
          >
            {prevPage}
          </Link>{" "}
          <span className="text-white capitalize"> - {currPage}</span>
        </p>
        <p className="text-white capitalize text-center md:text-[1.2rem] max-w-[500px]">
          {intro}
        </p>
      </div>
    </section>
  );
};

export default PageHead;
