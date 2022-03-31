export default function FooterLinks({
  firstHeadline,
  secondHeadline,
  firstLinks,
  secondLinks,
}) {
  return (
    <div className="pl-6 desktop:w-3/6 pl-32 flex justify-between">
      <div className="mb-11 desktop:w-1/3">
        <h3 className="font-bold leading-10 text-3xl desktop:text-6xl">
          {firstHeadline}
        </h3>
        <div className="flex flex-col">
          {firstLinks.map((link) => {
            return (
              <a className="desktop:text-xl" href="#">
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mb-20 desktop:w-1/3">
        <h3 className="font-bold leading-10 text-3xl desktop:text-6xl">
          {secondHeadline}
        </h3>
        <div className="flex flex-col">
          {secondLinks.map((link) => {
            return (
              <a className="desktop:text-xl" href="#">
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
