import { Tabs } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getCinemaListThunk, getLstCumRapThunk } from "store/quanLyRap";
import { LstCumRapTemplate } from "components";
import styled from "styled-components";

export const CinemaTemplate = () => {
  const dispatch = useAppDispatch();
  const { cinemaList } = useSelector((state: RootState) => state.quanLyRap);
  useEffect(() => {
    dispatch(getCinemaListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLstCumRapThunk("BHDStar"));
  }, [dispatch]);
  const items = cinemaList?.map((cinema, index) => {
    return {
      label: (
        <ButtonLabelCustom
          onClick={() => {
            dispatch(getLstCumRapThunk(cinema.maHeThongRap));
          }}
        >
          <span className="w-full items-center inline-flex flex-column justify-center">
            <div className="w-[50px] h-[50px]">
              <img
                src={cinema.logo}
                className="w-full h-full object-cover text-center"
              />
            </div>
          </span>
        </ButtonLabelCustom>
      ),
      key: `cinema-${index}`,
      children: <LstCumRapTemplate />,
    };
  });
  const renderCinemaList = () => {
    return (
      <Tabs
        tabPosition="left"
        items={items}
        style={{
          height: "656px",
          overflowY: "scroll",
        }}
      />
    );
  };
  return (
    <div className="container mx-auto mt-[40px] max-w-[960px] border border-inherit">
      {renderCinemaList()}
    </div>
  );
};

const ButtonLabelCustom = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: unset;
  padding: 20px;
  &::after {
    width: 80%;
    bottom: 0;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background: rgba(238, 238, 238, 0.88);
  }
`;
