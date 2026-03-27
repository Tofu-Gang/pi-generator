import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Key from "./components/pages/Key.jsx";
import Filters from "./components/pages/Filters.jsx";
import Scale from "./components/pages/Scale.jsx";
import Length from "./components/pages/Length.jsx";
import Result from "./components/pages/Result.jsx";
import {useMusic} from "./context/music.jsx";

function App() {
    const { key, filters, scale, resultLength } = useMusic();

    return (
        <div>
            <Header />
            <div className="flex flex-col">
                <div className={`${key.done() && filters.done() && scale.done() && resultLength.done() ? "visible" : "hidden"}`}>
                    <Result />
                </div>
                <div className="flex justify-between">
                    <div>
                        <Key />
                    </div>
                    <div className={`${key.done() ? "visible" : "invisible"}`}>
                        <Filters />
                    </div>
                    <div className={`${key.done() && filters.done() ? "visible" : "invisible"}`}>
                        <Scale />
                    </div>
                    <div className={`${key.done() && filters.done() && scale.done() ? "visible" : "invisible"}`}>
                        <Length />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App
