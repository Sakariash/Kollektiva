const BecomeMemberForm = (props) => {
  return (
    <div className="flex flex-col items-center content-center mt-20 tablet:mt-10">
      <div className="w-3/4 tablet:w-3/5 laptop:w-1/3">
        <label className="block" for="email">
          <p className="font-bold">Ange din e-postadress</p>
        </label>
        <input
          className="bg-secondary h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="text"
          placeholder="Namn@exempel.se"
          name="email"
          required
        ></input>

        <label for="password" className="block">
          <p className="mt-6 font-bold">Ange ditt lösenord</p>
        </label>
        <input
          className="bg-secondary h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="password"
          placeholder="************"
          name="password"
          required
        ></input>

        <label for="password" className="block">
          <p className="mt-6 font-bold">Upprepa lösenord</p>
        </label>
        <input
          className="bg-secondary h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
          type="password"
          placeholder="************"
          name="password"
          required
        ></input>

        <div className="flex flex-col tablet:flex-row">
          <label className="block" for="name">
            <p className="font-bold">Förnamn</p>

            <input
              className="bg-secondary h-10 w-full rounded-md pl-2 tablet:mr-4 tablet:h-12 tablet:w-full"
              type="text"
              placeholder="Förnamn"
              name="name"
              required
            ></input>
          </label>

          <label className="block" for="lastname">
            <p className="font-bold">Efternamn</p>

            <input
              className="bg-secondary h-10 w-full rounded-md pl-2 tablet:h-12 tablet:w-full"
              type="text"
              placeholder="Efternamn"
              name="lastname"
              required
            ></input>
          </label>
        </div>

        <div className="flex justify-center tablet:justify-start">
          <button
            className="bg-btnPrimary mt-20 h-14 w-3/4 font-bold rounded-md mb-20 tablet:h-16 tablet:w-3/6 tablet:mt-6"
            type="submit"
          >
            Bli medlem
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeMemberForm;
