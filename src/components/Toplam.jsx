import React from "react";
import Uzb from "../assets/language_uzb.svg";
import Logo from "../assets/Sait-Logo.png";
import Rectange1 from "../assets/Rectangle_1.png";
import Rectange2 from "../assets/Rectangle_2.png";
import { NavLink } from "react-router-dom";
import Bedroom from "../images/Bedroom-1.png";
import Kitchen from "../Image/kitchen.png";
import bedroom from "../Image/bedroom.png";
import dining_room from "../Image/dining_room.png";
import Footer from "./Footer";
import logo from "../images/Logo2.svg";
import img1 from "../images/imgg1.png";
import img2 from "../images/imgg2.png";
import Navbar from "./Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import vector from "../Image/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Toplam() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="bg-[#181F28]">
      <div className=" bagraund">
        <Navbar />
        <div>
          <div className=" relative ">
            <div className="py-10">
              <img
                className=" ml-[22rem] pt-[1rem]  p-10 w-[850px] h-[500px]"
                src={Bedroom}
              />

              <div className="absolute bottom-10 px-20   ml-[-1rem]   ">
                <h2 className="text-[50px] font-normal leading-normal text-[#FFF]">
                  Uyingizni <br /> zamonaviy <br /> mebellar <br /> bilan <br />{" "}
                  yangilang!
                </h2>
                <button className="btn  w-[300px] h-[60px] text-[#fff] rounded-[50px] text-[30px] leading-normal font-normal">
                  Buyurtma
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="badroom">
          <h1 className="text-[#DAB966] text-[40px] pt-[3rem] pl-[12rem] font-normal  leading-normal">
            Har xil zamonaviy mebellar turlari
          </h1>
        </div>
        <div className=" cursor-pointer grid grid-cols-3 p-16 gap-10">
          <div data-aos="fade-right">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={Kitchen} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={bedroom} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={bedroom} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={Kitchen} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={Kitchen} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={bedroom} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={dining_room} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={Kitchen} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={bedroom} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={bedroom} alt="" />
          </div>
          <div date-aos="fade-up">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={Kitchen} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={Kitchen} alt="" />
          </div>
          <div date-aos="fade-up">
            <img src={bedroom} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={dining_room} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={Kitchen} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={bedroom} alt="" />
          </div>

          <div data-aos="fade-right">
            <img src={bedroom} alt="" />
          </div>
          <div data-aos="fade-up">
            <img src={dining_room} alt="" />
          </div>
          <div data-aos="fade-left">
            <img src={Kitchen} alt="" />
          </div>
        </div>
        <div className="boglanish">
          <h1 className="text-[#DAB966] text-[45px] pt-[3rem] pl-[20rem] font-normal  leading-normal uppercase">
            Biz bilan bog’lanish
          </h1>
        </div>
        <h1 className="w-[1390px] text-[30px] text-[#fff] text-center font-normal leading-normal uppercase">
          fayzli sovg'a mebellari eng yuqori darajadagi dizaynni <br /> go'zal
          noyob buyumlar bilan uyg'unlashtirib, <br /> hashamatli mebel
          loyihalarini taqdim etishga <br /> bag'ishlangan.
        </h1>
      </div>
      <div className="flex  justify-center items-center mt-16">
        <img className="w-[600px]" src={img1} alt="" />
        <img className="p-9" src={logo} alt="" />
        <img className="w-[600px]" src={img2} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Toplam;
