import Link from "next/link";
import MyPagesButton from "../MyPages/MyPagesButton";
Link;

const FinishedRegistration = () => {
  return (
    <div className="flex flex-col justify-center content-center bg-primary pb-20">
      <div className="bg-white pt-10 pb-10 tablet:pt-20 tablet:pb-20 mt-10 tablet:mt-20 w-4/5 tablet:w-2/3 m-auto rounded-md flex flex-col justify-center content-center">
        <img
          src="/assets/images/FinishedRegistrations/check.png"
          className="w-28 tablet:w-40 ml-auto mr-auto"
        ></img>
        <h1 className=" text-xl tablet:text-5xl font-Poppins m-4 ml-auto mr-auto text-accent text-center w-3/4 tablet:w-2/3">
          Tack! Vi har tagit emot din information.
        </h1>
        <p className="text-center font-Inter m-4 ml-auto mr-auto w-3/4 tablet:w-2/3">
          Vi har mottagit ditt ifyllda bostadsformulär och jobbar just nu med
          ärendet. Efter annonsen har granskats kommer den inom kort kunna ses
          av våra bostadssökande användare. Du hittar ditt ärende under “Mina
          sidor”.
        </p>
        <h2 className="text-xl m-4 font-Inter ml-auto mr-auto text-center w-3/4 tablet:w-2/3">
          Du hittar ditt pågående ärende under “Mina sidor”
        </h2>
        <button
          className="bg-btnPrimary font-Poppins p-4 m-2 w-3/4 tablet:w-96 rounded-md mr-auto ml-auto"
          href="/mypages"
        >
          <a href="mypages"> Ta mig till mina sidor</a>
        </button>
      </div>
    </div>
  );
};

export default FinishedRegistration;
