import InfoComponent from "./components/FrontPageInfoComponent";
export default function FrontPageInfo() {
  return (
    <div className="bg-primary flex flex-col justify-items-center items-center justify-between py-6">
      <InfoComponent text="Oroa dig inte! Vi garanterar dig att det är 100% säkert att använda Kollektivas tjänster. Även om du söker ny bostad eller vill hyra ut." />
      <InfoComponent text="Vi tar hand om krångelt! Kollektiva ansvarar för X, Y och Z. Vi vill att du som söker eller hyr ut din bostad ska kunna göra så smärttfritt som möjligt. " />
      <InfoComponent text="Vi tar 10% i provision för att agera mellanhand. Du som hyresvärd kan fortsätta amortera som vanligt när du hyr ut." />
    </div>
  );
}
