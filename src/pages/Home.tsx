import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../features/movies/moviesSlice";
import type {RootState, AppDispatch} from "../store/store";
import {MovieCard} from "../components/MovieCard";
import {Stats} from "../components/StatsPanel";
import {AddMovieModal} from "../components/AddMovieModal";
import Header from "../components/Header.tsx";

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const {items, loading, error} = useSelector((s: RootState) => s.movies);

    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const filtered = useMemo(() => {
        const searchLower = search.toLowerCase();

        return items.filter((movie) => {
            return (
                movie.title.toLowerCase().includes(searchLower) &&
                (genre === "" || movie.genre === genre)
            );
        });
    }, [items, search, genre]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header/>
            <div className="container">
                <button onClick={() => setOpen(true)}>Add Movie</button>

                <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="">All</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Comedy</option>
                    <option>Thriller</option>
                </select>

                <Stats/>

                {filtered.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}

                {open && <AddMovieModal onClose={() => setOpen(false)}/>}
            </div>
        </>
    );
}

export default Home;