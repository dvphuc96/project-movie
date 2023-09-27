import { Button as ButtonAntd, ButtonProps as ButtonPropsAntd } from "antd";

type ButtonProps = ButtonPropsAntd & {
    // định nghĩa props mình muốn truyền xuống, giống bên Input
    // https://ant.design/components/button
};

export const Button = (props: ButtonProps) => {
  return <ButtonAntd {...props} />;
};
