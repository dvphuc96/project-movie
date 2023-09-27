import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getCinemaListThunk } from "store/quanLyRap";
import { LstCumRapTemplate } from "components";

export const CinemaTemplate = () => {
  const dispatch = useAppDispatch();
  const { cinemaList, isFetchingCinema } = useSelector(
    (state: RootState) => state.quanLyRap
  );
  const [activeKey, setActivekey] = useState("");
  useEffect(() => {
    dispatch(getCinemaListThunk());
  }, [dispatch]);
  console.log(dispatch)
  const items = cinemaList?.map((cinema,index) => {
    return {
      label: (
        <button className="p-8">
          <span className="w-full items-center inline-flex flex-column justify-center">
            <div className="w-[50px] h-[50px]">
              <img
                src={cinema.logo}
                className="w-full h-full object-cover text-center"
              />
            </div>
          </span>
        </button>
      ),
      key: `cinema-${index}`,
      children: <LstCumRapTemplate maHeThongRap={activeKey} />,
    };
  });
  console.log('activeKey', activeKey)
  const renderCinemaList = () => {
    return <Tabs tabPosition="left" items={items} />;
  };
  return (
    <div className="container mx-auto mt-[40px] max-w-[960px]">
      {renderCinemaList()}
    </div>
  );
};
