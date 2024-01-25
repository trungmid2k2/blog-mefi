import React, { useEffect, useState } from 'react'
import logoMiddle from '../../images/logo.png'
import logoFb from '../../images/logo/facebook_logo.png'
import logoIst from '../../images/logo/instagram_logo.png'
import logoTt from '../../images/logo/twitter_logo.png'
import search from '../../images/logo/search.png'
import { NavLink } from 'react-router-dom'
import useApiStore from '../../zustand/apiStore'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'
import ListDropMenu from './ListDropMenu'
function Header() {
    console.log('Header')
    const { searchKey, setSearchKey, blogs, fetchAllBlogs } = useApiStore()
    const [isOpen, setIsOpen] = useState(false)
    const [keyWord, setKeyWord] = useState()
    const handleOnchange = (e) => {
        setKeyWord(e.target.value)
    }
    const handlSubmit = (e) => {
        e.preventDefault()
        setSearchKey(keyWord)
    }
    useEffect(() => {
        fetchAllBlogs()
    }, [searchKey, fetchAllBlogs])
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
                            <img onClick={handlSubmit} className=' cursor-pointer w-[14px] h-[14px]' src={search} alt='tim'></img>
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