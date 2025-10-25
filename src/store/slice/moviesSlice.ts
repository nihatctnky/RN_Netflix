import { createSlice } from "@reduxjs/toolkit";
import { MoviesState } from "../../models/data/moviesState";
import { getMovieDetail, getNowPlayingMovies, getPopulerMovies, getTopRatedMovies, getUpcomingMovies, searchMovie } from "../actions/moviesActions";
import { CATEGORIES } from "../../utils/constants";


const initialState :MoviesState ={
    populerMovies:[],
    searchList:[],
    nowPlayingMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    pending:false,
    pendingSearch: false,
    error:{},
    selectedCategory:{},
    categories :[
      {
        id:1,
        category:CATEGORIES.NOWPLAYING,
        categoryTitle:"Now Player"

      },
      {
        id:2,
        category:CATEGORIES.TOPRATED,
         categoryTitle:"Top Rated"

      },
      {
        id:3,
        category:CATEGORIES.POPULER,
         categoryTitle:"Populer"

      },
      {
        id:4,
        category:CATEGORIES.UPCOMING,
         categoryTitle:"Upcoming"

      }
    ],
    movieDetailData:null,
    pendingMovieDetail:false
}


const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
      setCategory:(state,action) =>{
        state.selectedCategory = state.categories.find(
          c=>c.category== action.payload
        )
        
      },
      clearSearchResults: (state) => {
        state.searchList = [];
      }
    },
    extraReducers(builder){
        builder
        .addCase(getPopulerMovies.pending,state=>{
            state.pending=true
        })
        .addCase(getPopulerMovies.fulfilled,(state,action)=>{
           (state.populerMovies= action.payload),
           (state.pending=false)
        })
        .addCase(getPopulerMovies.rejected,(state,action)=>{
          (state.pending = false),
          (state.error=action.error)
        })


        .addCase(getNowPlayingMovies.pending,state=>{
            state.pending=true
        })
        .addCase(getNowPlayingMovies.fulfilled,(state,action)=>{
           (state.nowPlayingMovies= action.payload),
           (state.pending=false)
        })
        .addCase(getNowPlayingMovies.rejected,(state,action)=>{
          (state.pending = false),
          (state.error=action.error)
        })

        .addCase(getTopRatedMovies.pending,state=>{
            state.pending=true
        })
        .addCase(getTopRatedMovies.fulfilled,(state,action)=>{
           (state.topRatedMovies= action.payload),
           (state.pending=false)
        })
        .addCase(getTopRatedMovies.rejected,(state,action)=>{
          (state.pending = false),
          (state.error=action.error)
        })

        .addCase(getUpcomingMovies.pending,state=>{
            state.pending=true
        })
        .addCase(getUpcomingMovies.fulfilled,(state,action)=>{
           (state.upcomingMovies= action.payload),
           (state.pending=false)
        })
        .addCase(getUpcomingMovies.rejected,(state,action)=>{
          (state.pending = false),
          (state.error=action.error)
        })



        .addCase(getMovieDetail.pending,state=>{
          state.pendingMovieDetail=true
      })
      .addCase(getMovieDetail.fulfilled,(state,action)=>{
         (state.movieDetailData= action.payload),
         (state.pendingMovieDetail=false)
      })
      .addCase(getMovieDetail.rejected,(state,action)=>{
        (state.pendingMovieDetail = false),
        (state.error=action.error)
      })


      .addCase(searchMovie.pending,state=>{
        state.pendingSearch=true
    })
    .addCase(searchMovie.fulfilled,(state,action)=>{
       (state.searchList= action.payload),
       (state.pendingSearch=false)
    })
    .addCase(searchMovie.rejected,(state,action)=>{
      (state.pendingSearch = false),
      (state.error=action.error)
    })


    }
    
})
export const {setCategory,clearSearchResults}= moviesSlice.actions
export default moviesSlice.reducer