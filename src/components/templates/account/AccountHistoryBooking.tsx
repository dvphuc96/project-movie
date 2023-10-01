import { useAuth } from "hooks";
import styled from "styled-components";
import { ThongTinDatVe } from "types";
import { formatDate } from "utils";

export const AccountHistoryBooking = () => {
  const { user } = useAuth();
  const renderBookingHistory = (): JSX.Element => {
    if (user?.thongTinDatVe) {
      return user?.thongTinDatVe?.map(
        (element: ThongTinDatVe, index: number) => {
          return (
            <DivContainer key={index} className="w-full flex-wrap box-border">
              <div>
                <h3>
                  Ngày đặt: {formatDate(element.ngayDat, "YYYY-MM-DD")} |{" "}
                  {formatDate(element.ngayDat, "HH:mm")}
                </h3>
              </div>
              <div>
                <h1 className="text-red-600">
                  Tên phim: {element.tenPhim.toLocaleUpperCase()}
                </h1>
              </div>
              <div>
                <h3 style={{ display: "inline-block" }}>
                  Thời lượng: {element.thoiLuongPhim} phút
                </h3>
                ,
                <h3 style={{ display: "inline-block" }}>
                  {" "}
                  Giá vé: {element.giaVe.toLocaleString()} VND
                </h3>
              </div>
              <div>
                <h1 className="text-green-600">
                  {element.danhSachGhe[0].tenHeThongRap}
                </h1>
              </div>
              <div>
                <h3 style={{ display: "inline-block" }}>
                {element.danhSachGhe[0].tenRap},
                </h3>
                <h3 style={{ display: "inline-block" }}>Ghế số: {element?.danhSachGhe?.map((item) => {
                  return (
                    <>{item.tenGhe}     </>
                  );
                })}</h3>
              </div>
              <div>
                <h3>
                  Tổng tiền: {(element.giaVe * element.danhSachGhe.length).toLocaleString()} VND
                </h3>
              </div>
            </DivContainer>
          );
        }
      );
    }
  };
  return (
    <div className="p-[20px]">
      <p className="text-20 font-600">Lịch sử đặt vé</p>
      <div className="py-[20px] flex-grow max-w-full">
        <HrCustom />
      </div>
      <div className="grid grid-cols-2">{renderBookingHistory()}</div>
    </div>
  );
};
const HrCustom = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
const DivContainer = styled.div`
  display: block;
  padding: 15px;
  position: relative;
  div {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    margin: 0;
    box-sizing: border-box;
    h1 {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.167;
      letter-spacing: -0.01562em;
      margin-bottom: 0.35em;
    }
    h3 {
      margin-bottom: 0.35em;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.167;
      letter-spacing: 0em;
    }
  }
`;
