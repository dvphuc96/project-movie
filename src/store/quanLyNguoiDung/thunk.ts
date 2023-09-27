import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { quanLyNguoiDungService } from "services";
import { handleSleep, storage } from "utils";

// action thunk
export const loginThunk = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    // tham số đầu tiên luôn luôn là payload, nếu không dùng thì sử dụng _
    try {
      const data = await quanLyNguoiDungService.login(payload);
      // khai báo kiểu dữ liệu trả về (bên quanLyNguoiDung.ts)
      // console.log(data.data.content);

      // sleep 3s (để xử lý trường hợp trả về data nhanh quá gây giật trang web)
      await handleSleep(3000);

      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUserByAccessTokenThunk = createAsyncThunk(
  "quanLyNguoiDung/getUserByAccessToken",
  async (_, { rejectWithValue }) => {
    try {
      // lấy token dưới localstorage
      const token = storage.get("accessToken");
      // nếu có token thì call api
      if (token) {
        const data = await quanLyNguoiDungService.getUserByAccessToken();
        return data.data.content;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
