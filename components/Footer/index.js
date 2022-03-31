import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterCopywright from "./FooterCopywright";

export default function Footer() {
  return (
    <div className="bg-primary w-screen pt-12 flex flex-col text-white desktop:flex-row flex-wrap tablet:mt-80 ">
      <FooterLinks
        firstHeadline={"Länkar"}
        firstLinks={[
          "Bli medlem",
          "Integritetspolicy",
          "Jobba hos oss",
          "Sekretess och användarvillkor",
          "",
        ]}
        secondHeadline={"Kontakt"}
        secondLinks={[
          "info@kollektiva.se",
          "0700 12 34 56",
          " ",
          "Besöksadressen 1",
          "414 14 Stockholm",
        ]}
      />
      <FooterLogo text={"KOLLEKTIVA"} />
      <FooterCopywright text={"Copyright by Kollektiva 2022"} />
    </div>
  );
}
