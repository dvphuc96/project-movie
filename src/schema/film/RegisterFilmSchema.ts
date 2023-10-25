import { z } from "zod";

export const RegisterFilmSchema = z.object({
  tenPhim: z.string().nonempty("Vui lòng nhập tên phim"),
  trailer: z.string().nonempty("Vui lòng nhập trailer"),
  moTa: z.string().nonempty("Vui lòng nhập mô tả"),
  ngayKhoiChieu: z.string().nonempty("Vui lòng chọn ngày khởi chiếu"),
  dangChieu: z.boolean().optional(),
  sapChieu: z.boolean().optional(),
  hot: z.boolean().optional(),
  danhGia: z.number(),
  hinhAnh: z.any(),
});

export type RegisterFilmSchemaType = z.infer<typeof RegisterFilmSchema>;
