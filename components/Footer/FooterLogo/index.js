export default function FooterLogo({ text }) {
  return (
    <div className="w-full flex flex-row justify-center items-center desktop:w-fit pr-44 pl-24">
      <div className="w-16">
        <img
          className="h-full object-contain"
          src="assets/images/Footer-Logo.svg"
        ></img>
      </div>
      <h3 className="font-bold leading-10 text-3xl pl-2.5 desktop:text-6xl">
        {text}
      </h3>
    </div>
  );
}
