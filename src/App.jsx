import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Key from "./components/pages/Key.jsx";
import Filters from "./components/pages/Filters.jsx";
import Scale from "./components/pages/Scale.jsx";
import Length from "./components/pages/Length.jsx";
import Result from "./components/pages/Result.jsx";
import { useMusic } from "./context/music.jsx";
// TODO: send request automatically, don't wait for the user to click the generate (FETCH) button!
// TODO: add random button
// User does not immediately understand what the app does, what is the meaning of all settings, risk of immediate leave!
// Research what does header and footer contain normally and use these patterns!
// Cultivate the Matrix style, add some fancy animations for example parts of PI number, with neon effect and so on.
// Keep the "old school" style, rectangles without rounded corners and so on
// Title/Home page is missing, develop it and clearly explain what is the purpose of the app, what it does, how does it
// work, what input is needed, maybe add a quick call to action button and let the user know that they do not need to
// read all the text, the UX will guide them
// Rethink the app layout: The four columns should be hidden and considered a "setting", have one button to display or
// close it-on mobile layout. For large screens, implement left-side menu (example can be alza.cz).
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
