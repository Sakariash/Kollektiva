import HeroImages from "../../../public/assets/images/harry-potter.jpeg";

const HeroImage = () => {
  return (
    <div className="w-1/3 h-96 bg-green-400">
      <img className="min-h-full w-full" src={HeroImages}></img>
    </div>
  );
};

export default HeroImage;
