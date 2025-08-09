import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import Moviecard from './Moviecard'
import { IoChevronUpOutline ,IoChevronBackOutline , IoChevronForwardOutline} from 'react-icons/io5'

const Movielist = ({ genereid }) => {
  const eleref = useRef()
  const [list, setlist] = useState([])
  const slideright =(element)=>{
    element.scrollLeft+=500
  }
  const slideleft =(element)=>{
    element.scrollLeft-=500
  }

  useEffect(() => {
    getMovieById()
  }, [])

  const getMovieById = () => {
    GlobalApi.getMovieByGenreId(genereid).then((resp) => {
      setlist(resp.data.results)
      console.log(resp.data.results)
    })
  }
  return (
    <div className='flex items-center '>
      <IoChevronBackOutline onClick={()=>slideleft(eleref.current)}  className='text-[40px] z-10 mb-[120px] text-white bg-black p-2 cursor-pointer rounded-full'/>
      <div id = 'slider' ref={eleref} className='w-full no-scrollbar overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap mb-16 ml-[-20px] mr-[-20px]'> 
        {list.map((item, index) => index <= 10 && (
          <Moviecard key={index} movie={item} index = {index} />
        ))}
      </div>
      <IoChevronForwardOutline onClick={()=>slideright(eleref.current)} className=' z-10  text-[40px] mb-[120px] text-white bg-black p-2 cursor-pointer rounded-full'/>
    </div>
  )
}

export default Movielist
