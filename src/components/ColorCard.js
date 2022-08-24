import React, { useEffect, useState } from 'react';

const ColorCard = ({ color, name }) => {
  const [currentColor, setCurrentColor] = useState('');

  const backgroundColor = color.toLowerCase();

  console.log(currentColor);

  // useEffect(() => {
  // }, [currentColor]);

  return (
    <>
      <div
        className={`!bg-[${currentColor}] relative h-28 min-w-[150px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105  border border-[${backgroundColor}]`}
        onClick={() => setCurrentColor(backgroundColor)}
      >
        {name}
      </div>
    </>
  );
};

export default ColorCard;
