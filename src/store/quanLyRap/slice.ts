import { createSlice } from "@reduxjs/toolkit";
import { Cinema, LstCumRap, MovieDetail } from "types";
import {
  getCinemaListThunk,
  getLstCumRapThunk,
  getMovieDetailThunk,
} from "./thunk";

type QuanLyPhimInitialState = {
  movieDetail?: MovieDetail;
  isFetchingMovieDetail?: boolean;
  cinemaList?: Cinema[];
  lstCumRap?: LstCumRap[];
  isFetchingCinema?: boolean;
  isFetchingLstCumRap?: boolean;
};
const initialState: QuanLyPhimInitialState = {};
const quanLyRapSlice = createSlice({
  name: "quanLyRap",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // getMovieDetailThunk
      .addCase(getMovieDetailThunk.pending, (state) => {
        state.isFetchingMovieDetail = true;
      })
      .addCase(getMovieDetailThunk.fulfilled, (state, { payload }) => {
        state.movieDetail = payload;
        state.isFetchingMovieDetail = false;
      })
      .addCase(getMovieDetailThunk.rejected, (state) => {
        state.isFetchingMovieDetail = false;
      })

      // getCinemaListThunk
      .addCase(getCinemaListThunk.pending, (state) => {
        state.isFetchingCinema = true;
      })
      .addCase(getCinemaListThunk.fulfilled, (state, { payload }) => {
        state.cinemaList = payload;
        state.isFetchingCinema = false;
      })
      .addCase(getCinemaListThunk.rejected, (state) => {
        state.isFetchingCinema = false;
      })

      // getLstCumRapThunk
      .addCase(getLstCumRapThunk.pending, (state) => {
        state.isFetchingLstCumRap = true;
      })
      .addCase(getLstCumRapThunk.fulfilled, (state, { payload }) => {
        state.isFetchingLstCumRap = false;
        state.lstCumRap = payload;
      })
      .addCase(getLstCumRapThunk.rejected, (state) => {
        state.isFetchingLstCumRap = false;
      });
  },
});
export const { actions: quanLyRapSliceActions, reducer: quanLyRapReducer } =
  quanLyRapSlice;
