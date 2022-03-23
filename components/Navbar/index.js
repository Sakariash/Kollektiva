import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-screen h-20 flex justify-between px-11 bg-blue-400">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
