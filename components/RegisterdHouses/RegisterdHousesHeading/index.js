import MyPagesButton from "../../MyPages/MyPagesButton";
import RegisteredHousesBox from "../RegisteredHousesBox";

const RegisterdHousesHeading = () => {
  return (
    <div className="bg-white pb-14">
      <div className="p-8 tablet:p-20 h-128 bg-cover bg-hero-registered-mobile laptop:bg-hero-registered">
        <div className="flex flex-col mt-60 tablet:mt-20 laptop:flex-row">
          <div clasName="w-1/2">
            <h1 className="text-3xl mr-8 font-Poppins tablet:text-5xl laptop:text-6xl mb-6 text-white">
              Det är tryggt att hyra ut ditt boende med Kollektiva
            </h1>
          </div>
          <div className="flex flex-col w-28 laptop:w-1/2 tablet:justify-end pb-4">
            <MyPagesButton text={"Registrera din bostad"} link={"/advertise"} />
          </div>
        </div>
        <div className="bg-primary">
          <div className="hidden laptop:flex tablet:absolute  tablet:flex-row tablet:space-x-8">
            <RegisteredHousesBox
              imgsrc="assets/images/RegisteredHouses/Vector.png"
              boxText={
                "Oroa dig inte! Vi garanterar dig att det är 100% säkert att använda Kollektivas tjänster. Även om du söker ny bostad eller vill hyra ut."
              }
            />
            <RegisteredHousesBox
              imgsrc="assets/images/RegisteredHouses/Vector2.png"
              boxText={
                "Vi tar hand om krångelt! Kollektiva ansvarar för X, Y och Z. Vi vill att du som söker eller hyr ut din bostad ska kunna göra så smärttfritt som möjligt."
              }
            />
            <RegisteredHousesBox
              imgsrc="assets/images/RegisteredHouses/Vector3.png"
              boxText={
                "Vi tar 10% i provision för att agera mellanhand. Du som hyresvärd kan fortsätta amortera som vanligt när du hyr ut."
              }
            />
          </div>
        </div>
      </div>
      <div className="laptop:hidden bg-primary pb-8">
        <div className=" laptop:hidden flex flex-col tablet:flex-row space-y-4 tablet:space-y-0 tablet:space-x-4">
          <RegisteredHousesBox
            imgsrc="assets/images/RegisteredHouses/Vector.png"
            boxText={
              "Oroa dig inte! Vi garanterar dig att det är 100% säkert att använda Kollektivas tjänster. Även om du söker ny bostad eller vill hyra ut."
            }
          />
          <RegisteredHousesBox
            imgsrc="assets/images/RegisteredHouses/Vector2.png"
            boxText={
              "Vi tar hand om krångelt! Kollektiva ansvarar för X, Y och Z. Vi vill att du som söker eller hyr ut din bostad ska kunna göra så smärttfritt som möjligt."
            }
          />
          <RegisteredHousesBox
            imgsrc="assets/images/RegisteredHouses/Vector3.png"
            boxText={
              "Vi tar 10% i provision för att agera mellanhand. Du som hyresvärd kan fortsätta amortera som vanligt när du hyr ut."
            }
          />
        </div>
      </div>
      <h2 className="ml-16 font-Poppins mr-16 laptop:mt-36 tablet:ml-24 pt-14 text-3xl tablet:text-5xl text-primary">
        Dina registrerade bostäder
      </h2>
      <div className="bg-white mt-10 mb-1 w-2/3 rounded-md border-orange-500 border-2 m-auto flex flex-row">
        <img
          className="ml-4 w-4 h-4 mt-auto mb-auto"
          src="assets/images/attention.png"
        ></img>
        <h3 className="p-4 font-Inter text-orange-500">
          Du har inga registrerade bostäder för tillfället. Registera din bostad
          så kan du se den här sen.
        </h3>
      </div>
    </div>
  );
};

export default RegisterdHousesHeading;
