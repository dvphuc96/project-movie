import { apiInstance } from "constant";
import { RegisterSchemaType, LoginSchemaType, UpdateAccountSchemaType } from "schema";
import { UserByAccessToken, UserLogin } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
  timeout: 30000,
});
export const quanLyNguoiDungService = {
  register: (data: RegisterSchemaType) => api.post("/DangKy", data),
  // <>: example => {name: string, age: number}
  login: (data: LoginSchemaType) =>
    api.post<ApiResponse<UserLogin>>("/DangNhap", data),
  // api không cần truyền data, sử dụng header để call
  getUserByAccessToken: () =>
    api.post<ApiResponse<UserByAccessToken>>("/ThongTinTaiKhoan"),
  update:(data: UpdateAccountSchemaType) => api.put("/CapNhatThongTinNguoiDung", data),
};
