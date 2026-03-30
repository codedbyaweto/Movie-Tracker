import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { type Movie } from "./types";
import inceptionImg from "../../assets/inception.jpg";
import TitanicImg from "../../assets/Titanic.jpg";
import HangOver from "../../assets/Hangover.jpg";
import DarkKnight from "../../assets/DarkKnight.jpeg";
import forrestGumpImg from "../../assets/forestgump.jpeg";
import superbadImg from "../../assets/superbad.jpg";
import se7enImg from "../../assets/s7ven.jpg";
import gladiatorImg from "../../assets/gladiator.jpeg";
import jokerImg from "../../assets/joker.jpg";
import getOutImg from "../../assets/getOut.webp";


const fakeMovies: Movie[] = [
    {
        id: "1",
        title: "Inception",
        genre: "Action",
        year: 2010,
        watched: false,
        image: inceptionImg,
    },
    {
        id: "2",
        title: "Titanic",
        genre: "Drama",
        year: 1997,
        watched: true,
        image: TitanicImg,
    },
    {
        id: "3",
        title: "Hangover",
        genre: "Comedy",
        year: 2009,
        watched: false,
        image: HangOver,
    },
    {
        id: "4",
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        watched: false,
        image: DarkKnight,
    },
    {
        id: "5",
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        watched: true,
        image: forrestGumpImg,
    },
    {
        id: "6",
        title: "Superbad",
        genre: "Comedy",
        year: 2007,
        watched: false,
        image: superbadImg,
    },
    {
        id: "7",
        title: "Se7en",
        genre: "Thriller",
        year: 1995,
        watched: true,
        image: se7enImg,
    },
    {
        id: "8",
        title: "Gladiator",
        genre: "Action",
        year: 2000,
        watched: false,
        image: gladiatorImg,
    },
    {
        id: "9",
        title: "Joker",
        genre: "Drama",
        year: 2019,
        watched: false,
        image: jokerImg,
    },
    {
        id: "10",
        title: "Get Out",
        genre: "Thriller",
        year: 2017,
        watched: true,
        image: getOutImg,
    }
];

export const fetchMovies = createAsyncThunk<Movie[]>(
    "movies/fetchMovies",
    async () => {
        return new Promise<Movie[]>((resolve) => {
            setTimeout(() => resolve(fakeMovies), 1000);
        });
    }
);

interface MoviesState {
    items: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: MoviesState = {
    items: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>) => {
            state.items.push(action.payload);
        },
        toggleWatched: (state, action: PayloadAction<string>) => {
            const movie = state.items.find((m) => m.id === action.payload);
            if (movie) movie.watched = !movie.watched;
        },
        removeMovie: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((m) => m.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load movies";
            });
    },
});

export const { addMovie, toggleWatched, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;