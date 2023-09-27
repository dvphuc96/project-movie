import {z} from "zod";

export const UpdateAccountSchema = z.object({
    taiKhoan: z.string().nonempty("Vui lòng nhập tài khoản"),
    matKhau: z.string().nonempty("Vui lòng nhập mật khẩu"),
    email: z.string().nonempty("Vui lòng nhập email"),
    hoTen: z.string().nonempty("Vui lòng nhập họ tên"),
    soDt: z.string().nonempty("Vui lòng nhập số điện thoại"),
    maNhom: z.string().nonempty("Vui lòng nhập mã nhóm"),
    maLoaiNguoiDung: z.string().nonempty("Vui lòng nhập loại người dùng"),
})
export type UpdateAccountSchemaType = z.infer<typeof UpdateAccountSchema>;