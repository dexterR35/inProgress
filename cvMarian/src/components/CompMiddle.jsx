import React from "react";
import profileImage from "../assets/selfportrait3.png";
import SkillBars from "./Bars";
const CompMiddle = () => {
  return (


    <div className="grid grid-cols-5 grid-rows-11 gap-1 w-full">

      <div className="col-span-5 bg-yellow-500 font-forbd flex">
        <p className="text-2xl">Today</p> <p className="text-6xl ">Front-End Developer</p>
      </div>
      <div className="row-span-5 row-start-2 bg-purple-600">
   
        <div className='bg-gray-500'>
          <img
            src={profileImage}
            alt="portrait"
            className="w-full h-full object-cover mx-auto "
          />
        </div>
      
        <div className="flex !flex-col">
          <p className="text-article ">Corem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
        <p className="text-2xl text-center mb-0 font-citizen ">
          Javascript
        </p>
      </div>
      <div className="row-span-9 col-start-5 row-start-2 bg-green-200">
        <div className="flex !flex-col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
      </div>
      <div className="col-span-3 col-start-2 row-start-2 bg-red-500">
        <div className="flex !flex-row">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
      </div>
      <div className="col-span-3 row-span-6 col-start-2 row-start-3 bg-green-950">
        <SkillBars />
      </div>
      <div className="row-span-3 row-start-7 bg-pink-400">
        <div className="flex flex-col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
      </div>
      <div className="col-span-3 col-start-2 row-start-9 bg-pink-900">
        <div className="flex">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
      </div>
      <div className="col-span-4 row-start-10 bg-red-800">
        <div className="flex">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
      </div>
      <div className="col-span-5 row-start-11 bg-blue-200 flex flex-row-reverse">
        <div className="flex">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, unde!</p>
        </div>
        <div className="flex">
          <div>
            <a href="http://">Codepen</a>
          </div>
          <div>
            <a href="http://">github</a>
          </div>
          <div>
            <a href="http://">marianiordache.ro</a>
          </div>
          <div>
            <a href="http://">Linkedin</a>
          </div>
          <div>
            <a href="http://">Obtinecredit.ro</a>
          </div>
        </div>
      </div>
    </div>


  );
};

export default CompMiddle;
