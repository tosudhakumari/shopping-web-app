import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "././pages/Home";
import Cart from "././pages/Cart";

const App = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;