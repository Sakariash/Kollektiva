import Link from "next/link";

const HeroButton = ({ text, backgrounds, link }) => {
  return (
    <button
      className="w-80 h-[62px] mt-3 rounded-md desktop:w-96"
      style={{ background: backgrounds }}
      href={{ link }}
    >
      <a href={link}>{text}</a>
    </button>
  );
};

export default HeroButton;
