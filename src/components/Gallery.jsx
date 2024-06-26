import image from "../assets/testing.jpg";

export default function Gallery() {
  return (
    <>
      <section className="m-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="bg-lime-500 rounded p-4 flex justify-center">
            <img className="rounded" src={image} alt="" />
          </div>
          <div className="bg-lime-500 rounded p-4 flex justify-center">
            <img className="rounded" src={image} alt="" />
          </div>
          <div className="bg-lime-500 rounded p-4 flex justify-center">
            <img className="rounded" src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
