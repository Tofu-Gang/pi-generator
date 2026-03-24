import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Key from "./components/pages/Key.jsx";
import Filters from "./components/pages/Filters.jsx";
import Scale from "./components/pages/Scale.jsx";
import Length from "./components/pages/Length.jsx";
import Result from "./components/pages/Result.jsx";

function App() {
    return (
        <div>
            <Header />
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <Key />
                    <Filters />
                    <Scale />
                    <Length />
                </div>
                <Result />
            </div>
            <Footer />
        </div>
    );
}

export default App
