import { Input, Form, InputNumber, Switch, Button } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFilmSchema, RegisterFilmSchemaType } from "schema";
import { DatePicker } from "components";
import { useState } from "react";
import { handleError } from "utils";
import { quanLyPhimService } from "services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const FilmCreateTemplate = () => {
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<RegisterFilmSchemaType>({
    mode: "all",
    resolver: zodResolver(RegisterFilmSchema),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeFile = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    }
    const file = target?.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/jpg"
    ) {
      const reader = new FileReader;
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e?.target?.result);
      };
    }
  };
  const onSubmit: SubmitHandler<RegisterFilmSchemaType> = async (values) => {
    const formData = new FormData();
    for(const key in values) {
      if(key !== 'hinhAnh') {
        formData.append(key, values[key])
      } else {
        formData.append('File', values.hinhAnh, values.hinhAnh.name)
      }
    }
    try {
      await quanLyPhimService.createMovie(formData);
      toast.success("Tạo phim thành công!");
      navigate(PATH.film);
    } catch (errors) {
      handleError(errors);
    }
  };
  return (
    <>
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
            defaultValue=""
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
          <Controller
            name="ngayKhoiChieu"
            control={control}
            render={({ field }) => {
              return (
                <DatePicker
                  picker="date"
                  format="DD/MM/YYYY"
                  onChange={(_, dateString) => {
                    field.onChange(dateString);
                  }}
                />
              );
            }}
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
            render={({ field }) => (
              <Switch {...field} checked={!!field.value} />
            )}
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
            render={({ field }) => (
              <Switch {...field} checked={!!field.value} />
            )}
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
            render={({ field }) => (
              <Switch {...field} checked={!!field.value} />
            )}
          />
          {errors.hot && (
            <p className="text-red-500 font-600 text-15 mt-10">
              {errors?.hot?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Số sao">
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
          <button type="submit">
            Submit
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
