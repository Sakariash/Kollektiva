import Link from "next/link";
import MyPagesButton from "../MyPages/MyPagesButton";
Link;

const FinishedRegistration = () => {
  return (
    <div className="flex flex-col justify-center content-center bg-primary">
      <div className="bg-white pt-20 pb-20 mt-20 w-2/3 m-auto rounded-md flex flex-col justify-center content-center">
        <img
          src="/assets/images/FinishedRegistrations/check.png"
          className="w-40 ml-auto mr-auto"
        ></img>
        <h1 className="text-6xl m-4 ml-auto mr-auto text-accent text-center w-2/3">
          Tack! Vi har tagit emot din information.
        </h1>
        <p className="text-center m-4 ml-auto mr-auto w-2/3">
          Vi har mottagit ditt ifyllda bostadsformulär och jobbar just nu med
          ärendet. Efter annonsen har granskats kommer den inom kort kunna ses
          av våra bostadssökande användare. Du hittar ditt ärende under “Mina
          sidor”.
        </p>
        <h2 className="text-xl m-4 ml-auto mr-auto text-center w-2/3">
          Du hittar ditt pågående ärende under “Mina sidor”
        </h2>
        <button
          className="bg-btnPrimary p-2 m-2 w-96 rounded-md mr-auto ml-auto"
          href="/mypages"
        >
          <a href="mypages"> Ta mig till mina sidor</a>
        </button>
      </div>
    </div>
  );
};

export default FinishedRegistration;
