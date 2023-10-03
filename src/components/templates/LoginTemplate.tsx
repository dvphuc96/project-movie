import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema, LoginSchemaType } from "schema";
import { RootState, useAppDispatch } from "store";
import { loginThunk } from "store/quanLyNguoiDung/thunk";
import { handleError, storage } from "utils";

export const LoginTemplate = () => {
  const navigate = useNavigate();
  // khai báo
  const { isFetchingLogin } = useSelector(
    (state: RootState) => state.quanLyNguoiDung
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  // react toolkit ko sử dụng trực tiếp được useDispatch, phải tự custom hook (useAppDispatch)
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (values) => {
    // dispatch 1 action thunk
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Đăng Nhập Thành Công");
        navigate("/");
      })
      .catch((error) => {
        handleError(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-[30px] text-white">Đăng Nhập</h2>
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
      <Button
        htmlType="submit"
        type="primary"
        danger
        className="!w-full !h-[48px] mt-20 rounded-10"
        loading={isFetchingLogin}
      >
        Đăng Nhập
      </Button>
    </form>
  );
};
