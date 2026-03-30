export type Genre = "Action" | "Drama" | "Comedy" | "Thriller";

export type Movie = {
    id: string;
    title: string;
    genre: Genre;
    year: number;
    watched: boolean;
    image?: string;
}