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
  thongTinDatVe?: [];
  loaiNguoiDung: {
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
  };
};

