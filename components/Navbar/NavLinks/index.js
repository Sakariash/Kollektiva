const NavLinks = ({ NavLinks }) => {
  return (
    <div className="hidden tablet:flex tablet:text-sm text-gray-800 w-6/12 justify-between items-center laptop:text-xl">
      {NavLinks.map((link, index) => {
        return (
          <a key={index} href={link.href}>
            {link.headline}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
