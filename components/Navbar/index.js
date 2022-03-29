import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className="px-5 w-screen h-20 flex justify-between items-center tablet:px-11 bg-green-500">
      <Logo />
      <NavLinks />
      <Hamburger />
    </div>
  );
};

export default Navbar;
