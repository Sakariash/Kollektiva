import HeroContent from "../HeroContent";

const HeroImage = () => {
  return (
    <div className="h-screen desktop:h-auto w-full relative z-0 ">
      <div className=" w-full desktop:w-[45%] h-full desktop:place-content-right desktop:right-0 bg-transparent z-40 opacity-80 absolute mix-blend-multiply"></div>

      <div className="desktop:right-[15%] desktop:w-4/6 h-full absolute z-50">
        <HeroContent />
      </div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="assets/images/unsplash_NpTbVOkkom8.png"
        />
        <img
          className="object-cover object-b min-h-full w-full z-0"
          srcSet="assets/images/IndexHeroHouse.png"
          alt="A model house in white and red"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
