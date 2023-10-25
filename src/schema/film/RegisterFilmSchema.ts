import { z } from "zod";

export const RegisterFilmSchema = z.object({
  tenPhim: z.string().nonempty("Vui lòng nhập tên phim"),
  trailer: z.string().nonempty("Vui lòng nhập trailer"),
  moTa: z.string().nonempty("Vui lòng nhập mô tả"),
  ngayKhoiChieu: z.string(),
  DangChieu: z.boolean(),
  SapChieu: z.boolean(),
  Hot: z.boolean(),
  danhGia: z.number(),
});

export type RegisterFilmSchemaType = z.infer<typeof RegisterFilmSchema>;
