import { lazy, Suspense } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Projects"));

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
      <Router>
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white mx-auto mb-4"></div>
                <p className="text-white">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </Suspense>
        {/* <div className="h-[100vh] flex justify-center items-center">
        <h1 className="text-5xl"> Hello World</h1>
      </div>  */}
      </Router>
    </div>
  );
}

export default App;
