import React, { useState, useEffect } from "react";
import { Divide, Heart } from "lucide-react";
import image from "../assets/example.png"; // Replace with your image
import { useNavigate } from "react-router-dom";

const FavoritesPage = ({ destinations }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const navigate = useNavigate();
  // Optional: allow removing from favorites on this page
  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((i) => i !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Filter only the favorite destinations
  const favoriteDestinations = destinations.filter((dest) =>
    favorites.includes(dest.id)
  );

  if (favoriteDestinations.length === 0){
    return(
      <p 
        className="
          flex justify-center 
          mt-[120px] h-max
          text-center text-amber-50 font-bold text-[70px] 
          "
        >
          No favorites yet!
        </p>
    )
  }

  return (
    <div 
      className="
        flex flex-wrap justify-center 
        gap-[10px] mt-[20px]
      "
      >
      <h1
        className="
          w-full
          text-start
          text-[40px] text-white
          font-bold pl-[80px] text-outline
        "
      >
        Favorites
      </h1>
      <div
        className='
          flex flex-wrap justify-center gap-[30px]
          h-[530px] w-full
          overflow-y-scroll
          mt-[20px]
        '
      >
      {favoriteDestinations.map((destination) => (
        <div
          key={destination.id}
          className="
            bg-[rgba(255,255,255,0.6)]
                min-h-[430px] max-h-[431px]
                sm:w-1/2 md:w-1/3 lg:w-1/5
                rounded-[15px]
          "
        >
          <div 
            className="
             flex items-center flex-col
                  w-full h-[300px]
                  pt-[20px]
                  mb-[20px]
                  px-[20px]
            "
          >
            <img
              src={destination.images[0]}
              className="
                 rounded-[10px]
                  min-h-[300px] w-[240px]
                  transition-transform duration-300 
                  hover:scale-110 hover:cursor-pointer
                  active:scale-105
              "
              onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
            />
            <div 
              className="
                pt-[10px]
                flex justify-between
                w-full
              "
            >
              <h3 
                className="
                  font-semibold text-start 
                  mr-[20px] w-[200px]
                "
                onClick={() => navigate(`/destination/${destination.id}`, {state: destination})}
              >
                {destination.city} - {destination.region}
              </h3>
              <Heart
                className="
                  text-[20px] hover:cursor-pointer fill-red-600 
                  active:scale-95
                  "
                onClick={() => removeFavorite(destination.id)}
              />
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
