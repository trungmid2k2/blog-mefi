import React, { useEffect, useState } from 'react'
import logoMiddle from '../../images/logo.png'
import logoFb from './logo/facebook_logo.png'
import logoIst from './logo/instagram_logo.png'
import logoTt from './logo/twitter_logo.png'
import search from './logo/search.png'
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import MainComponent from './MainComponent'
import DescriptionBlog from './pages/DescriptionBlog'
import About from './pages/About'
import CategoryFilter from './pages/CategoryFilter'

const ListDropMenu = ({ blogs }) => {
    const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
    const listCate = uniqueCategories.map((cate, i) => (
        <li className='px-4' key={i}>
            <NavLink
                to={`/blogs/${cate}`}
                className='hover:text-[#d1bb95] font-medium text-[14px]'

            >
                {cate.toUpperCase()}
            </NavLink>
        </li>
    ))
    return (
        <>
            {listCate}
        </>
    )
}
function HeaderComponent() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30'
        try {
            const response = await fetch(url)
            const data = await response.json()

            setBlogs(data.blogs)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <BrowserRouter>
                <div className='fixed z-10'>
                    <div className='flex items-center justify-between shadow-lg w-[100vw] bg-white'>
                        <div className='pl-[50px]'>
                            <NavLink to='/'><img className="w-[144px] h-[60px]" src={logoMiddle} alt='logo'></img></NavLink>
                        </div>
                        <div>
                            <ul className='flex' >
                                <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/'>HOME</NavLink></li>
                                <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/'>PAGES</NavLink></li>

                                <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/about'>ABOUT</NavLink></li>
                                <li className='px-4'><NavLink className='hover:text-[#d1bb95] font-medium text-[14px]' to='/contact'>CONTACT</NavLink></li>
                                <ListDropMenu blogs={blogs}></ListDropMenu>
                            </ul>

                        </div>
                        <div className='flex'>
                            <div className='border-gray-950 border-r-[0.5px] mr-7 pr-7 h-[40px] flex items-center'>
                                <input className='outline-none text-[14px]' type='text' placeholder='Enter' />
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
                <Routes>
                    <Route path='/about' element={<About></About>} />
                    <Route path='/' element={<MainComponent />} />
                    <Route path={`/blog/:id`} element={<DescriptionBlog />} />
                    <Route path={`/blogs/:category`} element={<CategoryFilter />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}
export default HeaderComponent