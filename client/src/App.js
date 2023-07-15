import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Kitty from "./pages/kitty/Kitty";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/kitty/:id" element={<Kitty />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
