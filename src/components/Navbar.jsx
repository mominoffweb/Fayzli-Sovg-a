import React, { useState } from "react";
import Uzb from "../assets/language_uzb.svg";
import Logo from "../assets/Sait-Logo.png";
import Rectange1 from "../assets/Rectangle_1.png";
import Rectange2 from "../assets/Rectangle_2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navId, setNavId] = useState("");
  const handleClick = (e) => {
    setNavId(e.target.id);
  };

  return (
    <div className="  h-[186px] justify-center items-center px-16 text-[#FFF] bg-[#1F2731]">
      <div className="">
        <div className="flex justify-end items-center gap-3 pt-[1rem] ">
          <img src={Uzb} alt="" />
          <p className=" text-[28px] font-normal  leading-normal ">O’zbekcha</p>
        </div>
        <NavLink className="" to="/">
          <div className="flex justify-center items-center  mt-[-5rem] ">
            <img className="w-[570px]" src={Rectange1} alt="" />

            <img className="p-4  " src={Logo} alt="" />
            <img className="w-[570px]" src={Rectange2} alt="" />
          </div>
        </NavLink>
        <div className=" flex justify-between items-center mt-[-1rem]">
          <div className="flex  cursor-pointer gap-36  items-center  text-2xl font-normal  mt-[-4rem]">
            <NavLink
              onClick={handleClick}
              id="nav1"
              className={`text ${navId === "nav1" ? "active" : ""}`}
              to="/top"
            >
              To'plam
            </NavLink>

            <NavLink
              onClick={handleClick}
              id="nav2"
              className={`text ${navId === "nav2" ? "active" : ""}`}
              to="/xarid"
            >
              Xarid qilish
            </NavLink>
          </div>
          <div className="flex cursor-pointer    gap-36  items-center  text-2xl font-normal  mt-[-4rem]">
            <NavLink
              onClick={handleClick}
              id="nav3"
              className={`text ${navId === "nav3" ? "active" : ""}`}
              to="/korzinka"
            >
              Korzinka
            </NavLink>
            <NavLink
              onClick={handleClick}
              id="nav4"
              className={`text ${navId === "nav4" ? "active" : ""}`}
              to="/Biz"
            >
              Biz haqimizda
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
