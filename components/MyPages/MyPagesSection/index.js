import MyPagesButton from "../MyPagesButton";

export default function MyPagesSection({
  picture,
  heading,
  text,
  buttonsText,
}) {
  return (
    <div className="flex flex-row justify-between w-full bg-primary mt-4 mb-4">
      <div className="flex flex-col justify-center m-auto">
        <h3 className="text-5xl p-2 text-white w-96">{heading}</h3>
        <p className="text-white p-2 mb-6">{text}</p>
        <MyPagesButton text={buttonsText} />
      </div>
      <img className="w-3/5" src={picture}></img>
    </div>
  );
}
