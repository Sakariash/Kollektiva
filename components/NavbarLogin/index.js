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
          <Link href="/registeredhouses">Hyr ut ditt boende</Link>,
          <Link href="/">Hyr ett boende</Link>,
          <Link href="/login">Logga in</Link>,
        ]}
      />
      <Hamburger />
    </div>
  );
};

export default NavbarLogin;
