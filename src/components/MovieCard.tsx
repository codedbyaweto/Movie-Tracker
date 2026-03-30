import type {Movie} from "../features/movies/types.ts";
import { useDispatch } from "react-redux";
import { toggleWatched, removeMovie } from "../features/movies/moviesSlice";
import { type AppDispatch } from "../store/store";
import { Link } from "react-router-dom";

type Props = {
    movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="card-horizontal">
            {movie.image && (
                <img src={movie.image} alt={movie.title} className="card-image-horizontal" />
            )}

            <div className="card-info">
                <h3>{movie.title}</h3>
                <p>{movie.genre} • {movie.year}</p>
                <p>{movie.watched ? "Watched" : "Not Watched"}</p>

                <div className="card-actions">
                    <button onClick={() => dispatch(toggleWatched(movie.id))}>
                        {movie.watched ? "Unwatched" : "Watched"}
                    </button>
                    <button onClick={() => dispatch(removeMovie(movie.id))}>Remove</button>
                </div>
            </div>

            <div className="card-details">
                <Link to={`/movies/${movie.id}`} className="details-link">
                    Details →
                </Link>
            </div>
        </div>
    );
};