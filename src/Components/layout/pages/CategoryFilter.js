import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
function CategoryFilter() {
    const { category } = useParams();
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const previousPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        if (currentPage < Math.ceil(blogs.length / itemsPerPage))
            setCurrentPage(currentPage + 1)
    }
    useEffect(() => {
        fetchData();
    }, [category]);
    const fetchData = async () => {
        const url = `https://api.slingacademy.com/v1/sample-data/blog-posts?filter[category]=${category}&offset=5&limit=30`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const filteredBlogs = data.blogs.filter(blog => blog.category === category);
            setBlogs(filteredBlogs);
        } catch (error) {
            console.log(error);
        }
    };
    const PostByCategory = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentBlogs = blogs.slice(startIndex, endIndex);
        const listPost = currentBlogs.map((blog, i) =>
        (
            <li className="mx-8" key={i + blog.category}>
                <div className='w-[370px] mb-[15px] text-left'>
                    <div>
                        <img className='w-[370px]' src={blog.photo_url} alt=''></img>
                    </div>
                    <div className='text-[#d1bb95] py-[10px] text-[16px]'>
                        {blog ? (
                            <p>{new Date(blog.created_at).getDate()}
                                /{new Date(blog.created_at).getMonth() + 1}
                                /{new Date(blog.created_at).getFullYear()} / Category: {blog.category}
                            </p>
                        ) : <p>Hided</p>}
                    </div>
                    <div className='py-[10px]'>
                        <NavLink className='font-bold text-[18px] hover:text-[#d1bb95]' to={`/blog/${blog.id}`}>
                            {blog.title}
                        </NavLink>
                    </div>
                    <div className='italic'>
                        {blog.description}
                    </div>
                </div>
            </li>
        ))
        return <> {listPost}</>
    }
    return (
        <>
            <div className="py-[110px]">
                <div className=" shadow-[0_0px_8px_0px_rgba(0,0,0,0.5)] w-[1210px] mx-auto ">
                    <div className='py-[30px]'>
                        <div>
                            <h2 className="mb-[30px]">You search posts by category: '<span className="text-[#d1bb95]">{category.toUpperCase()}</span>' </h2>
                            <ul className="w-[870px] mx-auto flex justify-start flex-wrap">
                                <PostByCategory></PostByCategory>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center pagination pb-7">
                        <button
                            className=
                            {
                                `text-[#a6a6a6] cursor-pointer border-[1px] py-[5px] px-[20px] mx-2 w-[130px] h-[50px]
                            ${currentPage === 1
                                    ? 'hover:none hover:none'
                                    : 'hover:text-black hover:border-black'}`
                            }
                            onClick={previousPage}
                            disabled={currentPage === 1}
                        >
                            &lt; Previous
                        </button>
                        {Array.from({ length: Math.ceil(blogs.length / itemsPerPage) }, (_, index) => (
                            <>
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className=
                                    {
                                        `text-[#a6a6a6] border-[1px] py-[5px] px-[20px] mx-2 hover:text-black hover:border-black
                                         ${currentPage === index + 1 ? 'active' : ''}`
                                    }
                                >
                                    {index + 1}
                                </button>
                            </>
                        )

                        )}
                        <button
                            className=
                            {
                                `text-[#a6a6a6] cursor-pointer border-[1px] py-[5px] px-[20px] mx-2 w-[95px] h-[50px]
                                ${currentPage === Math.ceil(blogs.length / itemsPerPage)
                                    ? 'hover:none hover:none'
                                    : 'hover:text-black hover:border-black'}`}
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(blogs.length / itemsPerPage)}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryFilter