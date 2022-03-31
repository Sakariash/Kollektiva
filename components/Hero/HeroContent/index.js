import HeroButton from "../HeroButton";
import HeroHeading from "../HeroHeading";
import HeroParagraph from "../HeroParagraph";

const HeroContent = () => {
  return (
    <article className="w-1/2 h-96 bg-green-400">
      <HeroHeading
        className=""
        headline="Kollektiva hjälper dig att bo efter ditt behov"
      />
      <HeroParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <HeroButton text="HYR UT DITT BOENDE" />
      <HeroButton text="HYR ETT BOENDE" />
    </article>
  );
};

export default HeroContent;
