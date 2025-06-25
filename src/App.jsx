import Home from "./pages/Home";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <div className="w-full border overflow-hidden border-zinc-800 min-h-screen max-w-screen-2xl text-white bg-black">
      <Home />
      <div className="h-[100vh] flex justify-center items-center">
        <h1 className="text-5xl"> Hello World</h1>
      </div>
    </div>
  );
}

export default App;
