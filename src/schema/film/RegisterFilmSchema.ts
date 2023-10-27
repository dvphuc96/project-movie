import { z } from "zod";

export const RegisterFilmSchema = z.object({
  tenPhim: z.string().nonempty("Vui lòng nhập tên phim"),
  trailer: z.string().nonempty("Vui lòng nhập trailer"),
  moTa: z.string().nonempty("Vui lòng nhập mô tả"),
  ngayKhoiChieu: z.string({
    required_error: "Vui lòng chọn ngày khởi chiếu",
    invalid_type_error: "Vui lòng nhập đúng định dạng (DD/MM/YYYY)",
  }),
  dangChieu: z.boolean().optional(),
  sapChieu: z.boolean().optional(),
  hot: z.boolean().optional(),
  danhGia: z.number({
    required_error: 'Vui lòng nhập đánh giá',
    invalid_type_error: 'Đánh giá phải là số',
  }),
  hinhAnh: z.any(),
});

export type RegisterFilmSchemaType = z.infer<typeof RegisterFilmSchema>;
