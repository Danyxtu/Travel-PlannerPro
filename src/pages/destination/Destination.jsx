import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Destination = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % destination.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [destination.images.length]);

  return (
    <div className="flex flex-col justify-center items-center text-white">
      {/* Header */}
      <div className="w-full flex items-center pl-[50px]">
        <ArrowLeft
          strokeWidth={4}
          size={30}
          className="w-[50px] h-[35px] hover:cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-md"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[40px] text-outline font-bold w-full pl-[30px]">
          {destination.city} - {destination.region}
        </h1>
      </div>
      
      <div
        className='
          flex flex-row
        '
      >
        <div className="relative w-[750px] h-[400px] overflow-hidden rounded-[15px] mt-5">
          <AnimatePresence custom={direction}>
            <motion.img
              key={index}
              src={destination.images[index]}
              alt={destination.city}
              className="absolute w-full h-full object-cover rounded-[15px]"
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>

        <div
          className='
            flex flex-col items-center
            my-auto
          ' 
        >
          {/* Details */}
          <div className="text-center mt-4 max-w-[700px]">
            <p className="text-lg font-semibold text-[30px]">{destination.city}</p>
            <p className="text-base bg-[rgba(255,255,255,0.5)] rounded-[5px] text-black font-semibold  ml-[20px] mt-2">
              {destination.description}
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-[50px] bg-white text-black px-5 py-2 rounded-lg font-bold hover:bg-gray-300 transition-all w-[150px]"
            onClick={() => navigate(`itinerary`, { state: destination })}
          >
            Travel Plan
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Destination;
