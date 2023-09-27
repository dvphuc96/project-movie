import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components/ui";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateAccountSchema, UpdateAccountSchemaType } from "schema";
import { handleError } from "utils";
import { quanLyNguoiDungService } from "services";
import { toast } from "react-toastify";
import { getUserByAccessTokenThunk } from "store/quanLyNguoiDung/thunk";
import { useAppDispatch } from "store";
import { styled } from "styled-components";
export const AccountInfo = () => {
  const { user } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(UpdateAccountSchema),
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    reset({
      ...user,
      // viết như này thì ở input có thể sử dụng soDt
      soDt: user?.soDT,
    });
  }, [user, reset]);

  const onSubmit: SubmitHandler<UpdateAccountSchemaType> = async (values) => {
    try {
      await quanLyNguoiDungService.update(values);
      toast.success("Cập nhật thành công!");
      // goi api getUserByAccessToken
      dispatch(getUserByAccessTokenThunk());
    } catch (errors) {
      handleError(errors);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-20 font-600"> Thông tin tài khoản</p>
      <InputStyled
        label="Tài Khoản"
        name="taiKhoan"
        register={register}
        error={errors?.taiKhoan?.message}
        disabled={true}
      />
      <InputStyled
        label="Họ tên"
        name="hoTen"
        register={register}
        error={errors?.hoTen?.message}
      />
      <InputStyled
        label="Email"
        name="email"
        register={register}
        error={errors?.email?.message}
      />
      <InputStyled
        label="Số điện thoại"
        name="soDt"
        register={register}
        error={errors?.soDt?.message}
      />
      <InputStyled
        label="Mã nhóm"
        name="maNhom"
        register={register}
        error={errors?.maNhom?.message}
      />
      <InputStyled
        label="Mã loại người dùng"
        name="maLoaiNguoiDung"
        register={register}
        error={errors?.maLoaiNguoiDung?.message}
        disabled={true}
      />
      <div className="text-right mt-20">
        <Button htmlType="submit" type="primary" className="h-[46px] ">
          Update
        </Button>
      </div>
    </form>
  );
};
const InputStyled = styled(Input)`
  label {
    color: #000;
  }
  input {
    background: transparent;
    border: 1px solid #000;
    color: #000;
    &:disabled {
      background: #c6c6c6;
      cursor: not-allowed;
      border: 1px solid #c6c6c6;
    }
  }
`;
