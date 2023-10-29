import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber, Switch } from "antd";
import { Loading } from "components";
import { PATH } from "constant";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateOrUpdateFilmSchema, CreateOrUpdateFilmSchemaType } from "schema";
import { quanLyPhimService } from "services";
import { RootState, useAppDispatch } from "store";
import { getMovieDetailThunk } from "store/quanLyRap";
import { handleError, handleLoading } from "utils";

export const FilmUpdateTemplate = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { movieDetail, isFetchingMovieDetail } = useSelector(
    (state: RootState) => state.quanLyRap
  );
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>("");
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm<CreateOrUpdateFilmSchemaType>({
    mode: "all",
    resolver: zodResolver(CreateOrUpdateFilmSchema),
  });
  useEffect(() => {
    dispatch(getMovieDetailThunk(id));
    setImgSrc(movieDetail?.hinhAnh);
  }, [id, dispatch, movieDetail?.hinhAnh]);
  useEffect(() => {
    reset({
      ...movieDetail,
      ngayKhoiChieu: dayjs(movieDetail?.ngayKhoiChieu).format("YYYY-MM-DD"),
    });
  }, [movieDetail, reset]);
  handleLoading(isFetchingMovieDetail);
  if (isFetchingMovieDetail) {
    return <Loading />;
  }
  const handleChangeFile = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    const file = target?.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e?.target?.result);
      };
    }
  };
  const onSubmit: SubmitHandler<CreateOrUpdateFilmSchemaType> = async (
    values
  ) => {
    values.maPhim = Number(id);
    values.maNhom = "GP01";
    const formData = new FormData();
    for (const key in values) {
      if (key === "hinhAnh") {
        if (typeof values.hinhAnh === "object") {
          formData.append("File", values.hinhAnh[0], values.hinhAnh.name);
        } else {
          formData.delete("hinhAnh");
        }
      } else if (key === "ngayKhoiChieu") {
        formData.append(
          "ngayKhoiChieu",
          dayjs(values.ngayKhoiChieu).format("DD/MM/YYYY")
        );
      } else {
        formData.append(key, values[key]);
      }
    }
    try {
      await quanLyPhimService.updateMovie(formData);
      toast.success("Cập nhật phim thành công!");
      navigate(PATH.film);
    } catch (errors) {
      handleError(errors);
    }
  };
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
      onSubmitCapture={handleSubmit(onSubmit)}
    >
      <Form.Item label="Tên phim">
        <Controller
          name="tenPhim"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.tenPhim && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.tenPhim?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Trailer">
        <Controller
          name="trailer"
          defaultValue=""
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.trailer && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.trailer?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Mô tả">
        <Controller
          name="moTa"
          defaultValue=""
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.moTa && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.moTa?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <input
          type="date"
          size={12}
          placeholder="Select date"
          style={{
            width: 145,
            padding: "4px 11px",
            border: "1px solid #d9d9d9",
            borderRadius: 6,
          }}
          {...register("ngayKhoiChieu")}
        />
        {errors.ngayKhoiChieu && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.ngayKhoiChieu?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Controller
          name="dangChieu"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch {...field} checked={!!field.value} />}
        />
        {errors.dangChieu && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.dangChieu?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Controller
          name="sapChieu"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch {...field} checked={!!field.value} />}
        />
        {errors.sapChieu && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.sapChieu?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Controller
          name="hot"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch {...field} checked={!!field.value} />}
        />
        {errors.hot && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.hot?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Đánh giá">
        <Controller
          name="danhGia"
          control={control}
          render={({ field }) => <InputNumber {...field} />}
        />
        {errors.danhGia && (
          <p className="text-red-500 font-600 text-15 mt-10">
            {errors?.danhGia?.message}
          </p>
        )}
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input
          type="file"
          {...register("hinhAnh")}
          accept="image/jpeg, image/png, image/gif, image/jpg"
          onChange={handleChangeFile}
        />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
};
