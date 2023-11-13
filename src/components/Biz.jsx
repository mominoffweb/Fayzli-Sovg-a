import React from "react";
import Navbar from "./Navbar";
import Biznes from "../Image/my-biznes.png";
import img1 from "../Image/my-img1.png";
import img2 from "../Image/my-img2.png";
import img3 from "../Image/my-img3.png";
import img4 from "../Image/my-img4.png";
import img5 from "../Image/my-img5.png";
import Logo from "../images/Logo2.svg";
import imgg1 from "../images/imgg1.png";
import imgg2 from "../images/imgg2.png";
import Restangle from "../Image/Rectang.png";
import Slide from "../Image/Slide.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import vector from "../Image/Vector.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Biz() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <Navbar />

      <div className="bg-[#181F28]">
        <div>
          <img className="" src={Biznes} alt="" />
          <div className="absolute mt-[-34rem] px-20   ml-[-2rem]   ">
            
            <h1 className="text-[#DAB966] leading-normal font-normal text-[80px]">
              Biz haqimizda
            </h1>
            <h3 className=" w-[634px] text-[30px] text-[#fff] font-normal leading-normal">
              Har bir biznesning kelib <br /> chiqish tarixi va odatda nima{" "}
              <br /> uchun biznes yuritishingiz va <br /> mijozlaringiz
              borligini asoslab <br /> beradigan sabablar <br /> mavjuddir.
            </h3>
            <button className=" hover:bg-white hover:text-[#DAB966] w-[410px] mt-5 h-[70px] bg-[#DAB966] text-[#fff]  text-[30px] font-normal leading-normal uppercase  text-center rounded-[10px]">
              tezkor aloqa
            </button>
          </div>
        </div>
        <div className="bg-[#181F28]  flex gap-[160px]  px-12">
          <div data-aos="fade-right">
            <img
              src={img1}
              className=" h-[660px] w-[2000px] pt-[80px]"
              alt=""
            />
          </div>
          <div className="mt-14">
            <div data-aos="fade-up">
              <h1 className="text-[#DAB966] font-[Galindo] text-[50px] font-normal leading-normal">
                Biz haqimizda
              </h1>
              <p className="text-[#fff] mt-5 w-[630-px] font-[Fugaz One] text-[22px] font-normal leading-normal">
                1. Biz hashamatli mebel ishlab chiqarish va eksport qilishda 20+
                yillik tajribaga egamiz. <br /> <br /> 2. Bizda 50000+ m2 zavod,
                300+ ishchi, 16 QC3. Bizda 5230 m2 ko'rgazma zali bor, yaxshi
                sifatimizni tekshirish uchun biz bilan video qo'ng'iroqqa xush
                kelibsiz. <br /> <br /> 4. Bizda 13 kishidan iborat professional
                dizaynerlar jamoasi bor, buyurtma berishdan oldin siz uchun 3D
                renderlashni amalga oshirishi mumkin. <br /> <br /> 6. Biz sizga
                maxsus eksport xizmatini taqdim eta olamiz, xalqaro savdoni siz
                uchun osonlashtiramiz.
              </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center mt-16">
          <img className="w-[600px]" src={imgg1} alt="" />
          <img className="p-9" src={Logo} alt="" />
          <img className="w-[600px]" src={imgg2} alt="" />
        </div>
        <div className="px-14">
          <div className="  flex gap-14">
            <div data-aos="fade-right">
              <h1 className="text-[#DAB966] font-[Galindo] text-[70px] font-normal leading-normal ">
                Bizning <br /> ishtiyoqimiz <br /> odamlar - <br /> sizniki
                nima?
              </h1>
            </div>
            <div className=" bag_img pl-[3rem] ">
              <div data-aos="fade-left">
                <img className="h-[383px] mt-7 " src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="pt-36 flex">
            <div>
              <h1 className="text-[#DAB966]  ml-36 text-[40px] font-normal leading-normal uppercase">
                Bizning ishtiyoq
              </h1>
              <p className="w-[718px] h-[396px]  text-center  text-[#fff]  font-[Fugaz One] leading-normal text-[30px] uppercase font-normal">
                Xodimlarimizning e'tibori va <br /> sadoqatiga asoslangan sifat,{" "}
                <br />
                xilma-xillik, narx va xizmatni <br /> taklif qiluvchi noyob
                xarid <br /> qilish tajribasi bilan <br /> hamkorlarimiz va
                mijozlarimizni <br /> qondirish.
              </p>
            </div>
            <div data-aos="fade-down">
              <img
                className="w-[500px] h-[500px] mt-[-2rem]"
                src={img3}
                alt=""
              />
            </div>
          </div>
          <div className=" flex mt-4 gap-14">
            <div data-aos="fade-right">
              <img className="h-[500px] w-[750px]" src={img4} alt="" />
            </div>
            <div className="mt-7">
              <h1 className="text-[#DAB966] text-[37px] font-[Fugaz One] font-normal leading-normal uppercase">
                BIRINCHI DO'KONINGIZ bo’lib qolish
              </h1>
              <p className="text-[#fff]  font-normal leading-normal text-center font-[Fugaz One] uppercase mt-3  text-[30px]">
                Mustaqil, innovatsion, halol va barqaror kooperativ bo'lish,{" "}
                <br />
                unda mijozlar qulay narxlarda mebellarning keng <br />{" "}
                assortimentini tanlashlari <br /> mumkin. Boshqacha aytganda,{" "}
                <br /> tarqatish sohasida namunali <br /> kompaniya va
                ma'lumotnoma <br /> bo'lish
              </p>
            </div>
          </div>
          <div className="pt-36 flex">
            <div>
              <h1 className="text-[#DAB966]  ml-36 text-[40px] font-normal leading-normal uppercase">
                Bizning MAQSADLARIMIZ
              </h1>
              <p className="w-[718px] h-[396px]  text-center  text-[#fff]  font-[Fugaz One] leading-normal text-[30px] uppercase font-normal">
                Mijozlarni, xodimlarni, etkazib beruvchilarni va atrof- <br />{" "}
                muhitimizni tinglash, mahsulot, <br /> ta'lim, ma'lumot,
                farovonlik, <br /> rivojlanish va barqarorlikni <br />{" "}
                ta'minlash va majburiyat, <br /> halollik va hurmat orqali{" "}
                <br /> javobgar bo'lish.
              </p>
            </div>
            <div data-aos="fade-down">
              <img
                className="w-[500px] h-[500px] mt-[-2rem]"
                src={img5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img src={Slide} alt="" />
          <div className="text-center mt-[-35rem]">
            <h1 className="text-[#fff]  font-[Fugaz One] font-normal leading-normal  uppercase text-[50px]">
              Biz bilan bog’lanish
            </h1>
            <p className="mt-10 text-[#fff]  font-[Fugaz One] font-normal leading-normal  uppercase text-[30px]">
              fayzli sovg'a mebellari eng yuqori darajadagi dizaynni <br />{" "}
              go'zal noyob buyumlar bilan uyg'unlashtirib, <br /> hashamatli
              mebel loyihalarini taqdim etishga <br /> bag'ishlangan.
            </p>
            <button className="mt-[5rem] hover:bg-white hover:text-[#DAB966]  w-[300px] h-[70px] bg-[#DAB966] rounded-[10px] text-[#fff]  font-[Fugaz One] font-normal leading-normal  uppercase text-[30px]">
              tezkor aloqa
            </button>
          </div>
        </div>
        <div className="flex  justify-center items-center mt-[12rem]">
          <img className="w-[600px]" src={imgg1} alt="" />
          <img className="p-9" src={Logo} alt="" />
          <img className="w-[600px]" src={imgg2} alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Biz;
