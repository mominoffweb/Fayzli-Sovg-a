import React from "react";
import Diningroom from "../assets/diningroom.svg";
import Kitchenroom from "../assets/Kitchenroom.svg";
import Bathroom2 from "../assets/bathroom2.svg";
import Bathroom1 from "../assets/bathroom.svg";
import Bigroom from "../assets/big-room.svg";
import Gradient from "../assets/Liner-gradient.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";

function Header() {
  return (
    <div className="section bg-[#181F28]">
      <div className="flex">
        <Swiper
          navigation={true}
          spaceBetween={50}
          modules={[EffectCube, Pagination, Navigation]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" relative ">
              <img src={Diningroom} alt="" />
              <span className=" absolute bottom-0 w-full h-[300px] liner"></span>
              <div className="absolute bottom-10 px-20    ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Hashamatli ichki dizayn
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative ">
              <img src={Kitchenroom} alt="" />
              <span className=" absolute bottom-0 w-full h-[300px] liner"></span>
              <div className="absolute bottom-10 px-16 ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Hashamatli ichki dizayn
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative ">
              <img src={Bathroom1} alt="" />
              <span className=" absolute bottom-0 w-full h-[300px] liner"></span>
              <div className="absolute bottom-10 px-16 ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Hashamatli ichki dizayn
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative ">
              <img src={Bathroom2} alt="" />
              <span className=" absolute bottom-0 w-full h-[300px] liner"></span>
              <div className="absolute bottom-10 px-16 ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Hashamatli ichki dizayn
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative ">
              <img src={Bigroom} alt="" />
              <span className=" absolute bottom-0 w-full h-[300px] liner"></span>
              <div className="absolute bottom-10 px-16  ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Hashamatli ichki dizayn
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="header_bg mt-24 ml-[7rem] ">
        <h2 className="text-[#DAB966] text-[50px] font-normal   leading-normal  flex justify-center items-center ml-[-5rem] ">
          Yangi mahsulotlar
        </h2>
      </div>
    </div>
  );
}

export default Header;
