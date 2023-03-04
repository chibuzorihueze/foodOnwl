import React from "react";
import { HiLocationMarker, HiOutlineSearch } from "react-icons/hi";
import Navbar from "../../components/nav";
import ChangeLocationImg from "../../assets/images/home/change_location.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="border h-[325px] grid grid-cols-2">
        <div className="hero_left flex items-center justify-center text-white">
          <div className=" w-8/12 space-y-2">
            <div className="heading flex items-center justify-between">
              <div className="flex items-center">
                <HiLocationMarker size={30} />
                <p className="font-semibold text-xl">Adewunmi Adeleke, Ajah</p>
              </div>
              <img
                src={ChangeLocationImg}
                alt="change_location"
                className="cursor-pointer"
              />
            </div>
            <form className="hero_input relative flex items-center border h-10 rounded">
              <input
                type="search"
                className="w-11/12 bg-transparent border-none focus:border-none outline-none text-white placeholder:text-zinc-200 pl-2 h-full font-semibold"
                placeholder="Search Location"
              />
              <div className="bg-[#FF9900] rounded-tr rounded-br flex h-full items-center justify-center py-1 w-1/12 cursor-pointer">
                <HiOutlineSearch />
              </div>
            </form>
          </div>
        </div>
        <div>Col 2</div>
      </div>
    </>
  );
};

export default Home;
