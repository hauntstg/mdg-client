// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "../../data/slides";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageList.css";

export default function ImageList() {
  return (
    <div className="hero-wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides
        spaceBetween={24}
        loop
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        pagination={{ clickable: true, el: ".hero-pager" }}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <article className="slide-card">
              <img src={s.src} alt={s.title} />
              {/* Play overlay nếu là video/CTA */}
              <button className="play-btn" aria-label="Play video" />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* arrows & pager */}
      <button className="hero-prev" aria-label="Prev"></button>
      <button className="hero-next" aria-label="Next"></button>
      <div className="hero-pager"></div>
    </div>
  );
}
