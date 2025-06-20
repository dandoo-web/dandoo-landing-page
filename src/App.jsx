import Home from "./pages/Home";

function App() {
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
