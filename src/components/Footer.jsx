import React from "react";
import phone from "../images/phone.svg";
import instagram from "../images/instagram.svg";
import telegram from "../images/telegram.svg";

function Footer() {
  return (
    <div className="bg-[#181F28] px-16">
      <div className="footer-text flex ">
        <div>
          <h1 className="text-[40px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            To’plam
          </h1>
          <p className="text-[20px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Bedrooms
          </p>
          <p className="text-[20px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Dining Rooms
          </p>
          <p className="text-[20px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Rooms
          </p>
          <p className="text-[20px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Decoration
          </p>
          <p className="text-[20px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Hotel Furnitures
          </p>
        </div>
        <div className="ml-32 ">
          <h3 className="text-[40px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Biz bilan bog’lnish
          </h3>
          <div className="flex mt-[26px] ml-[-6rem] justify-center items-center gap-4">
            <img src={phone} alt="" />
            <p className="text-[20px]  cursor-pointer font-normal leading-normal text-[#FFF]">
              + (998) 97 712 98 55
            </p>
          </div>
          <div className="flex mt-[22px] ml-[-5rem] justify-center items-center gap-4">
            <img src={phone} alt="" />
            <p className="text-[20px]  cursor-pointer font-normal leading-normal text-[#FFF]">
              + (998) 99 870 00 15
            </p>
          </div>
          <div className="flex mt-[2rem] cursor-pointer ml-[-12rem] justify-center items-center gap-6">
            <img src={instagram} alt="" />
            <p className="text-[20px]  font-normal leading-normal text-[#FFF]">
              mebelfsm
            </p>
          </div>
          <div className="flex mt-[1rem] cursor-pointer ml-[-11rem] justify-center items-center gap-6">
            <img src={telegram} alt="" />
            <p className="text-[20px]  font-normal leading-normal text-[#FFF]">
              MebelFSM
            </p>
          </div>
        </div>
        <div className="ml-28">
          <h1 className="text-[40px] mt-[2rem] font-normal leading-normal text-[#FFF]">
            Manzil
          </h1>
          <p className="text-[20px] mt-8  font-normal leading-normal text-[#FFF]">
            Toshkent viloyati,
            <br /> Zangiota tumani, ko'cha <br /> Mustahkam Oila 2 uy
          </p>
        </div>
      </div>
      <div className="flex p-5  justify-end items-center">
        <button className="w-[480px] h-[70px] hover:bg-white hover:text-[#B18A4B]  cursor-pointer    rounded-[10px]  bg-[#B18A4B] text-white text-[30px]  font-normal uppercase text-center ">
          Biz bilan bog’lanish
        </button>
      </div>
    </div>
  );
}

export default Footer;
