import React, { useEffect } from 'react'
// import { useState } from 'react';
import blog1 from '../../images/12.jpg'
import useApiStore from '../../zustand/apiStore';
import Blog from './Blog';

export default function ListPost() {
    const { searchKey, blogs, fetchAllBlogs, currentPage, itemsPerPage, setCurrentPage } = useApiStore()
    // const { blogs,, setCategory, fetchCategoryPost } = useCatePost();
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage < Math.ceil(blogs.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 6;
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    useEffect(() => {
        console.log("Component did mount or filteredBlogs changed");
        fetchAllBlogs()
    }, []);
    const BlogList = ({ blogs }) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentBlogs = blogs.slice(startIndex, endIndex);
        const blogList = currentBlogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
        return (<>{blogList}</>)
    }
    return (
        <>
            <div className='w-[780px]  '>
                <div className='border-b-[1px] border-[#ebebeb] pb-[30px]'>
                    <div>
                        <img className='w-[780px] h-[475px] ' src={blog1} alt="" />
                    </div>
                    <div className='text-[#d1bb95] py-[10px] text-[18px]'>
                        May 7, 2018 / Lifestyle
                    </div>
                    <div>
                        <a className='font-bold text-[40px] leading-none hover:text-[#d1bb95]' href='c'>A Closer Look At Our Front Porch Items From Lowe's</a>
                    </div>
                    <div className=''>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </div>
                </div>
                <div className='py-[30px]'>
                    <ul className='flex flex-wrap justify-between'>
                        {blogs.length ?
                            <ul className='flex flex-wrap justify-between'>
                                <BlogList blogs={filteredBlogs}></BlogList>
                            </ul> :
                            <div>Khong co du lieu</div>
                        }
                    </ul>
                </div>
                <div className="flex justify-center pagination">
                    <button
                        className={`text-[#a6a6a6] border-[1px] py-[5px] px-[20px] mx-2
                                    ${currentPage === 1
                                ? 'hover:none hover:none cursor-default text-white border-white'
                                : 'hover:text-black cursor-pointer hover:border-black'}`}
                        onClick={previousPage}
                        disabled={currentPage === 1}
                    >
                        &lt; Previous
                    </button>
                    {Array.from({ length: Math.ceil(filteredBlogs.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`text-[#a6a6a6] border-[1px] py-[5px] px-[20px] mx-2 hover:text-black hover:border-black
                                         ${currentPage === index + 1 ? 'active text-black border-black' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={`text-[#a6a6a6] border-[1px] py-[5px] px-[20px] mx-2
                                    ${currentPage === Math.ceil(blogs.length / itemsPerPage)
                                ? 'hover:none hover:none cursor-default text-white border-white'
                                : 'hover:text-black cursor-pointer hover:border-black'}`}

                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(blogs.length / itemsPerPage)}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </>
    )
}
