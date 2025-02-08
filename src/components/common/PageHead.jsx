import { Link } from "react-router-dom";

const PageHead = ({ bgPic, currPage, prevPage, prevLink, currProject }) => {
  return (
    <section className={`page_head min-h-[80vh] ${bgPic} `}>
      <div
        className={`w-full h-full bg-[#000000cd] min-h-[80vh] flex flex-col items-center justify-center pt-24 text-center`}
      >
        <p className="text-white text-[2rem] font-bold md:text-[3.5rem]">
          {currProject}
        </p>
        <p className=" text-[var(--secondary-color)] text-[1.3rem] md:text-[1.5rem] font-semibold">
          <Link
            to={prevLink}
            className="text-[#E3F81F] underline underline-offset-2 hover:underline-offset-4 ease-in duration-200 hover:opacity-70"
          >
            {prevPage}
          </Link>{" "}
          - <span>{currPage}</span>
        </p>
      </div>
    </section>
  );
};

export default PageHead;
