export type Movie = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

export type Banner = {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
};

export type MovieListPagination = {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Movie[];
};
