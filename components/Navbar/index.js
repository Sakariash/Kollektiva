import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Link from "next/link";
Link;

const Navbar = () => {
  return (
    <div className="px-5 w-screen h-20 flex justify-between items-center bg-secondary tablet:px-11 tablet:bg-white">
      <Logo />
      <NavLinks
        NavLinks={[
          <Link href="/login">Hyr ut ditt boende</Link>,
          <Link href="/signup">Hyr ett boende</Link>,
          <Link href="/mypages">Mina sidor</Link>,
        ]}
      />
      <Hamburger />
    </div>
  );
};

export default Navbar;
