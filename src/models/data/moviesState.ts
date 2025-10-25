import { SerializedError } from "@reduxjs/toolkit";


interface Movie {
  backdrop_path?: string;
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  original_title?: string;
  original_language?: string;
  adult?: boolean;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  tagline?:string
  release_date?:string
}

interface Category {
  id?:number,
  category?:string,
  categoryTitle?:string
}

interface MoviesState {
  populerMovies: Movie[]
  searchList: Movie[]
  nowPlayingMovies:Movie[]
  topRatedMovies:Movie[]
  upcomingMovies:Movie[]
  categories: Category[]
  selectedCategory:Category | undefined
  pending: boolean;
  error: SerializedError;
  movieDetailData:Movie| null
  pendingMovieDetail:boolean
  pendingSearch:boolean
}

export type { MoviesState, Movie ,Category};
