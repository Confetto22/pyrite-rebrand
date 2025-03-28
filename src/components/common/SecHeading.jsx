const SecHeading = ({
  title,
  heading,
  titleStyle,
  headingStyle,
  divStyle,
  newDivStyle,
}) => {
  return (
    <div className={`flex flex-col gap-4 ${divStyle}`}>
      <div
        className={`flex items-center w-full  gap-4 font-bold uppercase ${newDivStyle}`}
      >
        <hr className="bg-[var(--primary-color)] border-none h-[1px] w-full max-w-[50px]" />
        <h3 className={`text-[var(--primary-color)] ${titleStyle}`}>{title}</h3>
      </div>
      <h1
        className={`text-[2rem] font-bold md:leading-[4rem] leading-10 text-white capitalize ${headingStyle}`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default SecHeading;
