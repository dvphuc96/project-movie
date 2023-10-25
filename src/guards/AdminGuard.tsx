import { PATH } from "constant";
import { useAuth } from "hooks";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface MiddleWare {
  children: ReactNode;
}

export const AdminGuard = (props: MiddleWare) => {
  const { user, accessToken } = useAuth();
  const navigate = useNavigate();
  if (!accessToken) {
    navigate(PATH.login);
  }
  if (user && user?.maLoaiNguoiDung !== "QuanTri") {
    Swal.fire({
      title: "Bạn không có quyền truy cập vào trang admin.",
      text: "Kiểm tra lại tài khoản nhé!",
      icon: "error",
      confirmButtonText: "Đồng ý",
      willClose: () => {
        navigate("/");
      },
    });
  }
  return <>{props.children}</>;
};
