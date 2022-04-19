export default function InfoComponent({ text }) {
  return (
    <div className="mb-52 bg-white pb-4 max-w-sm rounded-md drop-shadow-lg tablet:mb-0 tablet:z-20 flex flex-col">
      <div className="bg-red-400 w-4 h-4 ml-48"></div>
      <div className="Text px-8">{text}</div>
    </div>
  );
}
