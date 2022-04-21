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
          <Link href="/registeredhouses">Hyr ut ditt boende</Link>,
          <Link href="/">Hyr ett boende</Link>,
          <Link href="/mypages">Mina sidor</Link>,
        ]}
      />
      <Hamburger />
    </div>
  );
};

export default Navbar;
