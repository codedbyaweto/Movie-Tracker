import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/movies/moviesSlice";
import { type Genre } from "../features/movies/types";
import { type AppDispatch } from "../store/store";

interface Props {
    onClose: () => void;
}

export function AddMovieModal({ onClose }: Props) {
    const dispatch = useDispatch<AppDispatch>();

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState<Genre>("Action");
    const [year, setYear] = useState("");

    const handleSubmit = () => {
        const parsedYear = Number(year);

        if (!title.trim()) return alert("Title required");
        if (parsedYear < 1900 || parsedYear > new Date().getFullYear()) {
            return alert("Invalid year");
        }

        dispatch(
            addMovie({
                id: crypto.randomUUID(),
                title,
                genre,
                year: parsedYear,
                watched: false,
            })
        );

        onClose();
    };

    return createPortal(
        <div className="modal">
            <div className="modal-content">
                <h2>Add Movie</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <select onChange={(e) => setGenre(e.target.value as Genre)}>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Comedy</option>
                    <option>Thriller</option>
                </select>

                <input
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />

                <button onClick={handleSubmit}>Add</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    );
}