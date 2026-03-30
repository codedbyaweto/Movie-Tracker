import {useParams, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {type RootState} from "../store/store";
import Header from "../components/Header.tsx";

export default function MovieDetails() {
    const {id} = useParams<{ id: string }>();
    const movie = useSelector((s: RootState) =>
        s.movies.items.find((m) => m.id === id)
    );


    if (!movie)
        return (
            <div className="container">
                <p className="not-found">Movie not found</p>
                <Link to="/" className="back-link">
                    ← Back to Home
                </Link>
            </div>
        );

    return (
        <>
            <Header/>
            <div className="container">
                <Link to="/" className="back-link">
                    ← Back
                </Link>

                <div className="details-card">
                    {movie.image && (
                        <img src={movie.image} alt={movie.title} className="details-image" />
                    )}

                    <div className="details-info">
                        <h2>{movie.title}</h2>

                        <p>
                            <span>Genre:</span> {movie.genre}
                        </p>

                        <p>
                            <span>Year:</span> {movie.year}
                        </p>

                        <p>
                            <span>Status:</span> {movie.watched ? "Watched" : "Not Watched"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
