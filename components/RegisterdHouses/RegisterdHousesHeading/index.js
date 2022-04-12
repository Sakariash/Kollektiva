const RegisterdHousesHeading = () => {
  return (
    <div className="bg-white pb-14">
      <img className="z-0 flex" src="assets/images/Rectangle37.png"></img>
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
