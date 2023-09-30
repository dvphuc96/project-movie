import { apiInstance } from "constant";
import { BookTicket, ThongTinPhongVe } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
  timeout: 30000,
});
export const quanLyDatVeService = {
  getTicketRoomList: (maLichChieu = "") =>
    api.get<ApiResponse<ThongTinPhongVe>>(
      `/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    ),
  bookTicket: (data: BookTicket) => api.post("/DatVe", data),
};
