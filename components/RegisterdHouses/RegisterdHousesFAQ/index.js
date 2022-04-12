import RegisterdHousesQuestions from "../RegisterdHousesQuestions";

const RegisterdHousesFAQ = () => {
  return (
    <div className="bg-primary">
      <h2 className="ml-24 pt-14 text-5xl text-white">
        Vanliga frågor kring att hyra ut sin bostad
      </h2>
      <div className="w-full flex flex-col mt-12">
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <div className="bg-btnPrimary mt-6 mb-2 w-2/4 rounded-md flex justify-between m-auto">
          <h4 className="p-4">
            Har du ytterligare frågor som du behöver svar på? Ta kontakt med oss
            så hjälper vi dig!{" "}
          </h4>
          <button className="m-4 bg-slate-100 rounded-md w-1/2">
            Kontakta oss
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterdHousesFAQ;
