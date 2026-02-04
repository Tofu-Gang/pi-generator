import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MusicProvider } from "./context/music.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MusicProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MusicProvider>
    </StrictMode>,
);
