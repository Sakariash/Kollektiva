export default function FrontPageImg() {
  return (
    <div className="h-screen desktop:h-auto w-full relative z-0 tablet:mt-40">
      <div className=" invisible desktop:visible desktop:w-2/6 h-full desktop:place-content-left desktop:left-0 bg-transparent z-40 opacity-60 absolute"></div>
      <div className="invisible desktop:visible w-full desktop:w-2/6 h-full left-0 bg-black z-40 opacity-30 absolute"></div>
      {/* <div className="invisible desktop:visible w-full desktop:w-2/6 h-full left-0 absolute"></div> */}
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="assets/images/unsplash_V2edkaIdMP4.png"
        />
        <img
          className="object-cover object-b min-h-full w-full z-0"
          src="assets/images/OldManComputerWizard.png"
          alt="Old man playing sims on his computer"
        />
      </picture>
    </div>
  );
}
