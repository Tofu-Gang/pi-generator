import Home from "./pages/home.jsx";
import Key from "./pages/key.jsx";
import Filters from "./pages/filters.jsx";
import Scale from "./pages/scale.jsx";
import Length from "./pages/length.jsx";
import Result from "./pages/result.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router";

export const PiGeneratorRoutes = {
    Home: {
        path: "/",
        element: <Home />
    },
    Key: {
        path: "/key",
        element: <Key />
    },
    Filters: {
        path: "/filters",
        element: <Filters />
    },
    Scale: {
        path: "/scale",
        element: <Scale />
    },
    ResultLength: {
        path: "/length",
        element: <Length />
    },
    ResultNotes: {
        path: "/result",
        element: <Result />
    }
}

function App() {
    return (
        <div>
            <Header />
            <Routes>
                {Object.keys(PiGeneratorRoutes).map((key) =>
                    <Route
                        key={PiGeneratorRoutes[key].path}
                        path={PiGeneratorRoutes[key].path}
                        element={PiGeneratorRoutes[key].element}
                    />
                )}
            </Routes>
            <Footer />
        </div>
    );
}

export default App
