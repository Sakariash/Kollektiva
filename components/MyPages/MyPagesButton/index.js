export default function MyPagesButton({ text, link }) {
  return (
    <button className="bg-btnPrimary p-2 m-2 w-96 rounded-md" href={link}>
      <a href={link}> {text}</a>
    </button>
  );
}
