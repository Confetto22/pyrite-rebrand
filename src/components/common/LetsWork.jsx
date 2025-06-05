// import { Link } from "react-router-dom";
import Button from "./Button";
import SecHeading from "./SecHeading";

const LetsWork = () => {
  return (
<<<<<<< HEAD
    <section className="lets_work  h-[70vh] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-cover bg-center">
      <div className="cover relative w-full h-full text-white flex flex-col items-center text-center justify-center gap-8 p-5">
        <SecHeading
          title={"colaborating"}
          titleStyle={""}
          heading={"We love collaborating with other creatives"}
          headingStyle={"md:text-[3rem]   lg:text-[4rem]"}
          divStyle={
            "flex items-center items-center justify-center bg- text-center md:mx-auto md:w-[70%] "
          }
          newDivStyle={"md:justify-center  justify-center text-center "}
        />
        {/* <p className="font-bold text-[2.3rem] md:text-[3rem] max-w-[500px] text-center">
          We love collaborating with other creatives
        </p> */}
        <Button to={"#"} btStyle={"md:mx-auto uppercase"}>
          let&apos;s collaborate
        </Button>
=======
    <section className="lets_work  h-[70vh] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-center bg-cover">
      <div className="cover relative w-full h-full text-white flex flex-col items-center justify-center gap-8 p-5">
        <h3 className="text-[#E3F81F] uppercase tracking-wider text-[1.6rem]">
          let&apos;s work
        </h3>
        <p className="font-bold text-[2.3rem] md:text-[3rem] max-w-[500px] text-center">
          Whatever You&apos;re Into, Get Into Produce
        </p>
        <Button to={"#"}>contact us</Button>
>>>>>>> d0ea976a8e2ef758885e79d863d8f9da7b9b8ce7
      </div>
    </section>
  );
};

export default LetsWork;
