import LoginHeading from "./LoginHeading";
import BecomeMemberForm from "./BecomeMemberForm";
import BecomeMemberText from "./BecomeMemberText";

const BecomeMember = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full">
      <LoginHeading />
      <BecomeMemberText />
      <BecomeMemberForm />
    </div>
  );
};

export default BecomeMember;
