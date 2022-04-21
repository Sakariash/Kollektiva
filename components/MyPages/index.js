import Link from "next/link";
import MyPagesButton from "./MyPagesButton";
import MyPagesSection from "./MyPagesSection";
import MyPagesHeadline from "./MyPagesHeadline";
Link;

const MyPages = () => {
  return (
    <div className="bg-secondary">
      <div className="flex h-128 flex-col laptop:flex-row p-10 tablet:p-20 bg-hero-image">
        <div clasName="w-full laptop:w-1/2">
          <h1 className="text-3xl tablet:text-5xl laptop:text-6xl font-Poppins mb-6 text-white">
            Välkommen till mina sidor
          </h1>
          <p className="text-white font-Inter pb-10 tablet:mr-10 laptop:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus,
            mollis senectus dui, vitae eu fames neque. Leo massa nisl ornare
            accumsan, imperdiet elementum, lectus.
          </p>
        </div>
        <div className="flex flex-col w-full laptop:w-1/2">
          <MyPagesButton text={"Ändra dina personuppgifter"} />
          <MyPagesButton text={"Mina kontrakt"} />
          <MyPagesButton text={"Mina pågående ärenden"} />
        </div>
      </div>

      <MyPagesHeadline headline={"För dig som hyr ut en bostad"} />

      <MyPagesSection
        picture={"assets/images/MyPages/Mypages1.png"}
        heading={"Dina registrerade bostäder"}
        text={"Här kan du se de boenden som du har erbjudit dig att hyra ut."}
        buttonsText={"Se dina registrerade bostäder"}
        link={"/registeredhouses"}
      />
      <MyPagesSection
        picture={"assets/images/MyPages/Mypages2.png"}
        heading={"Dina kontrakt"}
        text={"Här kan du se de hyreskontrakt som skrivits"}
        buttonsText={"Se dina kontrakt"}
      />

      <MyPagesHeadline headline={"För dig som hyr eller vill hyra en bostad"} />
      <MyPagesSection
        picture={"assets/images/MyPages/Mypages3.png"}
        heading={"Dina sparade bostäder"}
        text={"Här kan du se de tillgängliga boenden som du har sparat."}
        buttonsText={"Se dina sparade bostäder"}
      />
      <MyPagesSection
        picture={"assets/images/MyPages/Mypages4.png"}
        heading={"Dina intresse-anmälningar"}
        text={"Här kan du se de boenden som du ansökt om att få hyra."}
        buttonsText={"Se dina intresseanmälningar"}
      />
      <MyPagesSection
        picture={"assets/images/MyPages/Mypages5.png"}
        heading={"Sök boende"}
        text={"Sök efter tillgängliga boenden på vår söksida."}
        buttonsText={"Sök boende"}
      />
      <MyPagesSection
        picture={"assets/images/MyPages/Mypages2.png"}
        heading={"Dina kontraktrakt"}
        text={"Här kan du se de hyreskontrakt som skrivits."}
        buttonsText={"Se dina kontrakt"}
      />
    </div>
  );
};

export default MyPages;
