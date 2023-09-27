import styled from "styled-components";
import { DanhSachPhim } from "types";

export const DanhSachPhimTemplate = ({ danhSachPhim }) => {
  return (
    <div>
      {danhSachPhim?.map((ele: DanhSachPhim, index: number) => {
        return <DivCustom key={index}>
            <div>
                <img src={ele.hinhAnh} alt={ele.hinhAnh} />
                <div>
                <h2>{ele.tenPhim}</h2>
                </div>
                {/* {
                    ele.lstLichChieuTheoPhim?.map((lichChieu) => {
                        return (
                            <div>
                                <h2><span>C{lichChieu.tenRap.slice(-1)}</span>
                            {ele.tenPhim}
                            </h2>
                            </div>
                        )
                    })
                } */}
            </div>
        </DivCustom>;
      })}
    </div>
  );
};

const DivCustom = styled.div`
  width: 540px;
  border: 1px solid #e0e0e0;
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
      width: 555px;
      padding: 0 20px;
      h2 {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 8px;
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
      }
      div {
        display: flex;
        flex-wrap: wrap;
        a {
          color: #9e9e9e;
          width: 45%;
          border: 1px solid #e4e4e4;
          cursor: pointer;
          margin: 0px 16px 16px 0px;
          padding: 8px;
          border-radius: 4px;
          text-decoration: none;
          background-color: rgba(246, 246, 246, 0.5);
          p:first-child {
            color: #e99f00;
            font-size: 14px;
            font-weight: 500;
          }
          p:last-child {
            color: #fa5238;
          }
        }
      }
    }
  }
`;
