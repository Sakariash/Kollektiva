import Link from "next/Link";

const LoginText = ({ SignupLink }) => {
  return (
    <div className="hidden tablet:flex justify-center content-center mt-10">
      <p className="font-bold justify-center tablet:w-3/5 laptop:w-1/3">
        För att använda våra tjänster så måste du vara inloggad på ditt konto.
        Har du inget konto? {SignupLink}
      </p>
    </div>
  );
};

export default LoginText;
