import React  from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

   const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2  bg-[#F2AFEF] mt-36 rounded-lg border border-black
    flex flex-col items-center gap-y-5'>

         <h1 className='text-3xl mt-[15px]  underline uppercase font-bold'>
           A Random Gif
         </h1>
         {
            loading ? (<Spinner/>): (<img src={gif} width="450" height/>)
         }

         <button onClick={()=>fetchData()}
         className=' mb-[20px] w-8/12 bg-[#52D3D8] opacity-90 text-lg font-semibold py-1 rounded-lg'>
             Generate
         </button>

    </div>
  )
}

export default Random