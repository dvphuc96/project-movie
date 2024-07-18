import { Banner, Card, Loading } from "components";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { getBannerListThunk, getMovieListThunk } from "store/quanLyPhim";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { handleLoading } from "utils";
import { Movie } from "types";
import { useQueryParams, useAppSelector } from "hooks";

export const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [queryParams, setQueryParams] = useQueryParams();
  const { movieList, isFetchingMovieList, bannerList } = useAppSelector(
    (state) => state.quanLyPhim
  );
  const movieSearch = movieList?.filter((element: Movie) =>
    element.tenPhim.toLowerCase().includes(queryParams?.tenPhim?.toLowerCase())
  );
  useEffect(() => {
    dispatch(getMovieListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBannerListThunk());
  }, [dispatch]);
  handleLoading(isFetchingMovieList);
  if (isFetchingMovieList) {
    return <Loading />;
  }
  return (
    <div>
      <Banner banners={bannerList} />
      <div className="container mx-auto mt-[100px]">
        <div className="flex justify-between items-center">
          <h2 className="mx-10 font-bold text-30 uppercase">Danh sách phim</h2>
          <Search>
            <input
              className="p-10 w-full rounded-6 bg-[#333] mt-8 text-white"
              value={inputValue}
              placeholder="Tìm kiếm tên phim"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                setQueryParams({
                  tenPhim: inputValue || undefined,
                });
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Search>
        </div>
        <div className="grid grid-cols-4">
          {(queryParams?.tenPhim ? movieSearch : movieList)?.map(
            (movie: Movie, index: number) => {
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
            }
          )}
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

const Search = styled.div`
  margin-right: 10px;
  border: 1px solid #111;
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;

  input {
    margin-top: 0;
    background: transparent;
    color: #111;
    outline: none;
  }

  button {
    height: 46px !important;
    border: none !important;
    border-radius: initial;
    background: #111 !important;
    border-radius: 0 !important;
    color: #fff !important;
    &:hover {
      color: var(--primary-color) !important;
    }
  }
`;
