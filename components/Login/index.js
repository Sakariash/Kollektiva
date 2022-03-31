import LoginHeading from "./LoginHeading";
import LoginForm from "./LoginForm";
import LoginText from "./LoginText";

const Login = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full">
      <LoginHeading />
      <LoginText />
      <LoginForm />
    </div>
  );
};

export default Login;
