import LoginHeading from "./LoginHeading";
import BecomeMemberForm from "./BecomeMemberForm";
import BecomeMemberText from "./BecomeMemberText";

const BecomeMember = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full">
      <LoginHeading />
      <BecomeMemberText />
      <BecomeMemberForm />
      <p className="underline w-2/3 font-Inter tablet:w-full tablet:text-center tablet:text-xl mr-auto ml-auto mb-10">
        Läs mer om hur vi behandlar dina personuppgifter.
      </p>
    </div>
  );
};

export default BecomeMember;
