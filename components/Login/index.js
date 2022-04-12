import LoginHeading from "./LoginHeading";
import LoginForm from "./LoginForm";
import LoginText from "./LoginText";
import Link from "next/link";
Link;

const Login = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full">
      <LoginHeading />
      <LoginText
        SignupLink={
          <Link href="/signup">
            <a className="text-link">Bli medlem här!</a>
          </Link>
        }
      />
      <LoginForm />
    </div>
  );
};

export default Login;
