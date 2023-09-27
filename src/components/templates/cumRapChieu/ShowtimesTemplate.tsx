import { PATH } from "constant";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CumRapChieu } from "types";
import { formatDate } from "utils";

export const ShowtimesTemplate = ({ cumRapChieu }) => {
  return (
    <div className="col-span-4 !text-white overflow-y-scroll h-[425px]">
      {cumRapChieu.map((item: CumRapChieu, index: number) => {
        return (
          <div key={index} className="p-8">
            <h3 className="text-16 text-[#f9ab00]">{item.tenCumRap}</h3>
            <div className="grid grid-cols-2">
              {item.lichChieuPhim.map((info, index) => {
                return (
                  <DivInfo key={index} background="#fff">
                    <span>C{info.tenRap.slice(-1)}</span>
                    <NavLink
                      to={PATH.purchase.replace(":id", info.maLichChieu)}
                    >
                      <p>{formatDate(info.ngayChieuGioChieu, "YYYY-MM-DD")}</p>
                      <p style={{ color: "gray" }}>&nbsp;~&nbsp;</p>
                      <p>{formatDate(info.ngayChieuGioChieu, "HH:mm")}</p>
                    </NavLink>
                  </DivInfo>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
// https://github.com/atlassian/react-beautiful-dnd/issues/1245
type DivInfoProps = {
  background?: string;
};
export const DivInfo = styled.div<DivInfoProps>`
  color: #9e9e9e;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  margin: 0px 16px 16px 0px;
  padding: 3px 15px;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${(props) => props.background || "#000"};
  span {
    color: #fff;
    display: inline-block;
    padding: 0 5px;
    font-size: 16px;
    min-width: 33px;
    background: #fb4226;
    text-align: center;
    margin-right: 8px;
    border-radius: 4px;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  p:first-child {
    color: #e99f00;
    font-size: 14px;
    font-weight: 500;
  }
  p:last-child {
    color: #fa5238;
  }
`;
