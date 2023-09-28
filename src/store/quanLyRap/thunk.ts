import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapService } from "services";
import { handleSleep } from "utils";

export const getMovieDetailThunk = createAsyncThunk(
  "quanLyRap/getMovieDetail",
  async (maPhim: string, { rejectWithValue }) => {
    try {
      const data = await quanLyRapService.getMovieDetail(maPhim);
      await handleSleep(2000);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getCinemaListThunk = createAsyncThunk(
  "quanLyRap/getCinemaList",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyRapService.getCinemaList();
      await handleSleep(1500);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getLstCumRapThunk = createAsyncThunk(
  "quanLyRap/getLstCumRap",
  async (maHeThongRap: string, { rejectWithValue }) => {
    try {
      const data = await quanLyRapService.getLstCumRap(maHeThongRap);
      handleSleep(2000);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
