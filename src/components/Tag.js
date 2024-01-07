import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const[tag,setTag] = useState('car');

   const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-[#864AF9] mt-36 rounded-lg border border-black
    flex flex-col items-center gap-y-5'>

         <h1 className='text-3xl mt-[15px]  underline uppercase font-bold'>
           Random {tag} Gif
         </h1>
         {
            loading ? (<Spinner/>): (<img src={gif} width="450" height/>)
         }

         
         <input
           className='text-center mb-[3px] w-8/12 opacity-90 text-lg font-semibold py-1 rounded-lg'
           onChange={(e)=>setTag(e.target.value)}
           value={tag}
         />

         

         <button onClick={()=>fetchData()}
         className=' mb-[20px] w-8/12 bg-[#52D3D8] opacity-90 text-lg font-semibold py-1 rounded-lg'>
             Generate
         </button>

    </div>
  )
}

export default Tag