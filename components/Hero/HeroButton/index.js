const HeroButton = ({ text, backgrounds }) => {
  return (
    <button
      className="w-80 h-[62px] mt-4 rounded-md desktop:w-96"
      style={{ background: backgrounds }}
    >
      {text}
    </button>
  );
};

export default HeroButton;
