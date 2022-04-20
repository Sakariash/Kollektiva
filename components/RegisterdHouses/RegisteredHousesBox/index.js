const RegisteredHousesBox = ({ imgsrc, boxText }) => {
  return (
    <div className="flex w-full justify-center tablet:justify-around tablet:mx-2">
      <div className="bg-white shadow-lg drop-shadow-md mt-10 tablet:mt-14 mb-1 rounded-lg flex flex-col max-w-sm tablet:max-w-ms">
        <img className="w-14 pt-7 mr-auto ml-auto" src={imgsrc}></img>
        <p className="p-8 font-Inter tablet:font-medium desktop:text-xl text-lg text-transparent leading-8 font-normal mr-auto ml-auto text-center">
          {boxText}
        </p>
      </div>
    </div>
  );
};

export default RegisteredHousesBox;
