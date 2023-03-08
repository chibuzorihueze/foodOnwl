import React from "react";
import { ChikenRep, Menuhero } from "../../../assets/images/home/Menu_img";
import Navbar from "./../../../components/nav2";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-[75%]">
        <div className="mx-auto my-auto relative">
          <img className="w-[810px] h-[200px]" src={Menuhero} alt="hero img" />
          <img style={{ position: 'absolute', top: '90px', left: '50px' }} src={ChikenRep} alt="food-logo"/>
        </div>
      </div>

      <div>
        <h1>Chiken Republic</h1>
        <p>Chiken Republic</p>
        
      </div>
    </>
  );
};

export default Menu;
