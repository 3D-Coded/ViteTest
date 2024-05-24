export default function Header({ title, subtitle }) {
  return (
    <>
      <div className="text-center text-8xl p-4">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </>
  );
}
