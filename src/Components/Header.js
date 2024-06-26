import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="bg-emerald-300" p-4>
      <div className="max-w-[1240px] py-[20px] flex justify-between mx-auto items-center">
        <div className="font-bold text-3xl">
          LOGO
        </div>

        {
          toggle ?
          (
            <IoClose
            onClick={() => setToggle(!toggle)}
            className="text-3xl md:hidden block"/>
          )
        
        :
        (
          <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-3xl md:hidden block" />

          
        )
      }

        <ul className="text-xl font-semibold hidden md:flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>

       

        {/*Responsive menu*/}

        <ul className={`duration-300 w-full h-screen md:hidden fixed bg-emerald-400 text-black top-[105px] ${toggle ? 'left-[0]' : 'left-[-100%]' } `}>
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Resources</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
