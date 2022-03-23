import HeroButton from "../HeroButton";
import HeroHeading from "../HeroHeading";
import HeroParagraph from "../HeroParagraph";

const HeroContent = () => {
  return (
    <article className="w-1/3 h-96 bg-green-400">
      <HeroHeading
        className=""
        headline="Det är tryggt att hyra ut ditt boende med Kollektiva"
      />
      <HeroParagraph text="hejhejehej" />
      <HeroButton text="HYR UT DITT BOENDE" />
    </article>
  );
};

export default HeroContent;
