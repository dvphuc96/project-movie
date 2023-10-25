import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserByAccessTokenThunk } from "./quanLyNguoiDung/thunk";
export const store = configureStore({
  reducer: rootReducer,
});

// dispatch action khi client vào website
store.dispatch(getUserByAccessTokenThunk());

type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)['getState']>
export type RootDispatch = typeof store.dispatch;
