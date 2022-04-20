export default function MyPagesHeadline({ headline }) {
  return (
    // <h2 className="absolute z-10 bg-white p-2 ml-16 mt-0 inline-block rounded-md text-5xl text-primary">
    //   {headline}
    // </h2>
    <div className="relative h-28 flex laptop:ml-0">
      <div className="mx-16 font-bold absolute rounded-lg bg-white text-2xl px-2.5 bottom-[-50%] text-center text-transparent tablet:text-4xl laptop:text-6xl tablet:pb-4 z-10">
        <h2>{headline}</h2>
      </div>
    </div>
  );
}
