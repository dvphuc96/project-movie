import { apiInstance } from "constant/apiInstance";
import { Banner, Movie, MovieListPagination } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
  timeout: 30000,
});
export const quanLyPhimService = {
  // Moive[] định nghĩa là 1 mảng
  getMovieList: (query: string = "") =>
    api.get<ApiResponse<Movie[]>>(`/LayDanhSachPhim${query}`),
  getBannerList: () => api.get<ApiResponse<Banner[]>>("/LayDanhSachBanner"),
  // Manag
  getMovieListPagination: (query = "") =>
    api.get<ApiResponse<MovieListPagination>>(
      `/LayDanhSachPhimPhanTrang?${query}`
    ),
  deleteMovie: (maPhim: number) => api.delete(`/XoaPhim?MaPhim=${maPhim}`),
};
