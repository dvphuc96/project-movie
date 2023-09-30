import { PATH } from "constant";
import styled from "styled-components";
import { CumRapChieu, LichChieuPhim } from "types";
import { formatDate } from "utils";

export const ShowtimesTemplate = ({cumRapChieu}): JSX.Element => {
  return (
    <div className="col-span-4 !text-white overflow-y-scroll h-[425px]">
      {cumRapChieu.map((item: CumRapChieu, index: number) => {
        return (
          <div key={index} className="px-[20px]">
            <h3 className="text-16 text-[#f9ab00]">{item.tenCumRap}</h3>
            <div className="grid grid-cols-2">
              {item.lichChieuPhim.map((info:LichChieuPhim, index:number) => {
                return (
                  <LinkCustom
                    key={index}
                    background="#fff"
                    href={PATH.purchase.replace(":id", info.maLichChieu)}
                  >
                    <span>C{info.tenRap.slice(-1)}</span>
                    <div>
                      <p>{formatDate(info.ngayChieuGioChieu, "YYYY-MM-DD")}</p>
                      <p style={{ color: "gray" }}>&nbsp;~&nbsp;</p>
                      <p>{formatDate(info.ngayChieuGioChieu, "HH:mm")}</p>
                    </div>
                  </LinkCustom>
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
export const LinkCustom = styled.a<DivInfoProps>`
  color: #9e9e9e !important;
  border: 1px solid #e4e4e4;
  cursor: pointer !important;
  margin: 0px 16px 16px 0px;
  padding: 3px 15px;
  border-radius: 4px;
  text-decoration: none !important;
  background-color: ${(props) => props.background || "#000"} !important;
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
  div {
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
