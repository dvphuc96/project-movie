import { Button, Loading } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getTicketRoomListThunk } from "store/quanLyDatVe";
import {
  DivLeft,
  DivContainer,
  DivChair,
  ButtonChair,
  ButtonChairBooked,
  ButtonChairVip,
  DivRight,
  DivPadding,
  Divider,
  DivCinema,
  Title,
  Info,
} from "utils/styled";
import { handleError, handleLoading } from "utils";
import cn from "classnames";
import "./style_purchase.scss";
import { notification } from "antd";
import { quanLyDatVeService } from "services";
import Swal from "sweetalert2";
import { PATH } from "constant";

export const PurchaseTemplate = () => {
  const { id } = useParams<string>();
  const [chairList, setChairList] = useState([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { ticketRoomList, isFetchingTicketRoomList } = useSelector(
    (state: RootState) => state.quanLyDatVe
  );
  useEffect(() => {
    dispatch(getTicketRoomListThunk(id));
  }, [id, dispatch]);
  handleLoading(isFetchingTicketRoomList);
  if (isFetchingTicketRoomList) {
    return <Loading />;
  }
  const handleBookTicket = async () => {
    const data = {
      maLichChieu: +id,
      danhSachVe: chairList.map((element) => {
        return {
          maGhe: element.maGhe,
          giaVe: element.giaVe,
        };
      }),
    };
    try {
      await quanLyDatVeService.bookTicket(data);
      setChairList([]);
      Swal.fire({
        title: "Đặt vé thành công",
        text: "Kiểm tra trong lịch sử đặt vé",
        icon: "success",
        confirmButtonText: "Đồng ý",
      });
      navigate(PATH.account)
    } catch (err) {
      handleError(err);
    }
  };
  const renderChairList = () => {
    return ticketRoomList?.danhSachGhe?.map((chair, index) => {
      return (
        <ButtonChair
          key={index}
          className={cn("Chair", {
            vip: chair.loaiGhe === "Vip",
            booked: chair.daDat,
            booking: chairList.find((element) => element.maGhe === chair.maGhe),
          })}
          // onClick={() => {
          //   const index = chairList.findIndex(
          //     (element) => element?.maGhe === chair.maGhe
          //   );
          //   index !== -1 ? chairList.splice(index, 1) : chairList.push(chair);
          //   setChairList([...chairList]);
          // }}
          onClick={() =>
            setChairList((preState) => {
              // chọn full ghế
              // const index = chairList.findIndex(
              //   (element) => element?.maGhe === chair.maGhe
              // );
              // index !== -1 ? chairList.splice(index, 1) : chairList.push(chair);
              // return [...preState];

              // chọn tối đa 6 ghế
              const index = chairList.findIndex(
                (element) => element?.maGhe === chair.maGhe
              );
              const data = [...preState];
              index !== -1
                ? data.splice(index, 1)
                : data.length < 6
                ? data.push(chair)
                : notification.error({
                    message: "Bạn chỉ có thể chọn tối đa 6 ghế",
                    placement: "topRight",
                  });

              return data;
            })
          }
        >
          <span>{chair.tenGhe}</span>
        </ButtonChair>
      );
    });
  };
  const renderTotalPrice = () => {
    const total = chairList.reduce((total, element) => {
      total += element.giaVe;
      return total;
    }, 0);
    return `${total.toLocaleString()} VND`;
  };
  const items = [
    {
      title: "Cụm Rạp",
      info: ticketRoomList?.thongTinPhim?.tenCumRap,
    },
    {
      title: "Địa chỉ",
      info: ticketRoomList?.thongTinPhim?.diaChi,
    },
    {
      title: "Rạp",
      info: ticketRoomList?.thongTinPhim?.tenRap,
    },
    {
      title: "Ngày giờ chiếu",
      info: ticketRoomList?.thongTinPhim?.ngayChieu,
      gioChieu: ticketRoomList?.thongTinPhim?.gioChieu,
    },
    {
      title: "Tên Phim",
      info: ticketRoomList?.thongTinPhim?.tenPhim,
    },
  ];
  return (
    <div className="mx-auto w-full box-border grid grid-cols-3">
      <div className="grid col-span-2">
        <DivLeft>
          <DivContainer>
            <DivChair>
              <ButtonChairBooked>
                <span>X</span>
              </ButtonChairBooked>
              <p>Đã đặt</p>
            </DivChair>
            <DivChair>
              <ButtonChair />
              <p>Thường</p>
            </DivChair>
            <DivChair>
              <ButtonChairVip />
              <p>Vip</p>
            </DivChair>
          </DivContainer>
          <div style={{ width: "80%", margin: "0 auto" }}>
            {renderChairList()}
          </div>
        </DivLeft>
      </div>
      <div>
        <DivRight>
          <DivPadding>
            <p className="text-[35px] text-center text-[#f9ab00]">
              {renderTotalPrice()}
            </p>
          </DivPadding>
          <Divider />
          {items?.map((item, index) => {
            return (
              <div key={index}>
                <DivCinema>
                  <Title>{item.title}</Title>
                  <Info>
                    {item.info}
                    {item?.gioChieu && (
                      <span>
                        - <span className="text-red-600">{item?.gioChieu}</span>
                      </span>
                    )}
                  </Info>
                </DivCinema>
                <Divider />
              </div>
            );
          })}
          <DivCinema>
            <Title>Ghế: </Title>
            <Info>
              {chairList?.map((ele, index) => {
                return <span key={index}>Ghế {ele.tenGhe}, </span>;
              })}
            </Info>
          </DivCinema>
          <Divider />
          <Button
            className="!text-white w-full !text-[25px] !h-full !mt-[24px] !bg-red-500 !p-[12px] !rounded-none !border-none"
            onClick={() => handleBookTicket()}
          >
            Đặt vé
          </Button>
        </DivRight>
      </div>
    </div>
  );
};
