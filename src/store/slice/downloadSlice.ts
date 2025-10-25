import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path?: string;
  genre_ids?: number[];
}

interface DownloadState {
  downloadedMovie: Movie | null;
}

const initialState: DownloadState = {
  downloadedMovie: null,
};

const downloadSlice = createSlice({
  name: "download",
  initialState,
  reducers: {
    setDownloadedMovie: (state, action: PayloadAction<Movie>) => {
      state.downloadedMovie = action.payload;
    },
    clearDownloadedMovie: (state) => {
      state.downloadedMovie = null;
    },
  },
});

export const { setDownloadedMovie, clearDownloadedMovie } = downloadSlice.actions;
export default downloadSlice.reducer;
