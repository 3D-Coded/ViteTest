import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header title="Bob is cool" subtitle="There's just something about him" />
      <section>
        <div className="grid md:grid-cols-2 gap-4 m-2">
          <div className="bg-slate-500 rounded-xl p-4">
            <h3>Testing</h3>
            <p>Some text</p>
          </div>
          <div className="bg-slate-500 rounded-xl p-4">
            <h3>Testing</h3>
            <p>Some text</p>
            <button
              class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
              type="submit"
            >
              Buy now
            </button>
          </div>
        </div>
      </section>
      <Gallery />
    </>
  );
}

export default App;
