import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:
    {
        nowPlayingMovies: null,
        TrailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.TopRated = action.payload;

        },
        addUpcoming: (state, action) => {
            state.Upcoming = action.payload;
        },
        addPopularShow: (state, action) => {
            state.PopularShow = action.payload;

        },
    }
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcoming, addPopularShow} = movieSlice.actions;