export type UserLogin = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: "KhachHang" | "QuanTri";
  accessToken: string;
};
// Omit<UserLogin, "accessToken" | "maNhom"> // remove 2 key này ra khỏi UserLogin
export type UserByAccessToken = Omit<UserLogin, "accessToken"> & {
  thongTinDatVe?: ThongTinDatVe[];
  loaiNguoiDung: {
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
  };
};

export type ThongTinDatVe = {
  danhSachGhe: DanhSachGhe[];
  maVe: number;
  ngayDat: Date;
  tenPhim: string;
  hinhAnh: string;
  giaVe: number;
  thoiLuongPhim: number;
};

export type DanhSachGhe = {
  maHeThongRap: string;
  tenHeThongRap: string;
  maCumRap: string;
  tenCumRap: string;
  maRap: number;
  tenRap: string;
  maGhe: number;
  tenGhe: string;
};
