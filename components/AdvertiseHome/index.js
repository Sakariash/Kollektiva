import Link from "next/link";
import HomeCheckbox from "../HomeCheckbox";

export default function AdvertiseHome() {
  return (
    <div className="bg-primary laptop:px-16 desktop:px-24 laptop:py-24 desktop:py-40">
      <div className="py-[10%] px-[10%] tablet:px-[25%] laptop:px-[10%] bg-white laptop:rounded-xl laptop:relative text-[#4D5254] font-semibold text-sm font-Inter desktop:flex flex-row">
        <div className="bg-white laptop:p-4 laptop:rounded-xl laptop:shadow-md laptop:absolute top-[-45px]">
          <h1 className="font-['Poppins'] text-primary text-2xl laptop:text-6xl">
            Fyll i bostadsformuläret
          </h1>
        </div>
        <form action="/" method="post">
          <div className="flex flex-col desktop:flex-row">
            <div>
              <div className="flex flex-col max-w-md font-Inter text-sm font-semibold my-10 skrivformulär">
                <label htmlFor="address">Fyll i bostadsadress</label>
                <input
                  className="shadow-md mb-10 h-12 pl-2"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Skriv bostadsadress här"
                ></input>
                <label htmlFor="date">Välj tillträdesdatum</label>
                <input
                  className="shadow-md mb-2 h-10 px-2 text-[#9CA3AF]"
                  type="date"
                  id="date"
                  name="date"
                ></input>

                <div className="flex flex-row items-center">
                  <HomeCheckbox
                    name="Immediately"
                    id="Immediately"
                    label="Omgående"
                  />
                </div>
              </div>

              <label htmlFor="price">Månadsavgift i SEK</label>
              <div className="flex mb-10">
                <p> 0 </p>
                <input
                  className="w-40 mx-3"
                  type="range"
                  min="0"
                  max="15000"
                  step="50"
                  id="myRange"
                />
                <p> 15.000 </p>
              </div>
              <label htmlFor="price">Antal kvadratmeter</label>
              <div className="flex mb-10">
                <p> 0 </p>
                <input
                  className="w-40 mx-3"
                  type="range"
                  min="0"
                  max="100+"
                  step="1"
                  id="myRange"
                />
                <p> 100+ </p>
              </div>

              <div className="VAD ÄR JAG TILL FÖR?">
                <label htmlFor="form-of-housing">Boendeform</label>
                <div className="mt-5 flex flex-wrap">
                  <HomeCheckbox
                    name="Apartment"
                    id="Apartment"
                    label="Lägenhet"
                  />
                  <HomeCheckbox name="Room" id="Room" label="Rum" />
                  <HomeCheckbox
                    name="Terrace-house"
                    id="Terrace-house"
                    label="Radhus"
                  />
                  <HomeCheckbox name="House" id="House" label="Villa" />
                </div>

                <div className="mt-10">
                  <label htmlFor="form-of-housing">Antal rum</label>
                  <div className="mt-5 font-normal flex flex-row">
                    <HomeCheckbox name="oneRoom" id="oneRoom" label="1 rok" />
                    <HomeCheckbox name="twoRoom" id="twoRoom" label="2 rok" />
                    <HomeCheckbox
                      name="threeRoom"
                      id="threeRoom"
                      label="3 rok"
                    />
                  </div>
                  <div className="flex flex-row">
                    <HomeCheckbox name="fourRoom" id="fourRoom" label="4 rok" />
                    <HomeCheckbox name="fiveRoom" id="fiveRoom" label="5 rok" />
                    <HomeCheckbox name="sixRoom" id="sixRoom" label="6+ rok" />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <label htmlFor="include">Ingår i hyran</label>
                <div className="mt-5 flex flex-wrap max-w-sm">
                  <HomeCheckbox
                    name="hot-water"
                    id="hot-water"
                    icon="../../assets/images/icons/drop.svg"
                    label="Varmvatten"
                  />
                  <HomeCheckbox
                    name="Internet"
                    id="Internet"
                    icon="../../assets/images/icons/internet.svg"
                    label="Internet"
                  />
                  <HomeCheckbox
                    name="Parking"
                    id="Parking"
                    icon="../../assets/images/icons/parking.svg"
                    label="Parking"
                  />
                  <HomeCheckbox
                    name="Electricity"
                    id="Electricity"
                    icon="../../assets/images/icons/electricity.svg"
                    label="El"
                  />
                  <HomeCheckbox
                    name="Heat"
                    id="Heat"
                    icon="../../assets/images/icons/heat.svg"
                    label="Värme"
                  />
                  <HomeCheckbox
                    name="cable-tv"
                    id="cable-tv"
                    icon="../../assets/images/icons/tv.svg"
                    label="Kabel-TV"
                  />
                  <HomeCheckbox
                    name="Garage"
                    id="Garage"
                    icon="../../assets/images/icons/garage.svg"
                    label="Garage"
                  />
                </div>
              </div>
              <div className="mt-10">
                <label htmlFor="include">Bekvämligheter</label>
                <div className="mt-5 flex flex-wrap max-w-md desktop:max-w-md">
                  <HomeCheckbox
                    name="washingmachine"
                    id="washingmachine"
                    icon="../../assets/images/icons/washingmachine.svg"
                    label="Tvättmaskin"
                  />
                  <HomeCheckbox
                    name="kitchen"
                    id="kitchen"
                    icon="../../assets/images/icons/kitchen.svg"
                    label="Kokvrå"
                  />
                  <HomeCheckbox
                    name="security-door"
                    id="security-door"
                    icon="../../assets/images/icons/keyhole.svg"
                    label="Säkerhetsdörr"
                  />

                  <HomeCheckbox
                    name="dryer"
                    id="dryer"
                    icon="../../assets/images/icons/dryer.svg"
                    label="Torktumlare"
                  />
                  <HomeCheckbox
                    name="balcony"
                    id="balcony"
                    icon="../../assets/images/icons/balcony.svg"
                    label="Balkong"
                  />

                  <HomeCheckbox
                    name="elevator"
                    id="elevator"
                    icon="../../assets/images/icons/elevator.svg"
                    label="Hiss"
                  />
                  <HomeCheckbox
                    name="dishwasher"
                    id="dishwasher"
                    icon="../../assets/images/icons/dishwasher.svg"
                    label="Diskmaskin"
                  />
                  <HomeCheckbox
                    name="outdoors"
                    id="outdoors"
                    icon="../../assets/images/icons/outdoors.svg"
                    label="Uteplats"
                  />
                  <HomeCheckbox
                    name="wheelchair"
                    id="wheelchair"
                    icon="../../assets/images/icons/wheelchair.svg"
                    label="Handikappsanpassad"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 desktop:ml-48">
              <label className="max-w-md">
                Ladda upp valfri bild på boendet
              </label>
              <div className="desktop:max-w-lg bg-secondary desktop:rounded-xl desktop:relative ">
                <div className="mt-10 desktop:mt-2 desktop:ml-2 desktop:absolute max-w-md">
                  <label className="cursor-pointer  max-w-md p-2 flex flex-row rounded-lg border-solid border-primary text-primary font-Poppins justify-center border-2 desktop:w-44  desktop:absolute">
                    <input type="file" className="hidden" />
                    <img
                      className="h-5 mr-2 "
                      srcSet="../../assets/images/icons/upload-document.svg"
                    ></img>
                    Ladda upp bilder
                  </label>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    className="hidden desktop:block h-32 my-44 mx-64"
                    srcSet="../../assets/images/icons/img-upload.svg"
                  ></img>
                </div>
              </div>
              <div className="my-10 flex flex-col">
                <label className="max-w-md">Berätta kort om bostaden</label>
                <textarea
                  className="shadow-md pl-2"
                  type="text"
                  placeholder="Berätta kort om bostaden här..."
                  rows="20"
                ></textarea>
              </div>
              <label>Ladda upp relevanta dokument</label>
              <div className="flex flex-col relative desktop:h-32">
                <div className="desktop:absolute mb-10">
                  <label className="cursor-pointer  max-w-md py-2 px-1 flex flex-row rounded-lg border-solid border-primary text-primary font-Poppins justify-center border-2 desktop:w-60 ">
                    <input type="file" className="hidden" />
                    <img
                      className="h-5 mr-2 "
                      srcSet="../../assets/images/icons/upload-document.svg"
                    ></img>
                    Ladda upp dokument
                  </label>
                </div>
                <div className="desktop:absolute desktop:bottom-0 desktop:right-0 ">
                  <Link href="/finishedregistration">
                    <button className=" font-Poppins py-3 px-14 rounded-md bg-[#FFBA36]">
                      Registrera din bostad
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
