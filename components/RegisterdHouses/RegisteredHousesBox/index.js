const RegisteredHousesBox = ({ imgsrc, boxText }) => {
  return (
    <div className="bg-white shadow-lg shadow-slate-300 mt-10 tablet:mt-14 mb-1 w-full tablet:w-2/3 rounded-md flex flex-col m-auto">
      <img className="w-20 pt-8 mr-auto ml-auto" src={imgsrc}></img>
      <p className="p-8 mr-auto ml-auto text-center">{boxText}</p>
    </div>
  );
};

export default RegisteredHousesBox;
