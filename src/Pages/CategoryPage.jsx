import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div className="  mt-20 ml-80">
      
        <button className="  border-2 border-gray-300 py-1 px-4 rounded-md font-bold ml-5 "
            onClick={() => navigation(-1)}
            >
                back
            </button>
        
        <h2 className=' ml-20  w-2/12 flex justify-center text-blue-500 text-lg underline  '> 
        <span> {category}</span>
        </h2>
      </div>
      <div className='mt-[-60px]'><Blogs/></div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
