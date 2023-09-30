export type ThongTinPhongVe = {
  thongTinPhim: ThongTinPhim;
  danhSachGhe: DanhSachGhe[];
};

export type DanhSachGhe = {
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: "Thuong" | "Vip";
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: null | string;
};

export type ThongTinPhim = {
  maLichChieu: number;
  tenCumRap: string;
  tenRap: string;
  diaChi: string;
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
  gioChieu: string;
};

export type BookTicket = {
  maLichChieu: number;
  danhSachVe: ThongTinVe[];
}

export type ThongTinVe = {
  maGhe: number;
  giaVe: number;
}
