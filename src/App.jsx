import HeaderFooter from "./components/HeaderFooter.jsx";
import { Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Key from "./pages/key.jsx";
import Filters from "./pages/filters.jsx";
import Scale from "./pages/scale.jsx";
import Length from "./pages/length.jsx";
import Result from "./pages/result.jsx";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <HeaderFooter footer={false} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/key" element={<Key />} />
                <Route path="/filters" element={<Filters />} />
                <Route path="/scale" element={<Scale />} />
                <Route path="/length" element={<Length />} />
                <Route path="/result" element={<Result />} />
            </Routes>
            <HeaderFooter footer={true} />
        </div>
    );
}

export default App
