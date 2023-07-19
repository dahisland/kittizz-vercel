import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Kitty from "./pages/kitty/Kitty";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/kitty/:kittyID" element={<Kitty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
