import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "components";
import { PATH } from "constant";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { quanLyNguoiDungService } from "services";
import { handleError } from "utils";

export const RegisterTemplate = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    // mode:"all",
    // mode: "onSubmit"
    // mode: "onSubmit"
    // mode: "onTouched"
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  //   formState: { errors } ~ const errors = formState
  console.log({ errors });
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      await quanLyNguoiDungService.register(values);
      toast.success("Đăng ký thành công!");
      // redirect to login page
      navigate(PATH.login);
    } catch (errors) {
      // toast.error(errors?.response?.data?.content);
      handleError(errors);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-[30px] text-white">Register</h2>
      <Input
        className="mt-16"
        label="Tài Khoản"
        id="taiKhoan"
        placeholder="Vui lòng nhập tài khoản"
        register={register}
        name="taiKhoan"
        error={errors?.taiKhoan?.message}
      />
      <Input
        className="mt-16"
        label="Mật Khẩu"
        id="matKhau"
        type="password"
        placeholder="Vui lòng nhập mật khẩu"
        register={register}
        name="matKhau"
        error={errors?.matKhau?.message}
      />
      <Input
        className="mt-16"
        label="Email"
        id="email"
        placeholder="Vui lòng nhập email"
        register={register}
        name="email"
        error={errors?.email?.message}
      />
      <Input
        className="mt-16"
        label="Họ Tên"
        id="hoTen"
        placeholder="Vui lòng nhập họ tên"
        register={register}
        name="hoTen"
        error={errors?.hoTen?.message}
      />
      <Input
        className="mt-16"
        label="Số điện thoại"
        id="soDt"
        placeholder="Vui lòng nhập số điện thoại"
        register={register}
        name="soDt"
        error={errors?.soDt?.message}
      />
      <Input
        className="mt-16"
        label="Số điện thoại"
        id="maNhom"
        placeholder="Vui lòng nhập mã nhóm"
        register={register}
        name="maNhom"
        error={errors?.maNhom?.message}
      />
      <Button
        htmlType="submit"
        type="primary"
        danger
        className="!w-full !h-[48px] mt-20 rounded-10"
      >
        Đăng Ký
      </Button>
    </form>
  );
};
