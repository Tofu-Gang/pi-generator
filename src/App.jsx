import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Key from "./components/pages/Key.jsx";
import Filters from "./components/pages/Filters.jsx";
import Scale from "./components/pages/Scale.jsx";
import Length from "./components/pages/Length.jsx";
import Result from "./components/pages/Result.jsx";
import { useMusic } from "./context/music.jsx";

function App() {
    const { Status } = useMusic();

    return (
        <div>
            <Header />
            <div className="flex flex-col px-15">
                <div className="flex">
                    <div className={`${Status.Key.available ? "max-w-1/4 opacity-100" : "max-w-0 opacity-0"} overflow-hidden transition-all duration-500 w-1/4 border`}>
                        <Key />
                    </div>
                    <div className={`${Status.Filters.available ? "max-w-1/4 opacity-100" : "max-w-0 opacity-0"} overflow-hidden transition-all duration-500 w-1/4 border`}>
                        <Filters />
                    </div>
                    <div className={`${Status.Scale.available ? "max-w-1/4 opacity-100" : "max-w-0 opacity-0"} overflow-hidden transition-all duration-500 w-1/4 border`}>
                        <Scale />
                    </div>
                    <div className={`${Status.ResultLength.available ? "max-w-1/4 opacity-100" : "max-w-0 opacity-0"} overflow-hidden transition-all duration-500 w-1/4 border`}>
                        <Length />
                    </div>
                </div>
                <div className={`${Status.ResultNotes.available ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 border`}>
                    <Result />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App
