export default function HomeCheckbox({ name, id, label, icon }) {
  return (
    <>
      <div className="flex flex-row items-center font-normal">
        <input
          type="checkbox"
          className="mr-3 mt-3"
          id={id}
          name={name}
        ></input>
        <img className="mr-1 h-4 mt-3" src={icon}></img>
        <label className="mr-6 mt-3">{label}</label>
      </div>
    </>
  );
}
