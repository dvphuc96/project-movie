import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";

export const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <WrapperSpin>
      <Spin size="large" indicator={antIcon} />
    </WrapperSpin>
  );
};

const WrapperSpin = styled.div`
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  background: #fff;
  width: 100%;
  z-index: 999;
`;
