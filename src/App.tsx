import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import MovieDetails from "./pages/MovieDetail";
import HomeWithLogger from "./pages/HomeWithLogger.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeWithLogger />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;