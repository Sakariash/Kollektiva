import RegisterdHousesFAQ from "./RegisterdHousesFAQ";
import RegisterdHousesHeading from "./RegisterdHousesHeading";

const RegisterdHouses = () => {
  return (
    <div className="bg-primary">
      <RegisterdHousesHeading
        img1={"assets/images/RegisteredHouses/Vector.png"}
        img2={"assets/images/RegisteredHouses/Vector.png"}
        img3={"assets/images/RegisteredHouses/Vector.png"}
      />
      <RegisterdHousesFAQ />
    </div>
  );
};

export default RegisterdHouses;
