export default function MyPagesButton({ text, link }) {
  return (
    <button
      className="bg-btnPrimary font-bold p-2 pt-4 pb-4 m-2 w-64 tablet:w-96 rounded-md"
      href={link}
    >
      <a href={link}> {text}</a>
    </button>
  );
}
