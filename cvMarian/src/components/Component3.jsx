
import React from 'react';
import { useDataContext } from '../context/DataProvider'; // Import custom hook

const Component3 = () => {
  const { userData } = useDataContext();

  if (!userData) return <div>Loading...</div>;

  return (
    <div className='flex !justify-between w-full article'>
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, incidunt.</p>
    </div>
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, incidunt.</p>
    </div>
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, incidunt.</p>
    </div>
    </div>
  );
};

export default Component3;
