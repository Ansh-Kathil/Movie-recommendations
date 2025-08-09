import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import GlobalApi from './Services/GlobalApi';
import Moviecard from './Components/Moviecard';
import GenresList from './Constants/GenresList';
import Navbar from './Components/Navbar'


const View = () => {
  const { id } = useParams();
  
  
  const [list, setlist] = useState([])
  
  const genreId = Number(id);
  const genre = GenresList.genere.find(g => g.id === genreId);
  


  useEffect(() => {
    getMovieById()
    console.log(genre)
  }, [])

  const getMovieById = () => {
    GlobalApi.getMovieByGenreId(id).then((resp) => {
      setlist(resp.data.results)


    })
  }

  // Fetch and display movies for this genre id
  return (
    <>
      <Navbar />

      <div className=" pt-12  text-white w-full">
        <h1 className="text-white px-10 pt-5 my-3 mb-5  transition-all md:text-[22px] font-bold truncate">
          {genre ? genre.name : "Genre"} 
        </h1>
        <div className='text-center pb-19'>
          {list.map((item, index) => (
            <Moviecard key={index} movie={item} index={index} />
          ))}
        </ div>
      </div>
    </>
  );
};

export default View;