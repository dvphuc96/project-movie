import { z } from "zod";

export const RegisterSchema = z.object({
  taiKhoan: z
    .string()
    .nonempty("Vui lòng nhập tài khoản")
    .min(6, "Nhập tối thiếu 6 chữ ký tự")
    .max(20, "Nhập tối đa 20 chữ ký tự"),
  matKhau: z.string().nonempty("Vui lòng nhập mật khẩu"),
  email: z.string().nonempty("Vui lòng nhập email").email('Vui lòng nhập đúng định dạng email'),
  hoTen: z.string().nonempty("Vui lòng nhập họ tên"),
  soDt: z.string().nonempty("Vui lòng nhập số điện thoại"),
  maNhom: z.string().nonempty("Vui lòng nhập mã nhóm"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
