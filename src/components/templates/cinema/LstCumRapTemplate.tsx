import { Tabs } from "antd";
import { DanhSachPhimTemplate } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styled from "styled-components";

export const LstCumRapTemplate = () => {
  const { lstCumRap } = useSelector((state: RootState) => state.quanLyRap);
  const items = [];
  lstCumRap?.forEach((cumRap) => {
    return cumRap?.lstCumRap?.map((element, index) => {
      const cumRapObj = {
        label: (
          <ButtonCustom>
            <span>
              <div>
                <h4>{element.tenCumRap.substring(0,30)}...</h4>
                <h6>{element.diaChi}</h6>
                <p>[chi tiết]</p>
              </div>
            </span>
          </ButtonCustom>
        ),
        key: `cum-rap-${index}`,
        children: <DanhSachPhimTemplate danhSachPhim={element.danhSachPhim} />,
      };
      items.push(cumRapObj);
    });
  });
  const renderLstCumRap = () => {
    return (
      <Tabs
        tabPosition="left"
        items={items}
        style={{
          height: "656px",
          overflowY: "scroll",
        }}
      ></Tabs>
    );
  };
  return <div>{renderLstCumRap()}</div>;
};

const ButtonCustom = styled.button`
  width: 280px;
  height: 90px;
  padding: 20px 15px 15px 20px;
  position: relative;
  text-align: left;
  &::after {
    width: 80%;
    bottom: 0;
    height: 1px;
    content: '';
    display: block;
    position: absolute;
    background: rgba(238,238,238,.88);
  }
  span {
    display: unset;
    width: 100%;
  }
  h4 {
    color: #f9ab00;
    display: -webkit-box;
    overflow: hidden;
    font-weight: 500;
    line-height: 1.4;
    font-size: 14px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  h6 {
    color: #757575;
    display: -webkit-box;
    overflow: hidden;
    font-weight: 400;
    font-size: 12px;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  p {
    color: #fb4226;
    font-size: 12px;
    text-transform: lowercase;
    text-decoration: none;
  }
`;
