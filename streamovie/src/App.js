import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Likes" element={<Likes />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
