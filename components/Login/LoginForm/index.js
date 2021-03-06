import Link from "next/link";

const LoginForm = (props) => {
  return (
    <div className="flex flex-col items-center content-center mt-10">
      <div className="w-3/4 tablet:w-3/5 laptop:w-1/3">
        <label className="block" htmlFor="email">
          <p className="font-bold font-Inter">E-postadress</p>
        </label>
        <input
          className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="text"
          placeholder="Namn@exempel.se"
          name="email"
          required
        ></input>
        <label htmlFor="password" className="block">
          <p className="mt-6 font-bold font-Inter">Lösenord</p>
        </label>
        <input
          className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="password"
          placeholder="************"
          name="password"
          required
        ></input>
        <div className="flex justify-center tablet:justify-start">
          <Link href="/mypages">
            <button
              className="bg-btnPrimary font-Poppins mt-20 h-14 w-3/4 font-bold rounded-md mb-20 tablet:h-16 tablet:w-3/6 tablet:mt-6"
              type="submit"
              href="/mypages"
            >
              Logga in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
