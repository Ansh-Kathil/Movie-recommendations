import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import GenersList from '../Constants/GenresList' 
import Movielist from './Movielist';
import { useNavigate } from "react-router-dom";

const GenerateMovielist = () => {
  const navigate = useNavigate();

  const goToDetails = (id) => {
      navigate(`/view/${id}`);
  };
  return (
    <div className='mt-4 p-5 px-10 md:px-20'>
      {GenersList.genere.map((item, index)=>index<=10 && (
        <div key={index}>
            <h2 className='text-white text-[20px] font-bold'>{item.name} 
            <span onClick={()=>goToDetails(item.id)} className='font-normal text-[16px] cursor-pointer text-gray-400 float-right flex'>VIEW ALL <IoChevronForwardSharp className='text-white ml-1 '/> </span></h2>
            <Movielist genereid = {item.id}/>
        </div>
      ))}
    </div>
  )
}

export default GenerateMovielist
