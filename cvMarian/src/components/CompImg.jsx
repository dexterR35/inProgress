
import React from 'react';
import profileImage from '../assets/selfportrait3.png';

const ComponentImg = () => {


  return (
    <div>
       <p className="text-8xl text-center mb-0 font-citizen leading-20">
          Javascript 
        </p>
        <div className='bg-gray-500'>
        <img 
        src={profileImage} 
        alt=""
        className="w-full h-full object-cover mx-auto " 
      />
        </div>
   
    </div>
  );
};

export default ComponentImg;
