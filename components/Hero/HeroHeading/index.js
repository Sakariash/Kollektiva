const HeroHeading = (props) => {
  return (
    <div className="desktop:w-full">
      <h1 className="desktop:absolute desktop:w-[600px] left-[-190px]">
        {props.headline}
      </h1>
    </div>
  );
};

export default HeroHeading;
