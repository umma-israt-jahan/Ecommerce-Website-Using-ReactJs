import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

// import required modules
import { Pagination, Grid } from "swiper";
import { SliderProducts } from "../../data/products";

/* styles instead of using class */
const containerStyle = {
  marginTop: "2rem",
};
const imageStyle = {
  objectFit: "contain",
  maxHeight: "300px",
};
const layout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function Carousel() {

  return (
    <div style={{ ...containerStyle }}>
      {/* Write down hading here of this section */}
      <div></div>

      {/* slider */}
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {SliderProducts?.map((item, index) => (
          <SwiperSlide>
            <img src={item?.img} alt={item?.name} style={{ ...imageStyle }} />

            <div style={{padding:"5px 25px 25px 25px", textAlign:"left", }}>
              <div style={layout}>
                <h4 style={{ color: "black" }}>{item?.name}</h4>
                <h4>$ {item?.price}</h4>
              </div>
              <small style={{fontWeight:"300px"}}>{item?.detail}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

