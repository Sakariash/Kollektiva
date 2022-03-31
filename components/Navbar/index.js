import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className="px-5 w-screen h-20 flex justify-between items-center bg-secondary tablet:px-11">
      <Logo />
      <NavLinks />
      <Hamburger />
    </div>
  );
};

export default Navbar;
