// import { Link } from "react-router-dom";
import Button from "./Button";
import SecHeading from "./SecHeading";

const LetsWork = () => {
  return (
    <section className="lets_work  h-[70vh] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738977282/pyrite/film-industry-4GJLQAD_z3laxr.jpg')] bg-cover bg-center">
      <div className="bg-[#000000cd] relative w-full h-full text-white flex flex-col items-center text-center justify-center gap-8 p-5">
        <SecHeading
          title={"colaborating"}
          titleStyle={""}
          heading={"We love collaborating with other creatives"}
          headingStyle={"md:text-[2.5rem]   lg:text-[3.5rem]"}
          divStyle={
            "flex items-center items-center justify-center bg- text-center md:mx-auto md:w-[70%] "
          }
          newDivStyle={"md:justify-center  justify-center text-center "}
        />
        <Button
          refLink={"/contact"}
          btStyle={"md:mx-auto uppercase bg-[var(--primary-color)]"}
        >
          let&apos;s collaborate
        </Button>
      </div>
    </section>
  );
};

export default LetsWork;
