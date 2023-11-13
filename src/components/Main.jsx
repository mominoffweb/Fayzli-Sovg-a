import { React, useState } from "react";
import Bathroom from "../images/main_images.png";
import Mebel1 from "../images/Frame1.png";
import Mebel2 from "../images/Frame2.png";
import Mebel3 from "../images/Frame3.png";
import Mebel4 from "../images/Frame4.png";
import Mebel5 from "../images/Frame5.png";
import Mebel6 from "../images/Frame6.png";
import Mebel7 from "../images/Frame7.png";
import Mebel8 from "../images/Frame8.png";
import Mebel9 from "../images/Frame9.png";
import Mebel10 from "../images/Frame10.png";
import Mebel11 from "../images/Frame11.png";
import Mebel12 from "../images/Frame12.png";
import Mebel13 from "../images/Frame13.png";
import Mebel14 from "../images/Frame14.png";
import Mebel15 from "../images/Frame15.png";
import Mebel16 from "../images/Frame16.png";
import Logo from "../images/Logo2.svg";
import img1 from "../images/imgg1.png";
import img2 from "../images/imgg2.png";
import property from "../Image/Property.png";
import Group from "../Image/Group.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, EffectFade, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";

function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="bg-[#181F28] px-16  ">
      <div className="  grid grid-cols-2 gap-16 cursor-pointer p-16 justify-center items-center ">
        <div data-aos="fade-right">
          <div className="relative overflow-hidden">
            <img
              className=" property   w-[500px] h-[400px]"
              src={property}
              alt=""
            />
            <img className=" absolute z-50  restengle" src={Group} alt="" />
            <button className="text-white  rounded-[7px] bg-[#DAB966] w-[500px] mt-[-3rem] h-[60px] text-[30px] leading-normal font-normal uppercase ">
              biz bilan Bog’lanish
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="relative overflow-hidden">
            <img
              className=" property   w-[500px] h-[400px]"
              src={property}
              alt=""
            />
            <img className=" absolute z-50  restengle" src={Group} alt="" />
            <button className="text-white  rounded-[7px] bg-[#DAB966] w-[500px] mt-[-3rem] h-[60px] text-[30px] leading-normal font-normal uppercase ">
              biz bilan Bog’lanish
            </button>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="relative overflow-hidden">
            <img
              className=" property   w-[500px] h-[400px]"
              src={property}
              alt=""
            />
            <img className=" absolute z-50  restengle" src={Group} alt="" />
            <button className="text-white  rounded-[7px] bg-[#DAB966] w-[500px] mt-[-3rem] h-[60px] text-[30px] leading-normal font-normal uppercase ">
              biz bilan Bog’lanish
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="relative overflow-hidden">
            <img
              className=" property   w-[500px] h-[400px]"
              src={property}
              alt=""
            />
            <img className=" absolute z-50  restengle" src={Group} alt="" />
            <button className="text-white  rounded-[7px] bg-[#DAB966] w-[500px] mt-[-3rem] h-[60px] text-[30px] leading-normal font-normal uppercase ">
              biz bilan Bog’lanish
            </button>
          </div>
        </div>
      </div>
      <div className="Biz-mebel">
        <h1 className=" text-[#DAB966]  text-[50px] mt-[-2rem] font-normal  leading-normal ">
          Zamonaviy mebellar interer dizayni bilan
        </h1>
      </div>
      <div onClick={toggleModal}>
        <RxMagnifyingGlass className="text-white text-2xl  cursor-pointer" />
      </div>
      <br />
      <br />
      <NavLink to="/top">
        {modal && (
          <div className="modal">
            <div className="teg-modal">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                navigation={true}
                spaceBetween={20}
                modules={[EffectCube, Pagination, Navigation]}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="flex justify-center items-center">
                  <img className="" src={Mebel1} alt="" />
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel3} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel4} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel5} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel6} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel7} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel8} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel9} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel10} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel11} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel12} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel13} alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img src={Mebel14} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}
        <div className=" grid  cursor-pointer  gap-[40px]  grid-cols-4">
          <div data-aos="fade-up">
            <img src={Mebel1} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel2} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel3} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel4} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel5} alt="" />
          </div>

          <div data-aos="fade-up">
            {" "}
            <img src={Mebel6} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel7} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel8} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel9} alt="" />
          </div>

          <div data-aos="fade-up">
            {" "}
            <img src={Mebel10} alt="" />
          </div>
          <div data-aos="fade-up">
            {" "}
            <img src={Mebel11} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel12} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel13} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel14} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel15} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel14} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel13} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel2} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel12} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel14} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel15} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel16} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel2} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel12} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel16} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel2} alt="" />
          </div>

          <div data-aos="fade-up">
            <img src={Mebel15} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={Mebel1} alt="" />
          </div>
        </div>
      </NavLink>
      <div className="flex  justify-center items-center mt-16">
        <img className="w-[600px]" src={img1} alt="" />
        <img className="p-9" src={Logo} alt="" />
        <img className="w-[600px]" src={img2} alt="" />
      </div>
    </div>
  );
}

export default Main;
