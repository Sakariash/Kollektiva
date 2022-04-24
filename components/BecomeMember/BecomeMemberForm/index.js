import Link from "next/link";

const BecomeMemberForm = (props) => {
  return (
    <div className="flex flex-col items-center content-center mt-20 tablet:mt-10">
      <div className="w-3/4 tablet:w-3/5 laptop:w-1/3">
        <label className="block" htmlFor="email">
          <p className="font-bold font-Inter">Ange din e-postadress</p>
        </label>
        <input
          className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="text"
          placeholder="Namn@exempel.se"
          name="email"
          required
        ></input>

        <label htmlFor="password" className="block">
          <p className="mt-6 font-bold font-Inter">Ange ditt lösenord</p>
        </label>
        <input
          className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="password"
          placeholder="************"
          name="password"
          required
        ></input>

        <label htmlFor="password" className="block">
          <p className="mt-6 font-bold font-Inter">Upprepa lösenord</p>
        </label>
        <input
          className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="password"
          placeholder="************"
          name="password"
          required
        ></input>

        <div className="flex flex-col mt-6 laptop:flex-row laptop:mt-6">
          <label className="block" htmlFor="name">
            <p className="font-bold font-Inter">Förnamn</p>

            <input
              className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:mr-4 tablet:h-12 tablet:w-full"
              type="text"
              placeholder="Förnamn"
              name="name"
              required
            ></input>
          </label>

          <label className="block" htmlFor="lastname">
            <p className="font-bold font-Inter mt-6 laptop:mt-0 laptop:ml-4">
              Efternamn
            </p>

            <input
              className="bg-white shadow-lg shadow-slate-300 h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full laptop:ml-4"
              type="text"
              placeholder="Efternamn"
              name="lastname"
              required
            ></input>
          </label>
        </div>

        <div className="flex justify-center tablet:justify-start">
          <Link href="/login">
            <button
              className="font-Poppins bg-btnPrimary mt-20 h-14 w-3/4 font-bold rounded-md mb-20 tablet:h-16 tablet:w-3/6 tablet:mt-6"
              type="submit"
            >
              Bli medlem
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeMemberForm;
