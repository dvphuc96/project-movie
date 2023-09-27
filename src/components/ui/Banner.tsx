import { useEffect } from "react";
import { RootState, useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { getBannerListThunk } from "store/quanLyPhim";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Banner = () => {
  const dispatch = useAppDispatch();
  const { bannerList } = useSelector((state: RootState) => state.quanLyPhim);
  useEffect(() => {
    dispatch(getBannerListThunk());
  }, [dispatch]);
  const renderBannerList = () => {
    return bannerList?.map((banner) => {
      return (
        <SwiperSlide key={banner.maPhim}>
          <img src={banner.hinhAnh} alt={banner.hinhAnh} />
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="h-auto">
      <Swiper
        style={{ height: 507 }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {renderBannerList()}
      </Swiper>
    </div>
  );
};
