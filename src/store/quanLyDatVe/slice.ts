import { createSlice } from "@reduxjs/toolkit";
import { ThongTinPhongVe } from "types";
import { getTicketRoomListThunk } from "store/quanLyDatVe";

type QuanLyDatVeInitialState = {
  ticketRoomList?: ThongTinPhongVe;
  isFetchingTicketRoomList?: boolean;
};
const initialState: QuanLyDatVeInitialState = {};

const quanLyDatVeSlice = createSlice({
  name: "quanLyDatVe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTicketRoomListThunk.pending, (state) => {
        state.isFetchingTicketRoomList = true;
      })
      .addCase(getTicketRoomListThunk.fulfilled, (state, { payload }) => {
        state.ticketRoomList = payload;
        state.isFetchingTicketRoomList = false;
      })
      .addCase(getTicketRoomListThunk.rejected, (state) => {
        state.isFetchingTicketRoomList = false;
      });
  },
});

export const { actions: quanLyDatVeActions, reducer: quanLyDatVeReducer } =
  quanLyDatVeSlice;
