import PageHead from "../components/common/PageHead";
import { FaRegEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { GoMegaphone } from "react-icons/go";
import SecHeading from "../components/common/SecHeading";
import Marquee from "../components/common/marquee/Marquee";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Faq from "../components/common/Faq";
import Story from "../components/Story";

const trustedBrands = [
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721679436/pyrite/bloombergLogo_yytgmn.svg",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/amalogo_n7sav9.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/vitalstrategieslogo_i6znja.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084980/pyrite/policeservicelogo_wdst6t.png",
    styling: "max-w-[300px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721086062/pyrite/globalroadsafetylogo_yfyrji.png",
    styling: "max-w-[110px]",
  },
  {
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1721084981/pyrite/roadsafetylogo_z4uqge.png",
    styling: "max-w-[110px]",
  },
];

const visions = [
  {
    title: "Our Vision",
    text: "Transforming dreams into cinematic masterpieces, inspiring the world with every frame.",
    icon: <FaRegEye />,
  },
  {
    title: "Our Mission",
    text: "Empowering stories, captivating audiences. We bring visions to life through the magic of film.",
    icon: <TbTargetArrow />,
  },
  {
    title: "Our Motto",
    text: "Creating Ideas That Are Difficult To Ignore, Hard To Forget, and Very Highly Effective.",
    icon: <GoMegaphone />,
  },
];

const About = () => {
  return (
    <section className="">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        // currProject={'name'}
        currPage={"About"}
        prevPage={"Home"}
        prevLink={"/"}
      />
      <section className=" md:mx-auto aboutIntro px-8 py-24  flex flex-col md:flex-row md:items-center md:justify-between gap-[3rem] pb-40">
        <div className="md:w-[45%] introtext flex flex-col items-start gap-7">
          <SecHeading
            title={"about us"}
            titleStyle={""}
            heading={"welcome to pyrite classics"}
            headingStyle={"md:text-[3rem] text-black max-w-[500px]  "}
            divStyle={" items-start "}
            newDivStyle={"justify-start "}
          />
          <p className="text-[1.1rem]">
            We&apos;re a team of passionate filmmakers, writers, and creatives
            united by a shared love of storytelling and a commitment to
            excellence. Our journey began with a simple yet powerful idea: to
            bring people together through the art of cinema. Our mission is to
            craft compelling stories that captivate, inspire, and transform
            audiences. We believe that film has the power to transport us to new
            worlds, challenge our perspectives, and connect us with others in
            meaningful ways. Our team is comprised of experienced professionals
            with a deep understanding of the film industry. From writers and
            directors to producers and editors, each member brings their unique
            expertise and passion to every project. We&apos;re a collaborative
            team that thrives on creativity, innovation, and mutual respect.
          </p>
          {/* <Link
            to={"#"}
            className="bg-[var(--primary-color)] text-[var(--secondary-color)] px-7 py-3"
          >
            {" "}
            Read More{" "}
          </Link> */}
        </div>

        <div className="2pics-illus md:bottom-[70px] relative min-h-[70vh] w-full md:w-[50%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722247673/pyrite/IMG_0235_cnjfdq.webp"
            alt="pyrite classics"
            className=" rounded-xl w-[70%] absolute top-0 left-0  h-[80%] object-cover z-[4] shadow-2xl"
          />
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1720833104/pyrite/pyritePic4_nym5nn.jpg"
            alt="pyrite classics"
            className=" rounded-xl w-[70%] bottom-[-10%] absolute h-[80%] right-0 object-cover shadow-2xl"
          />
        </div>
      </section>
      <section className="latestVid  bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719609864/pyrite/raer-view-of-young-videographer-in-black-casualwear-giving-advice-to-models-min_beinbx.webp')] bg-center bg-cover">
        <div className="latestVid-cover min-h-[70vh] bg-[#000000a6] text-white p-7 flex flex-col gap-8 items-center justify-center">
          <Link
            to={"#"}
            className="bg-[var(--primary-color)] p-6 md:p-10 text-[1.8rem] rounded-full flex items-center justify-center ease-in duration-300 hover:text-[var(--primary-color)] hover:bg-white cursor-pointer"
          >
            <CiPlay1 className="" />
          </Link>
          <p className="capitalize text-[1.5rem] md:text-[2.2rem] font-[700]">
            watch our latest video
          </p>
        </div>
      </section>
      <div className="ourValue bg- px-8 pt-24 flex flex-col gap-[3rem] ">
        <div className="flex flex-col md:gap-[4rem] md:flex-row-reverse items-start md:items-stretch  gap-8">
          <div className="text flex flex-col justify-center  h-full gap-6">
            <SecHeading
              title={"our value"}
              titleStyle={" w-full text-left"}
              heading={
                "We make videos using the latest equipment supported by experts in the editing field"
              }
              headingStyle={
                "md:text-[2.2rem] text-black max-w-[500px] md:leading-[2.6rem]"
              }
              divStyle={" items-start text-left"}
              newDivStyle={"justify-center "}
            />
            <p className="text-[1.1rem]">
              Lights, camera, values! We live and breathe storytelling magic,
              infuse creativity into every scene, and pledge an unwavering
              dedication to cinematic excellence. Crafting films that linger in
              hearts long after the screen fades to black! At Pyrite Classics,
              we believe that exceptional storytelling has the power to
              captivate, inspire, and transform audiences. Our team is dedicated
              to delivering high-quality movie productions that exceed our
              clients&apos; expectations. Here&apos;s what sets us apart.
              We&apos;re passionate about storytelling and dedicated to bringing
              your vision to life. Our team of experienced professionals is
              driven by a shared love of cinema and a commitment to excellence.
            </p>
            <p>
              With years of experience in the film industry, our team has
              developed a deep understanding of what makes a great story.
              We&apos;ll work with you to develop a compelling narrative,
              memorable characters, and a visually stunning cinematic
              experience. We believe in collaboration, not just between our team
              members, but also with our clients. We&apos;ll work closely with
              you to understand your vision, goals, and objectives, ensuring
              that our final product meets your expectations.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719883208/pyrite/project_11_xaw9z8.jpg"
            alt="pyrite classics"
            className="w-full aspect-video object-cover rounded-xl"
          />
        </div>

        <div className="allVisions  py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visions.map((vision) => (
            <div
              key={vision.title}
              className="vision border border-transparent ease-in duration-300 hover:border-[var(--primary-color)]  p-8 py-3 max-w-[600px]  shadow-xl flex flex-col items-center justify-center text-center gap-3 mx-auto rounded-xl"
            >
              <span className="icon bg-[var(--primary-color)] text-[1.7rem] p-4 rounded-full text-white">
                {vision.icon}
              </span>
              <h2 className="text-[1.7rem] font-[700]">{vision.title}</h2>
              <p className="text-[1.1rem] font-[400]">{vision.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Story />

      <section className="trusted my-24 bg-[#0000006b]  bg-cover bg-center   min-h-[50vh] py-7 flex flex-col items-center justify-evenly">
        <h2 className="text-center capitalize px-5 text-[white] text-[2rem] font-semibold">
          Trusted by many clients
        </h2>
        <Marquee marqueestyle={""}>
          {trustedBrands.map((brand) => (
            <img
              src={brand.img}
              className={` ${brand.styling}`}
              alt="trusted brand"
              key={brand.img}
            />
          ))}
        </Marquee>
      </section>
      <Faq />
    </section>
  );
};

export default About;
