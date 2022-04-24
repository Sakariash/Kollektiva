export default function Video() {
  return (
    <div className="desktop:absolute">
      <div className="flex justify-center items-center flex-col mt-10 relative desktop:mx-32">
        <div className="bg-transparent w-full rounded-t-lg h-20 relative desktop:hidden ">
          <div className="text-3xl w-3/5  max-w-sm text-transparent font-bold flex text-center desktop:invisible bg-white absolute rounded-lg top-[-50%] pl-4 p-2">
            <h3>Hur hyr du ut din bostad?</h3>
          </div>
        </div>
        <img
          className=""
          srcSet="/assets/images/unsplash_oFMI6CdD7yU.png"
        ></img>
        <div className="invisible text-6xl leading-relaxed text-transparent text-center font-bold max-w-3xl desktop:visible bg-white absolute rounded-lg px-4 top-[-10%]">
          <h3>Hur hyr du ut din bostad?</h3>
        </div>
        <picture className="z-10 absolute">
          <source media="(min-width: 1024px)" srcset="assets/images/Play.png" />
          <img className="" srcSet="assets/images/smallPlay.png" alt="" />
        </picture>
      </div>
    </div>
  );
}
