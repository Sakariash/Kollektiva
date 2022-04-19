export default function Reviews() {
  return (
    <div className="pt-64 px-2.5 w-full bg-transparent flex flex-col items-center tablet:justify-around tablet:flex-row z-0">
      <div className="tablet:flex tablet:justify-around tablet:flex-row">
        <div className="relative flex ">
          <div className="absolute flex w-full h-full z-10 justify-center bottom-36">
            <img
              className="h-44 w-44 rounded-full object-cover"
              src="/assets/images/Mergim.png"
            ></img>
          </div>
          <div className="mb-52 bg-white pb-4 max-w-sm rounded-md drop-shadow-lg tablet:mb-0 tablet:z-20">
            <div className="text-transparent font-semibold text-4xl pt-8 pb-5 px-8">
              Mergim, 58
            </div>
            <div className="Text px-8">
              “Genom Kollektiva hittade jag en person som nu hyr ett rum hos
              mig. Jag sparar pengar varje månad och får sällskap varje dag.
              Love it”
            </div>
          </div>
        </div>
        <div className="relative flex ">
          <div className="mb-52 bg-white pb-4 max-w-sm rounded-md drop-shadow-lg tablet:mx-2.5 tablet:mb-0 tablet:z-20">
            <div className="absolute flex w-full h-full z-10 justify-center bottom-36">
              <img
                className="h-44 w-44 rounded-full object-cover"
                src="/assets/images/Mergim.png"
              ></img>
            </div>
            <div className="text-transparent font-semibold text-4xl pt-8 pb-5 px-8">
              Mergim, 58
            </div>
            <div className="Text px-8">
              “Genom Kollektiva hittade jag en person som nu hyr ett rum hos
              mig. Jag sparar pengar varje månad och får sällskap varje dag.
              Love it”
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="mb-10 bg-white pb-4 max-w-sm rounded-md drop-shadow-lg tablet:mb-0 tablet:z-20">
            <div className="absolute flex w-full h-full z-10 justify-center bottom-36">
              <img
                className="h-44 w-44 rounded-full object-cover"
                src="/assets/images/Mergim.png"
              ></img>
            </div>
            <div className="text-transparent font-semibold text-4xl pt-8 pb-5 px-8">
              Mergim, 58
            </div>
            <div className="Text px-8">
              “Genom Kollektiva hittade jag en person som nu hyr ett rum hos
              mig. Jag sparar pengar varje månad och får sällskap varje dag.
              Love it”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
