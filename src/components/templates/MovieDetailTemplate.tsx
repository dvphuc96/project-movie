import { ShowtimesTemplate } from "components";
import {
  Button,
  Card,
  ModalVideo,
  Skeleton,
  Tabs,
} from "components/ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState, useAppDispatch } from "store";
import { getMovieDetailThunk } from "store/quanLyRap";
import { formatDate } from "utils";

export const MovieDetailTemplate = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { movieDetail, isFetchingMovieDetail } = useSelector(
    (state: RootState) => state.quanLyRap
  );
  useEffect(() => {
    dispatch(getMovieDetailThunk(id));
  }, [id, dispatch]);

  const checkLength = () => {
    if (movieDetail?.trailer.includes("https://www.youtube.com/")) {
      return false;
    }
    return true;
  };
  const alertChooseCinema = () => {
    toast.warning('Vui lòng chọn rạp chiếu');
  }

  const items = movieDetail?.heThongRapChieu.map((rapChieu, index) => {
    return {
      label: <img src={rapChieu.logo} className="w-[50px] h-[50px]" />,
      key: `rap-phim-${index}`,
      children: <ShowtimesTemplate cumRapChieu={rapChieu.cumRapChieu} />,
    };
  });
  const renderHeThongRap = () => {
    return <Tabs tabPosition="left" items={items} />;
  };
  if (isFetchingMovieDetail) {
    return (
      <div className="container mx-auto mt-[100px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 px-[15px]">
            <Card className="!w-[350px] mt-20">
              <Skeleton.Image className=" !w-full !h-[325px]" />
              <Skeleton.Input className="!w-full mt-16" />
            </Card>
          </div>
          <div className="col-span-1 px-[15px]">
            <div className="flex">
              <div className="flex relative flex-none items center">
                <div className="flex flex-col">
                  <div className="px-8 pb-[40px] text-center">
                    <Skeleton.Image className="!max-w-full !h-auto w-[50px] rounded-6" />
                  </div>
                  <div className="px-8 pb-[40px] text-center">
                    <Skeleton.Image className="!max-w-full !h-auto w-[50px] rounded-6" />
                  </div>
                  <div className="px-8 pb-[40px] text-center">
                    <Skeleton.Image className="!max-w-full !h-auto w-[50px] rounded-6" />
                  </div>
                  <div className="px-8 pb-[40px] text-center">
                    <Skeleton.Image className="!max-w-full !h-auto w-[50px] rounded-6" />
                  </div>
                  <div className="px-8 pb-[40px] text-center">
                    <Skeleton.Image className="!max-w-full !h-auto w-[50px] rounded-6" />
                  </div>
                </div>
                <div className="!w-[410px]">
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                  <Skeleton.Button className="!px-[15px] !py-[3px] !w-[150px] !h-[45px] mt-0 ml-[16px] mb-[16px] mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          background: "url(/images/bg-detail.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "70px 0",
        }}
      >
        <div className="container mx-auto">
          <h2 className="flex-[1_1_100%] max-w-full font-400 text-22 text-white mb-20">
            {movieDetail?.tenPhim}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 px-[15px]">
              <div className="grid grid-cols-3">
                <div className="relative w-full col-span-1">
                  <div className="max-w-full flex flex-row items-center relative rounded-6 overflow-hidden">
                    <img
                      src={movieDetail?.hinhAnh}
                      alt={movieDetail?.biDanh}
                      className="w-full transition-opacity"
                    />
                    <span
                      className={`!absolute flex justify-center items-center border-2 border-solid border-transparent rounded-[50%] top-20 left-20 w-[36px] h-[36px] ${
                        Number(movieDetail?.danhGia) >= 8
                          ? "!border-green-600"
                          : Number(movieDetail?.danhGia) >= 6.5
                          ? "!border-yellow-400"
                          : "!border-rose-600"
                      }`}
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        background: "rgba(26, 25, 31, 0.6)",
                        fontWeight: 600,
                      }}
                    >
                      {movieDetail?.danhGia}
                    </span>
                  </div>
                  {!checkLength() && (
                    <Button
                      className="!flex !flex-row !justify-center !items-center !h-[46px] !w-full !max-w-[250px] !rounded-6 !bg-transparent !text-14 !text-white !uppercase !mt-20"
                      style={{ border: "2px solid #f9ab00" }}
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="fa-solid fa-circle-play !text-20 mr-10" />
                      Watch trailer
                    </Button>
                  )}
                </div>
                <div className="px-[15px] col-span-2">
                  <div className="relative flex flex-column justify-between items-start w-full">
                    <ul className="block text-16 text-white">
                      <li>{formatDate(movieDetail?.ngayKhoiChieu)}</li>
                      <li className="mt-10">{movieDetail?.moTa}</li>
                      <li className="mt-10">120 phút</li>
                    </ul>
                  </div>
                  <Button 
                  className="!mt-20 !text-white !bg-red-500 !hover:bg-red-700	!px-[20px] !rounded-6 !cursor-pointer !border-red-500"
                  onClick={() => alertChooseCinema()}
                  >
                    Mua vé
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 px-[15px]">
              <div className="mx-[15px] flex">
                <div>
                  <div className="max-w-full flex flex-row items-center relative rounded-6 overflow-hidden">
                    {renderHeThongRap()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={movieDetail?.trailer}
      />
    </>
  );
};
