const RegisteredHousesBox = (imgsrc, boxText) => {
  return (
    <div className="bg-white shadow-lg shadow-slate-300 mt-10 tablet:mt-14 mb-1 w-full tablet:w-2/3 rounded-md flex flex-col m-auto">
      <img className="w-20 pt-8 mr-auto ml-auto" src={imgsrc}></img>
      {/* <h3 className="p-4 mr-auto ml-auto">{boxText}</h3> FUNKAR INTE, WHY???
      BILDEN FUNKAR INTE HELLER, WHY??! */}
      <p className="p-8 mr-auto ml-auto text-center">
        Oroa dig inte! Vi garanterar dig att det är 100% säkert att använda
        Kollektivas tjänster. Även om du söker ny bostad eller vill hyra ut.
      </p>
    </div>
  );
};

export default RegisteredHousesBox;
