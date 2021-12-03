import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Market from "./components/Market";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
