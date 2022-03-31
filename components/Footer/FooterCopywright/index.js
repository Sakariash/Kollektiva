export default function FooterCopywright({ text }) {
  return (
    <div className="mb-6 mt-8 flex justify-center desktop:w-screen">
      <p className="h-5 leading-5">{text}</p>
    </div>
  );
}
