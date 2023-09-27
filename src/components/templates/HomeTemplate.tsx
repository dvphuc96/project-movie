import { Banner, Card, Skeleton } from "components";
import { Button } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getMovieListThunk } from "store/quanLyPhim";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { movieList, isFetchingMovieList } = useSelector(
    (state: RootState) => state.quanLyPhim
  );
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, [dispatch]);
  if (isFetchingMovieList) {
    return (
      <>
        <Banner />
        <div className="grid grid-cols-4">
          {[...Array(12)].map((_, index) => {
            return (
              <Card className="!w-[350px] mt-20" key={index}>
                <Skeleton.Image className="!w-full !h-[250px]" />
                <Skeleton.Input className="!w-full mt-16" />
                <Skeleton.Input className="!w-full mt-16" />
              </Card>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <div>
      <Banner />
      <div className="container mx-auto mt-[100px]">
        <h2 className="mx-10 font-bold text-30 uppercase">Danh sách phim</h2>
        <div className="grid grid-cols-4">
          {movieList?.map((movie, index) => {
            return (
              <Card
                key={index}
                className="!mt-20 relative"
                hoverable
                style={{
                  width: 300,
                  margin: 10,
                  background: "transparent",
                }}
                onMouseEnter={() => {
                  document
                    .querySelector(`#play-button-${movie.maPhim}`)
                    .classList.add("opacity-100");
                }}
                onMouseLeave={() => {
                  document
                    .querySelector(`#play-button-${movie.maPhim}`)
                    .classList.remove("opacity-100");
                }}
                cover={
                  <div
                    className="w-full relative"
                    style={{
                      height: 425,
                      backgroundImage: `url(${movie.hinhAnh})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  >
                    <PlayIcon
                      id={`play-button-${movie.maPhim}`}
                      className="play-button flex justify-center items-center !absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 !transition-opacity !duration-300 ease-in-out"
                      type="primary"
                      shape="circle"
                      icon={
                        <i className="fa-solid fa-circle-play !text-[60px]" />
                      }
                    />
                    <span
                      className={`!absolute flex justify-center items-center border-2 border-solid border-transparent rounded-[50%] top-20 left-20 w-[36px] h-[36px] ${
                        Number(movie.danhGia) >= 8
                          ? "!border-green-600"
                          : Number(movie.danhGia) >= 6.5
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
                      {movie.danhGia}
                    </span>
                  </div>
                }
                loading={isFetchingMovieList}
                onClick={() =>
                  navigate(PATH.movieDetail.replace(":id", `${movie.maPhim}`))
                }
              >
                <Card.Meta
                  title={movie.tenPhim}
                  description={movie.moTa.substring(0, 70)}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const PlayIcon = styled(Button)`
  padding: 0;
  width: 70px !important;
  height: 70px !important;
  font-size: 34px !important;
  background-color: rgba(249, 171, 0, 0.5) !important;
  border-radius: 50% !important;
`;
