import { PATH } from "constant";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DanhSachPhim } from "types";
import { formatDate } from "utils";

export const DanhSachPhimTemplate = ({ danhSachPhim }) => {
  return (
    <div>
      {danhSachPhim?.map((ele: DanhSachPhim, index: number) => {
        return (
          <DivCustom key={index}>
            <div>
              <img src={ele.hinhAnh} alt={ele.hinhAnh} />
              <div>
                <h2>{ele.tenPhim}</h2>
                <div className="!grid !grid-cols-2 !px-0">
                  {(ele.lstLichChieuTheoPhim?.length > 4
                    ? ele.lstLichChieuTheoPhim.slice(0, 4)
                    : ele.lstLichChieuTheoPhim
                  )?.map((phim, index) => {
                    return (
                      <ShowTimes
                        key={index}
                        href={PATH.purchase.replace(
                          ":id",
                          `${phim.maLichChieu}`
                        )}
                      >
                        <span>C{phim.tenRap.slice(-1)}</span>
                        <div>
                          <p>
                            {formatDate(phim.ngayChieuGioChieu, "YYYY-MM-DD")}
                          </p>
                          <p style={{ color: "gray" }}>&nbsp;~&nbsp;</p>
                          <p>{formatDate(phim.ngayChieuGioChieu, "HH:mm")}</p>
                        </div>
                      </ShowTimes>
                    );
                  })}
                </div>
              </div>
            </div>
          </DivCustom>
        );
      })}
    </div>
  );
};

const DivCustom = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  border-left: none;
  div {
    display: flex;
    padding: 20px;
    position: relative;
    img {
      width: 100px;
      height: 126px;
    }
    div {
      display: block;
      padding: 0 20px;

      h2 {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 8px;
        width: 100%;
      }
    }
  }
  > div {
    &::after {
      width: 80%;
      bottom: 0;
      height: 1px;
      content: "";
      display: block;
      position: absolute;
      background: rgba(238, 238, 238, 0.88);
    }
  }
`;

const ShowTimes = styled.a`
  color: #9e9e9e;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  margin: 0px 16px 16px 0px;
  padding: 3px 15px !important;
  border-radius: 4px;
  text-decoration: none !important;
  background-color: rgba(246, 246, 246, 0.5) !important;
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
    display: flex !important;
    align-items: center;
    text-decoration: none;
    padding: 0 !important;
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
