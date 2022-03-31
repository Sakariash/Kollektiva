import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* <div className="flex justify-between px-8"> DESKTOP */}
      <HeroContent />
      <HeroImage />
    </div>
  );
};

export default Hero;
