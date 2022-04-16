import MyPagesButton from "../../MyPages/MyPagesButton";

const RegisterdHousesHeading = () => {
  return (
    <div className="bg-white pb-14">
      <div className="flex flex-row p-20 bg-hero-image">
        <div clasName="w-1/2">
          <h1 className="text-6xl mb-6 text-white">
            Det är tryggt att hyra ut ditt boende med Kollektiva
          </h1>
        </div>
        <div className="flex flex-col w-1/2 justify-end pb-4">
          <MyPagesButton
            text={"Registrera din bostad"}
            link={"/finishedregistration"}
          />
        </div>
      </div>
      <h2 className="ml-24 pt-14 text-5xl text-primary">
        Dina registrerade bostäder
      </h2>
      <div className="bg-white mt-10 mb-1 w-2/3 rounded-md border-orange-500 border-2 m-auto flex flex-row">
        <img className=" ml-4 w-4 h-4" src="assets/images/attention.png"></img>
        <h3 className="p-4 text-orange-500">
          Du har inga registrerade bostäder för tillfället. Registera din bostad
          så kan du se den här sen.
        </h3>
      </div>
    </div>
  );
};

export default RegisterdHousesHeading;
