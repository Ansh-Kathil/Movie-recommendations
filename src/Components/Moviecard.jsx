import React from 'react'

const Moviecard = ({ movie, index }) => {
  const base = 'https://image.tmdb.org/t/p/original'
  return (
  <div className="inline-block m-2 md:m-3 cursor-pointer group w-[230px] md:w-[340px]">
    <img
      className="w-full border-[5px] border-transparent group-hover:border-gray-400 p-2 transition-all duration-300 ease-in-out object-cover rounded-4xl"
      src={base + movie.backdrop_path}
      alt=""
    />
    <h2 className="text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold">
      {index % 2 === 0 ? "WATCH MOVIE" : "START WATCHING"}
    </h2>
    <h2 className="text-white mt-1 transition-all md:text-[22px] group-hover:font-bold truncate">
      {movie.original_title}
    </h2>
  </div>
);

}

export default Moviecard
