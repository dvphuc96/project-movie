import { apiInstance } from "constant/apiInstance";
import { Banner, Movie } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
  timeout: 30000,
});
export const quanLyPhimService = {
  // Moive[] định nghĩa là 1 mảng
  getMovieList: (query = "") =>
    api.get<ApiResponse<Movie[]>>(`/LayDanhSachPhim${query}`),
  getBannerList: () => api.get<ApiResponse<Banner[]>>("/LayDanhSachBanner"),
};
