const NavLinks = ({ NavLinks }) => {
  return (
    <div className="hidden tablet:flex tablet:text-sm text-gray-800 w-6/12 justify-between items-center laptop:text-xl">
      {NavLinks.map((link) => {
        return <a key={link.index}>{link}</a>;
      })}
    </div>
  );
};

export default NavLinks;
