// import { Link } from "react-router-dom";
import Button from "./Button";

const LetsWork = () => {
  return (
    <section className="lets_work  h-[70vh] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-center bg-cover">
      <div className="cover relative w-full h-full text-white flex flex-col items-center justify-center gap-8 p-5">
        <h3 className="text-[#E3F81F] uppercase tracking-wider text-[1.6rem]">
          let&apos;s work
        </h3>
        <p className="font-bold text-[2.3rem] md:text-[3rem] max-w-[500px] text-center">
          Whatever You&apos;re Into, Get Into Produce
        </p>
        <Button to={"#"}>contact us</Button>
      </div>
    </section>
  );
};

export default LetsWork;
