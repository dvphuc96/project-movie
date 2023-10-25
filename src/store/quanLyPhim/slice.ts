import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { Banner, Movie, MovieDetail } from "types";
import { getBannerListThunk, getMovieListThunk } from "./thunk";

type QuanLyPhimInitialState = {
  movieList?: Movie[];
  isFetchingMovieList?: boolean;
  bannerList?: Banner[];
  isFetchingBannerList?: boolean;
  movieDetail?: MovieDetail | undefined;
  isFetchingMovieDetail?: boolean;
};
const initialState: QuanLyPhimInitialState = {};
const quanLyPhimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {},
  extraReducers(builder:ActionReducerMapBuilder<QuanLyPhimInitialState>) {
    builder
      // getMovieListThunk
      .addCase(getMovieListThunk.pending, (state) => {
        state.isFetchingMovieList = true;
      })
      .addCase(getMovieListThunk.fulfilled, (state, { payload }) => {
        state.movieList = payload;
        state.isFetchingMovieList = false;
      })
      .addCase(getMovieListThunk.rejected, (state) => {
        state.isFetchingMovieList = false;
      })

      // getBannerListThunk
      .addCase(getBannerListThunk.pending, (state) => {
        state.isFetchingBannerList = true;
      })
      .addCase(getBannerListThunk.fulfilled, (state, { payload }) => {
        state.bannerList = payload;
        state.isFetchingBannerList = false;
      })
      .addCase(getBannerListThunk.rejected, (state) => {
        state.isFetchingBannerList = false;
      });
  },
});
export const { actions: quanLyPhimSliceActions, reducer: quanLyPhimReducer } =
  quanLyPhimSlice;
