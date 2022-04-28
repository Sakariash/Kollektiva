import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Link from "next/link";
Link;

const Navbar = () => {
  return (
    <div className="px-5 w-full h-20 flex justify-between items-center bg-secondary tablet:px-11 tablet:bg-white overflow-hidden">
      <Logo />
      <NavLinks
        NavLinks={[
          {
            key: "link1",
            href: "/registeredhouses",
            titel: "Hyr ut ditt boende",
          },
          {
            key: "link2",
            href: "/registeredhouses",
            titel: "Hyr ut ditt boende",
          },
          {
            key: "link3",
            href: "/registeredhouses",
            titel: "Hyr ut ditt boende",
          },
        ]}
      />
      <Hamburger />
    </div>
  );
};

export default Navbar;
