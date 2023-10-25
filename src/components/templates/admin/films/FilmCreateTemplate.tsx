import { PlusOutlined } from "@ant-design/icons";
import {
  Input,
  Form,
  InputNumber,
  Switch,
  Upload,
  Button,
  DatePicker,
} from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFilmSchema, RegisterFilmSchemaType } from "schema";
import dayjs from "dayjs";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const FilmCreateTemplate = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFilmSchemaType>({
    mode: "all",
    resolver: zodResolver(RegisterFilmSchema),
  });
  const onSubmit: SubmitHandler<RegisterFilmSchemaType> = (values) => {
    console.log(values);
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
                <Input type="date" {...field}/>
                // <DatePicker
                //   ref={field.ref}
                //   name={field.name}
                //   onBlur={field.onBlur}
                //   value={field.value ? dayjs(field.value) : undefined}
                //   onChange={(date) => {
                //     field.onChange(date ? date.valueOf() : undefined);
                //   }}
                // />
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
            name="DangChieu"
            control={control}
            render={({ field }) => <Switch checked={field.value} />}
          />
          {errors.DangChieu && (
            <p className="text-red-500 font-600 text-15 mt-10">
              {errors?.DangChieu?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Controller
            name="SapChieu"
            control={control}
            render={({ field }) => <Switch checked={field.value} />}
          />
          {errors.SapChieu && (
            <p className="text-red-500 font-600 text-15 mt-10">
              {errors?.SapChieu?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Controller
            name="Hot"
            control={control}
            render={({ field }) => <Switch checked={field.value} />}
          />
          {errors.Hot && (
            <p className="text-red-500 font-600 text-15 mt-10">
              {errors?.Hot?.message}
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
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
