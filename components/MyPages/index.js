import Link from "next/link";
import MyPagesButton from "./MyPagesButton";
Link;

const MyPages = () => {
  return (
    <div className="flex flex-row p-20 bg-hero-image">
      <div clasName="w-1/2">
        <h1 className="text-6xl mb-6 text-white">Välkommen till mina sidor</h1>
        <p className="text-white mr-10 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, mollis
          senectus dui, vitae eu fames neque. Leo massa nisl ornare accumsan,
          imperdiet elementum, lectus.
        </p>
      </div>
      <div className="flex flex-col w-1/2">
        <MyPagesButton text={"Ändra dina personuppgifter"} />
        <MyPagesButton text={"Mina kontrakt"} />
        <MyPagesButton text={"Mina pågående ärenden"} />
      </div>
    </div>
  );
};

export default MyPages;
