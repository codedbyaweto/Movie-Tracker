import { useSelector } from "react-redux";
import { type RootState } from "../store/store";

export function Stats() {
    const movies = useSelector((state: RootState) => state.movies.items);

    const total = movies.length;
    const watched = movies.filter((m) => m.watched).length;

    return (
        <div className="stats">
            <p>Total: {total}</p>
            <p>Watched: {watched}</p>
            <p>Unwatched: {total - watched}</p>
        </div>
    );
}