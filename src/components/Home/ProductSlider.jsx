import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";

const products = [
  {
    name: "MỰC NANG",
    image: "/images/sanpham/VOZ_0003.png",
  },
  {
    name: "MỰC NÚT",
    image: "/images/sanpham/VOZ_0013.png",
  },
  {
    name: "BẠCH TUỘC",
    image: "/images/sanpham/mg-bachtuoc.JPG",
  },
  {
    name: "MỰC ỐNG",
    image: "/images/sanpham/VOZ_0067.png",
  },
  {
    name: "CÀNG CUA",
    image: "/images/sanpham/md-cangcua.JPG",
  },
  {
    name: "CÁ THU",
    image: "/images/sanpham/VOZ_0140.JPG",
  },
];

export default function ProductSlider() {
  return (
    <div className="product-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {products.map((item, key) => (
          <SwiperSlide key={key}>
            <div className="product-box">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
