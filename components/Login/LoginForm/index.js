const LoginForm = (props) => {
  return (
    <div className="flex flex-col justify-center content-center mt-20">
      <label for="email">
        <b className="">Emailadress</b>
      </label>
      <input
        className="flex justify-center bg-secondary h-10 w-3/4 tablet:h-12 tablet:w-1/3"
        type="text"
        placeholder="Namn@exempel.se"
        name="email"
        required
      ></input>
      <label for="password">
        <b>Lösenord</b>
      </label>
      <input
        className="flex justify-center bg-secondary h-10 w-3/4 tablet:h-12 tablet:w-1/3"
        type="password"
        placeholder="************"
        name="password"
        required
      ></input>
      <button className="bg-btnPrimary mt-20 h-12 w-2/3" type="submit">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
