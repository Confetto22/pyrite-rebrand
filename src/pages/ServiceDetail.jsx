import { useParams } from "react-router-dom";
import { services } from "../components/common/allServices";
import PageHead from "../components/common/PageHead";
import { GiCheckMark } from "react-icons/gi";

const formInputs = [
  {
    title: "name",
    placeholder: "your name",
    type: "text",
  },
  {
    title: "email",
    placeholder: "your Email",
    type: "email",
  },
  {
    title: "phone",
    placeholder: "phone no.",
    type: "number",
  },
];

const ServiceDetail = () => {
  //   const { name } = useParams();

  //   const correctUrl = services.map((service) => {
  //     return service.name.replaceAll(" ", "-").toLowerCase();
  //   });

  //   if (!correctUrl.includes(name.service ?? "")) {
  //     throw new Response("Not Found", { status: 404 });
  //   }
  //   const singleService = services.filter(
  //     (oneService) => oneService.name.toLocaleLowerCase() === name
  //   );

  const { service } = useParams();

  // Normalize for comparison
  const filterServices = services.filter(
    (singleService) =>
      singleService.name.replaceAll(" ", "-").toLowerCase() ===
      service.replaceAll(" ", "-").toLowerCase()
  );

  return (
    <section className="service-detail">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        // currProject={'name'}
        currPage={filterServices[0].name}
        prevPage={"Services"}
        prevLink={"/services"}
        // currProject={filterServices[0].name}
        intro={filterServices[0].intro}
      />
      <section className="service_detail px-7 py-24 flex flex-col gap-12 md:flex-row md:items-start">
        <div className="service_text md:w-[55%] flex flex-col gap-12">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1749124929/pyrite/director-service-bg-updated_u3qkxb.jpg"
            alt="pyrite classics"
            className="aspect-[14/8] object-cover object-center"
          />
          <div className="flex flex-col gap-9">
            <h2 className="">{filterServices[0].name}</h2>
            <p>{filterServices[0].desc}</p>
            <div className="service_illus grid grid-cols-2 gap-4">
              {filterServices[0].more.pics.map((pic) => (
                <img src={pic} alt="pyrite classics" className="" key={pic} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="">why choose us for this service?</h2>
            <p>{filterServices[0].more.whyChoose}</p>
            {filterServices[0].listItems && (
              <ul className="flex flex-col items-start gap-4 mt-8">
                {filterServices[0].listItems.map((list) => (
                  <li key={list} className="flex items-start font-[600] gap-1">
                    <span>
                      <GiCheckMark className="text-[var(--primary-color)]" />
                    </span>
                    {list}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <aside className="service_card md:w-[40%] md:sticky md:top-[10px] max-w-[500px] rounded-md bg-[#fcfcff] px-6 py-8 flex flex-col justify-center min-h-[60vh] shadow-2xl  ease-in duration-300 hover:translate-y-[15px] border-2 border-[#b5b5b5] border-transparent hover:border-[var(--primary-color)]">
          <h2 className="mb-5">Get In Touch</h2>
          <form className="get-in-touch  flex flex-col gap-3">
            {formInputs.map((formInput) => (
              <input
                type={formInput.type}
                key={formInput.title}
                placeholder={formInput.placeholder}
                required
                className="px-3 py-3 rounded-md border border-[#8888884e] min-h-[2.4rem] capitalize bg-white text-[#242424] placeholder:text-[#6c6c6c] focus:outline-none focus:border-[var(--primary-color)] ease-in duration-300"
              />
            ))}
            <textarea
              name=""
              className="px-3 py-3 rounded-md border border-[#8888884e] min-h-[12rem] capitalize bg-white text-[#242424] placeholder:text-[#6c6c6c] focus:outline-none"
              placeholder="message"
              required
            ></textarea>
            <button
              type="submit "
              className="bg-[var(--primary-color)] px-3 py-3 uppercase text-white font-[700] text-[1.1rem] rounded-sm border border-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] ease-in duration-300"
            >
              submit
            </button>
          </form>
        </aside>
      </section>
    </section>
  );
};

export default ServiceDetail;
