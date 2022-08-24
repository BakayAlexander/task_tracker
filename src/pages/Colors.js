import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getColors } from '../store/actions/getColorsActios';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import ColorCard from '../components/ColorCard';

const Colors = () => {
  const dispatch = useDispatch();
  const colorsData = useSelector(state => state.colors.colors);
  const isLoading = useSelector(state => state.colors.colorsLoading);

  const rowRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = direction => {
    setIsScrolled(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    dispatch(getColors());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="h-40 space-y-0.5 md:space-y-2">
            <div className="group relative md:-ml-2">
              <AiOutlineDoubleLeft
                className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                  !isScrolled && 'hidden'
                }`}
                onClick={() => handleClick('left')}
              />
              <div
                className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                ref={rowRef}
              >
                {colorsData.map(color => (
                  <ColorCard key={color.id} color={color.color} name={color.name} />
                ))}
              </div>
              <AiOutlineDoubleRight
                className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                onClick={() => handleClick('right')}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Colors;
