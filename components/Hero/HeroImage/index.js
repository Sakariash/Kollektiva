import HeroContent from "../HeroContent";

const HeroImage = () => {
  return (
    <div className="h-screen desktop:h-auto w-full relative z-0 ">
      <div className=" w-full desktop:w-3/6 h-full desktop:place-content-right desktop:right-0 bg-transparent z-40 opacity-80 absolute mix-blend-multiply"></div>

      <div className=" w-full desktop:w-3/6 h-full place-content-right right-0  absolute">
        <HeroContent />
      </div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="assets/images/unsplash_NpTbVOkkom8.png"
        />
        <img
          className="object-cover object-b min-h-full w-full z-0"
          src="assets/images/IndexHeroHouse.png"
          alt="A model house in white and red"
        />
      </picture>
    </div>
  );
};

export default HeroImage;

{
  /* <div className=" w-full desktop:w-3/6 h-full place-content-right right-0 bg-black z-40 opacity-50 absolute"></div> */
}

{
  /* <img
        className="invisible tablet:object-fill tablet:object-b tablet:min-h-full tablet:w-full tablet:z-0 tablet:visible"
        src="assets/images/unsplash_NpTbVOkkom8.png"
      ></img>
      <img
        className="object-fill object-b min-h-full w-full z-0 tablet:invisible"
        src="assets/images/IndexHeroHouse.png"
      ></img> */
}
