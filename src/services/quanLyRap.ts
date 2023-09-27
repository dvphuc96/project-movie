import { apiInstance } from "constant/apiInstance";
import { Cinema, LstCumRap, MovieDetail } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
  timeout: 30000,
});
export const quanLyRapService = {
  getMovieDetail: (maPhim = "") =>
    api.get<ApiResponse<MovieDetail>>(`/LayThongTinLichChieuPhim?MaPhim=${maPhim}`),
  getCinemaList: () => api.get<ApiResponse<Cinema[]>>('LayThongTinHeThongRap'),
  getLstCumRap: (maHeThongRap = "") => api.get<ApiResponse<LstCumRap[]>>(`LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP08`),
};


