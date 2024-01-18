import blog1 from '../../images/12.jpg'
import author from '../../images/author.jpg'
import { Facebook, Instagram, Twitter, Google, Pinterest } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
function MainComponent() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
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
    console.log('re-render')
    const Blog = ({ blog }) => {
        const createdAtDate = new Date(blog.created_at);
        const day = createdAtDate.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[createdAtDate.getMonth()].slice(0, 3);
        const year = createdAtDate.getFullYear();
        const cateUpper = blog.category.toUpperCase()
        return (

            <li>
                <div className='w-[370px] mb-[15px]'>
                    <div>
                        <img className='w-[370px]' src={blog.photo_url} alt=''></img>
                    </div>
                    <div className='text-[#d1bb95] py-[10px] text-[16px]'>
                        {blog.created_at ? (
                            <p>{month} {day},{year} / {cateUpper}</p>
                        ) : (
                            <p>No creation date available.</p>
                        )}
                    </div>
                    <div className='py-[10px]'>
                        <NavLink className='font-bold text-[18px] hover:text-[#d1bb95]' to={`/blog-mefi/blog/${blog.id}`}>{blog.title}</NavLink>
                    </div>
                    <div className='italic'>
                        {blog.description}
                    </div>
                </div>
            </li>

        )
    }
    const BlogList = ({ blogs }) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentBlogs = blogs.slice(startIndex, endIndex);
        // const fiveBlogs = blogs.slice(0, 6)
        const blogList = currentBlogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
        return (<>{blogList}</>)
    }
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
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };
    const Latest = ({ blog }) => {
        return (
            <li className='py-[15px]'>
                <div className='flex justify-between'>
                    <div><img className='w-[122px] h-[81px]' src={blog.photo_url} alt=''></img></div>
                    <div className='w-[228px]'>
                        <div className='box-border h-[81px] flex flex-col justify-between'>
                            <div><NavLink className='font-bold text-[16px] leading-none hover:text-[#d1bb95]' to={`/blog-mefi/blog/${blog.id}`}>{blog.description}</NavLink></div>
                            <div><p className='text-[#a6a6a6] italic'>by <span className='text-[#191919]'>{blog.user_id}</span></p></div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
    const ListLatest = ({ blogs }) => {
        const shuffledData = shuffleArray(blogs);
        const randomFiveBlogs = shuffledData.slice(0, 5)
        const listLatest = randomFiveBlogs.map((blog, i) => <Latest key={blog.id} blog={blog}></Latest>)
        return <div>
            <ul>  {listLatest}</ul>
        </div>
    }
    // const ListLatest = ({ blogs, ...props }) => {
    //     const shuffledData = shuffleArray(blogs);
    //     const randomFiveBlogs = shuffledData.slice(0, 5)
    //     return <BlogList blogs={randomFiveBlogs}></BlogList>
    // }
    return (
        <>
            <div className="z-0 ">
                <div className="block w-[1210px] py-[30px] px-[auto] mx-[auto]" >
                    <div className='mt-[80px] flex'>
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
                                            <BlogList blogs={blogs}></BlogList>
                                        </ul> :
                                        <div>Khong co du lieu</div>
                                    }

                                </ul>
                            </div>
                            <div className="flex justify-center pagination">
                                <button
                                    className='text-[#a6a6a6] border-[1px] py-[5px] px-[20px] mx-2 hover:text-black hover:border-black '
                                    onClick={previousPage}
                                    disabled={currentPage === 1}
                                >
                                    &lt; Previous
                                </button>
                                {Array.from({ length: Math.ceil(blogs.length / itemsPerPage) }, (_, index) => (
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
                                    className='text-[#a6a6a6] cursor-pointer border-[1px] py-[5px] px-[20px] mx-2 hover:text-black hover:border-black '
                                    onClick={nextPage}
                                    disabled={currentPage === Math.ceil(blogs.length / itemsPerPage)}
                                >
                                    Next &gt;
                                </button>
                            </div>
                        </div>
                        <div className='px-[30px] '>
                            <div >
                                <div className='w-[370px] text-center bg-black text-white py-2 rounded'>
                                    ABOUT ME
                                </div>
                                <div className='content-center text-center mt-[25px] ' >
                                    <img className='w-[200px] h-[200px] px-[auto] mx-[auto] rounded-[50%]' src={author} alt=''></img>
                                </div>
                                <div className='my-3 text-center'>
                                    Author: Middle on the mic
                                </div>
                                <div className='font-thin w-[370px] text-center'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ipsum adipisicing
                                </div>

                            </div>
                            <div className=''>
                                <div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
                                    SUBSCRIBE & FOLLOW
                                </div>
                                <div className='flex justify-center mb-[30px]'>
                                    <a href='facebook'> <Facebook className='mx-[15px] hover:text-[#d1bb95]'></Facebook></a>
                                    <a href='instagram'> <Instagram className='mx-[15px] hover:text-[#d1bb95]'></Instagram></a>
                                    <a href='twitter'> <Twitter className='mx-[15px] hover:text-[#d1bb95]'></Twitter></a>
                                    <a href='google'> <Google className='mx-[15px] hover:text-[#d1bb95]' /></a>
                                    <a href='pinterest'> <Pinterest className='mx-[15px] hover:text-[#d1bb95]' /></a>
                                </div>
                            </div>
                            <div>
                                <div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
                                    LATEST POSTS
                                </div>
                                <div>
                                    <ul>
                                        <ListLatest blogs={blogs}></ListLatest>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
                                    NEWSLETTER
                                </div>
                                <div className='w-[370px] font-thin px-[10px] mb-7'>
                                    Subscribe our newsletter for get notification about new updates, information discount, etc.
                                </div>
                                <div>
                                    <input className='w-[300px] bg-[#f2f4f5] py-[11px] pl-[20px] outline-none text-[16px]' type='text' placeholder='Enter your email'></input>
                                    <button className='bg-[#d1bb95] py-[11px] px-[17px] ' type='submit'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div >
        </>
    )
}
export default MainComponent 