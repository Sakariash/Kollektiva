import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="flex justify-between px-8">
      <HeroImage />
      <HeroContent />
    </div>
  );
};

export default Hero;
