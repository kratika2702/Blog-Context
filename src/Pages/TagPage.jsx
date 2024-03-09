import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        
        <div className="  mt-20 ml-80">
            <button className="   ml-5 border-2 border-gray-300 py-1 px-4 rounded-md font-bold "
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className=' ml-20  w-11/12 flex  text-blue-500 text-lg underline  '>
                 <span> #{tag}</span>
            </h2>
        </div>
        <div className='mt-[-60px]'><Blogs/></div>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
