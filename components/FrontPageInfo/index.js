import InfoBox from "../FronPageInfoBox";

export default function FrontPageInfo() {
  return (
    <>
      <div className="bg-primary px-2.5 flex flex-col h-full justify-items-center items-center justify-around py-6 tablet:flex-row desktop:relative desktop:h-96">
        <div className="desktop:absolute tablet:flex tablet:justify-between tablet:flex-row top-[-100px]">
          <InfoBox
            imgsrc="assets/images/RegisteredHouses/Vector.png"
            boxText={
              "Oroa dig inte! Vi garanterar dig att det är 100% säkert att använda Kollektivas tjänster. Även om du söker ny bostad eller vill hyra ut."
            }
          />
          <InfoBox
            imgsrc="assets/images/RegisteredHouses/Vector2.png"
            boxText={
              "Vi tar hand om krångelt! Kollektiva ansvarar för X, Y och Z. Vi vill att du som söker eller hyr ut din bostad ska kunna göra så smärttfritt som möjligt."
            }
          />
          <InfoBox
            imgsrc="assets/images/RegisteredHouses/Vector3.png"
            boxText={
              "Vi tar 10% i provision för att agera mellanhand. Du som hyresvärd kan fortsätta amortera som vanligt när du hyr ut."
            }
          />
        </div>
      </div>
    </>
  );
}
