// rxs

import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserByAccessToken, UserLogin } from "types";
import { getUserByAccessTokenThunk, loginThunk } from "./thunk";
import { storage } from "utils";

type QuanLyNguoiDungInitialState = {
  userLogin?: UserLogin | UserByAccessToken;
  accessToken?: string;
  isFetchingLogin?: boolean;
};

const initialState: QuanLyNguoiDungInitialState = {
  accessToken: storage.get("accessToken"),
  isFetchingLogin: false,
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  // định nghĩa action bình thường dùng PayloadAction<string>
  reducers: {
    // xử lý action đồng bộ
    // demo có action
    logOut: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.accessToken = undefined;
      state.userLogin = undefined;
      storage.remove("accessToken");
    },
    // c2: get user sau khi update thành công
    // updateUser: (state, action: PayloadAction<UserByAccessToken>) => {
    //   state.userLogin = action.payload;
    // },
  },
  extraReducers(builder:ActionReducerMapBuilder<QuanLyNguoiDungInitialState>) {
    // xử lý action bất đồng bộ (api)
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isFetchingLogin = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isFetchingLogin = false;
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        // save accessToken to localstorage
        storage.save("accessToken", payload?.accessToken);

        // set lại accessToken
        state.accessToken = payload?.accessToken;

        // set lại user
        state.userLogin = payload;

        // set lại loading
        state.isFetchingLogin = false;
      })
      .addCase(getUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
        state.userLogin = payload;
      });
  },
});

export const {
  actions: quanLyNguoiDungActions,
  reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
