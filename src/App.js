import "./App.css";
import Home from "./pages/home/home";
import Dog from "./pages/dog/dog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
