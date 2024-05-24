export default function Header({ title, subtitle }) {
  return (
    <>
      <div className="grid md:grid-cols-1 gap-2 bg-lime-500 text-center">
        <h1 className="text-8xl">{title}</h1>
        <h3 className="text-4xl">{subtitle}</h3>
      </div>
    </>
  );
}
