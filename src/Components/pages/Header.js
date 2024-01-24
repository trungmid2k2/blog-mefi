import React, { useEffect, useState } from 'react'
import logoMiddle from '../../images/logo.png'
import logoFb from '../../images/logo/facebook_logo.png'
import logoIst from '../../images/logo/instagram_logo.png'
import logoTt from '../../images/logo/twitter_logo.png'
import search from '../../images/logo/search.png'
import { NavLink } from 'react-router-dom'
import useApiStore from '../../zustand/apiStore'

import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'


function Header() {
    // const [blogs, setBlogs] = useState([])
    // const [searchKey, setSearchKey] = useState()
    const { searchKey, setSearchKey, blogs, fetchAllBlogs } = useApiStore()
    const [isOpen, setIsOpen] = useState(false)
    const handleOnchange = (e) => {
        setSearchKey(e.target.value)
    }
    useEffect(() => {
        setSearchKey(searchKey)
        fetchAllBlogs()
    }, [searchKey, fetchAllBlogs, setSearchKey])
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // const fetchData = async () => {
    //     const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30'
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         setBlogs(data.blogs)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const ListDropMenu = ({ blogs }) => {
        const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
        const listCate = uniqueCategories.map((cate, i) => (
            <li className='px-4 py-[8px]' key={i}>
                <NavLink
                    to={`/blog-mefi/blogs/${cate}`}
                    className='hover:text-[#d1bb95] font-medium text-[14px]'
                >
                    {cate.toUpperCase()}
                </NavLink>
            </li>
        ))
        return (
            <>
                <div className='relative bg-white shadow-[0_0px_1px_0px_rgba(0,0,0,0.5)] m-[10px]'>{listCate}</div>
            </>
        )
    }
    return (
        <>

            <div className='fixed z-10'>
                <div className='flex items-center justify-between shadow-lg w-[100vw] bg-white'>
                    <div className='pl-[50px]'>
                        <NavLink to='/blog-mefi'><img className="w-[144px] h-[60px]" src={logoMiddle} alt='logo'></img></NavLink>
                    </div>
                    <div>
                        <ul className='flex' >
                            <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/blog-mefi'>HOME</NavLink></li>
                            <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/blog-mefi'>PAGES</NavLink></li>

                            <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/blog-mefi/about'>ABOUT</NavLink></li>
                            <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/blog-mefi/contact'>CONTACT</NavLink></li>
                            <li >
                                <div className='absolute top-[35%]'>
                                    <button
                                        onClick={() => setIsOpen((prev) => !prev)}
                                        className='px-4 hover:text-[#d1bb95] font-medium text-[14px] flex items-center'
                                    >
                                        CATEGORIES
                                        {isOpen ? <ChevronUp className='pl-1 ' /> : <ChevronDown className='pl-1 ' />}
                                    </button>
                                    {isOpen && <ListDropMenu blogs={blogs}></ListDropMenu>}</div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='border-gray-950 border-r-[0.5px] mr-7 pr-7 h-[40px] flex items-center'>
                            <input onChange={handleOnchange} className='outline-none text-[14px]' type='text' placeholder='Enter' />
                            <img className=' w-[14px] h-[14px]' src={search} alt='tim'></img>
                        </div>
                        <div className='flex pr-[50px] items-center'>
                            <img className='mx-[5px] w-[14px] h-[14px]' src={logoFb} alt='fb' />
                            <img className='mx-[5px] w-[14px] h-[14px]' src={logoIst} alt='ist' />
                            <img className='mx-[5px] w-[14px] h-[14px]' src={logoTt} alt='tt' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header