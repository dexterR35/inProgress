
import React from 'react';
import { useDataContext } from '../context/DataProvider'; // Import custom hook

const Component2 = () => {
  const { userData } = useDataContext();

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default Component2;
