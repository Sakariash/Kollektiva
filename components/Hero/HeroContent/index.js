import HeroButton from "../HeroButton";
import HeroHeading from "../HeroHeading";
import HeroParagraph from "../HeroParagraph";

const HeroContent = () => {
  return (
    <div className="flex justify-between flex-col h-full place-items-center desktop:place-items-end">
      <div className="w-11/12 desktop:w-[600px] font-bold text-4xl pt-16 tablet:w-2/3 tablet:pt-14 tablet:text-6xl ">
        <HeroHeading
          className=""
          headline="Kollektiva hjälper dig att bo efter ditt behov"
        />
      </div>
      <div className=" py-6 w-11/12 flex place-items-center flex-col tablet:w-2/3 tablet:py-12 tablet:text-xl tablet:pb-20 desktop:w-96  desktop:left-24 desktop:top-44">
        <article className="text-white text-lg">
          <HeroParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque commodo aenean sed egestas quisque ipsum netus." />
        </article>
        <HeroButton backgrounds="#FFFFFF" text="Hitta boende" />
        <HeroButton
          backgrounds="#FFBA36"
          text="Annonsera boende"
          link={"/advertise"}
        />
      </div>
    </div>
  );
};

export default HeroContent;
