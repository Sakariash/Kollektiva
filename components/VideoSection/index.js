import Video from "../VideoComponent";

export default function VideoSection() {
  return (
    <div className="h-full justify-center flex ">
      <div className=" desktop:bg-transparent desktop:relative desktop:h-32 desktop:w-full desktop:mb-[700px]">
        <Video />
      </div>
    </div>
  );
}
