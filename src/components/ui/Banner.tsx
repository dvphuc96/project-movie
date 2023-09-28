import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Banner as BannerType } from "types";

export const Banner = ({ banners }) => {
  const renderBannerList = () => {
    return banners?.map((banner: BannerType) => {
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
