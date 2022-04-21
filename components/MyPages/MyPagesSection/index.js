import MyPagesButton from "../MyPagesButton";

export default function MyPagesSection({
  picture,
  heading,
  text,
  buttonsText,
  link,
}) {
  return (
    <div className="flex flex-col mr-auto ml-auto tablet:flex-row justify-between w-full bg-primary mt-4 mb-4">
      <div className="flex flex-col justify-center m-auto pb-10 pt-10">
        <h3 className=" text-2xl tablet:text-4xl font-Poppins pt-4 pb-4 pl-10 pr-10 tablet:p-2 text-white w-96">
          {heading}
        </h3>
        <p className="text-white font-Inter pl-10 pr-10 tablet:p-2 mb-6">
          {text}
        </p>
        <MyPagesButton text={buttonsText} link={link} />
      </div>
      <img className="tablet:w-1/2 laptop:w-3/5" src={picture}></img>
    </div>
  );
}
