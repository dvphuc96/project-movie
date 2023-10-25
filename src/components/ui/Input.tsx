import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  className?: string;
  label?: string;
  id?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  name?: string;
  error?: string;
  disabled?: boolean;
};
export const Input = ({
  className = "",
  label,
  id,
  type = "text",
  placeholder,
  register,
  name,
  error,
  disabled = false,
}: InputProps) => {
  return (
    <div className={className}>
      {!!label && (
        <label className="text-white" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="p-10 w-full rounded-6 bg-[#333] mt-8 text-white"
        // validate thuần của react hook form
          // {...register("taiKhoan", {
          //   required: "Vui lòng nhập tài khoản",
          //   maxLength: {
          //       value: 20,
          //       message: "Không nhập quá 20 ký tự",
          //   },
          // })}
        {...register?.(name)}
        disabled={disabled}
      />
      {!!error && (
        <p className="text-red-500 font-600 text-15 mt-10">{error}</p>
      )}
    </div>
  );
};
// export default Input;
