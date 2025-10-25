import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import {  MOVIE_DETAIL_URL, MOVIE_SEARCH_URL, NOW_PLAYING_URL, POPULER_URL, TOP_RATED_URL, UPCOMING_URL } from "../../service/urls";



const getPopulerMovies = createAsyncThunk(
    "movies/getPopulerMovies",
    async () =>{
        try {
          const response=await getRequest(POPULER_URL,{})
        return response.data.results
        } catch (error) {
          console.log("error",error)
        }
      }
)


const getNowPlayingMovies = createAsyncThunk(
  "movies/getNowPlayingMovies",
  async () =>{
      try {
        const response=await getRequest(NOW_PLAYING_URL,{})
      return response.data.results
      } catch (error) {
        console.log("error",error)
      }
    }
)


const getTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async () =>{
      try {
        const response=await getRequest(TOP_RATED_URL,{})
      return response.data.results
      } catch (error) {
        console.log("error",error)
      }
    }
)


const getUpcomingMovies = createAsyncThunk(
  "movies/getUpcomingMovies",
  async () =>{
      try {
        const response=await getRequest(UPCOMING_URL,{})
      return response.data.results
      } catch (error) {
        console.log("error",error)
      }
    }
)

const getMovieDetail = createAsyncThunk(
  "movies/getMovieDetail",
  async (moviId) =>{
      try {
        const url=MOVIE_DETAIL_URL+moviId
        const response=await getRequest(url,{})
      return response.data
      } catch (error) {
        console.log("error",error)
      }
    }
)

const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (params) =>{
      try {
     
        const response=await getRequest(MOVIE_SEARCH_URL,params)
        console.log("response", response.data.results);
      return response.data.results
      } catch (error) {
        console.log("error",error)
      }
    }
)


export{getPopulerMovies,getNowPlayingMovies,getTopRatedMovies,getUpcomingMovies,getMovieDetail,searchMovie}