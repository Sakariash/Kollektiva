import Link from "next/link";
import Hamburger from "../Navbar/Hamburger";
import Logo from "../Navbar/Logo";
import NavLinks from "../Navbar/NavLinks";
Link;

const NavbarLogin = () => {
  return (
    <div className="px-5 w-full h-20 flex justify-between items-center bg-secondary tablet:px-11 tablet:bg-white overflow-hidden">
      <Logo />
      <NavLinks
        NavLinks={[
          {
            key: "link1",
            href: "/registeredhouses",
            headline: "Hyr ut ditt boende",
          },
          {
            key: "link2",
            href: "/",
            headline: "Hyr ett boende",
          },
          {
            key: "link3",
            href: "/login",
            headline: "Logga in",
          },
        ]}
      />
      <Hamburger />
    </div>
  );
};

export default NavbarLogin;
