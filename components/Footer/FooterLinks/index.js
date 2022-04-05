export default function FooterLinks({
  firstHeadline,
  secondHeadline,
  firstLinks,
  secondLinks,
}) {
  return (
    <div className="flex flex-col desktop:w-3/6 desktop:flex desktop:flex-row desktop:justify-between">
      <div className="mb-11 desktop:w-1/3">
        <h3 className="font-bold leading-10 text-3xl desktop:text-6xl desktop:mb-6">
          {firstHeadline}
        </h3>
        <div className="flex flex-col">
          {firstLinks.map((link) => {
            return (
              <a className="desktop:pb-2.5" href="#">
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mb-20 desktop:w-1/3">
        <h3 className="font-bold leading-10 text-3xl desktop:text-6xl desktop:mb-6">
          {secondHeadline}
        </h3>
        <div className="flex flex-col">
          {secondLinks.map((link) => {
            return (
              <a className="desktop:pb-2" href="#">
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
