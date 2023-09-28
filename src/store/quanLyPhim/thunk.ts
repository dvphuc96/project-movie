import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "services";
import { handleSleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (_, { rejectWithValue }) => {
    try {
      // co the truyen hoac khong, ?maNhom=GP08
      const data = await quanLyPhimService.getMovieList("?maNhom=GP08");
      await handleSleep(2000);
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getBannerListThunk = createAsyncThunk(
  "quanLyPhim/getBannerList",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhimService.getBannerList();
      await handleSleep(2000);
      return data?.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

