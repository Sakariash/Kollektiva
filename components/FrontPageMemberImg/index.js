import HeroButton from "../Hero/HeroButton";
import HeroHeading from "../Hero/HeroHeading";

export default function FrontPageImg() {
  return (
    <div className="maw-w-content desktop:h-auto w-full relative z-0 tablet:mt-40">
      <div className=" invisible desktop:visible desktop:w-2/6 h-full desktop:place-content-left desktop:left-0 bg-transparent z-40 opacity-80 absolute mix-blend-multiply"></div>
      <div className="desktop:w-2/6 h-full absolute z-50">
        <div className="font-bold text-4xl tablet:text-6xl tablet:pl-56 tablet:pt-40">
          <HeroHeading className="" headline="Det är enkelt att bli medlem!" />
        </div>
        <div className="absolute">
          <HeroButton
            backgrounds="#FFBA36"
            text="Annonsera boende"
            link={"/advertise"}
          />
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="assets/images/unsplash_V2edkaIdMP4.png"
        />
        <img
          className="object-cover object-b max-h-full w-full z-0"
          srcSet="assets/images/OldManComputerWizard.png"
          alt="Old man playing sims on his computer"
        />
      </picture>
    </div>
  );
}
