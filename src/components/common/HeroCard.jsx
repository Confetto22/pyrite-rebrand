import { FaPlayCircle } from "react-icons/fa";

const HeroCard = () => {
  return (
    <section className="hero text-white flex flex-col items-start justify-center gap-3 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722246751/pyrite/newAsset_yadwup.jpg')] h-screen bg-no-repeat bg-cover">
      <div className="cover p-5  flex flex-col items-start justify-center pt-24">
        <h3 className="text-[var(--primary-color)] uppercase md:flex-row flex-col w-full flex items-start md:items-center gap-4 font-bold text-[1.3rem] md:max-w-[600px] md:text-[1.1rem] md:w-full">
          <hr className="bg-[var(--primary-color)] border-none h-[1px] w-[13%]" />{" "}
          One scene at a time - pyrite classics.
        </h3>
        <h1 className="text-[2.4rem] capitalize font-bold md: max-w-[600px] md:text-[3.5rem] md:leading-[3.6rem] lg:leading-[4.6rem] lg:text-[4.4rem] lg:max-w-[760px]">
          Behind Every Great Film is a Visionary.
        </h1>
        <p className="text-[1.2rem] font-semibold md: max-w-[600px] md:text-[]">
          Crafting unforgettable stories bringing their creative vision to life
          on the big screen - the movie maker director
        </p>
        <div className="flex items-center justify-start w-full gap-6 mt-3 md: max-w-[600px] md:text-[]">
          <button className="bg-[var(--primary-color)] rounded-sm px-5 py-2 uppercase font-semibold hover:-translate-y-2 ease-in duration-200">
            get started
          </button>
          <button className="flex items-center gap-2 hover:text-[var(--primary-color)] hover:-translate-y-2 ease-in duration-200 px-5 py-2">
            view our works <FaPlayCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
