import RegisterdHousesQuestions from "../RegisterdHousesQuestions";

const RegisterdHousesFAQ = () => {
  return (
    <div className="bg-primary">
      <h2 className="ml-14 mr-14 font-Poppins tablet:mr-0 tablet:ml-24 pt-14 text-3xl tablet:text-4xl laptop:text-5xl text-white">
        Vanliga frågor kring att hyra ut sin bostad
      </h2>
      <div className="w-full flex flex-col mt-12">
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <RegisterdHousesQuestions />
        <div className="bg-btnPrimary font-Inter mt-6 mb-2 w-2/3 rounded-md flex flex-col tablet:flex-row laptop:w-1/2 justify-between m-auto">
          <h4 className="p-6">
            Har du ytterligare frågor som du behöver svar på? Ta kontakt med oss
            så hjälper vi dig!{" "}
          </h4>
          <button className="m-4 bg-white text-primary font-Poppins rounded-md w-3/4 tablet:w-1/2">
            Kontakta oss
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterdHousesFAQ;
