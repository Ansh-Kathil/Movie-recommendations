import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const Hero = () => {

    const base = 'https://image.tmdb.org/t/p/original'
    const [movie, setmovie] = useState([])

    useEffect(() => {
        getmovie()
    }, [])

    const getmovie = () => {
        GlobalApi.getmovie.then((resp) => {
            const result = resp.data.results
            const ran = Math.floor(Math.random()*10)
            setmovie(result[ran])          
        })
    }
    return (
        <div>
            <div className='absolute h-[100vh] bg-gradient-to-t via-transparent from-[#1a1a1a] to-transparent w-full'></div>

            <div className='absolute bottom-20  px-10 md:px-24'>
                <h2 className='text-white text-[19px] lg:text-[27px]'>Get Latest Movie info</h2>
                <h2 className='text-white text-[36px] lg:text-[47px] font-bold'>{movie.original_title}</h2>
                <div className='flex gap-5 mt-5'>
                    <button className='bg-white text-black'>PLAY</button>
                    <button className='bg-transparent border-2 border-white text-white cursor-pointer hover:border-gray-500'>DETAILS</button>
                </div>
            </div>
            <img className='h-[100vh] object-cover' src={base + movie.backdrop_path} width={1920} height={1080} alt="" />

        </div>
    )
}

export default Hero
