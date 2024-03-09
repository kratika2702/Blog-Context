import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[20px] py-2 shadow-sm'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p className="text-[0.9rem] mt-[2px]">
        By 
        <span> { post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[0.85rem] mt-[1px] "> Posted on {post.date} </p>
      <p className='text-md m text-sm mt-[10px]'> {post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="text-blue-500 underline text-sm  ">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
