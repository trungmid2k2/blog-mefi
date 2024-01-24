import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import useDesPost from "../../zustand/descriptionPost";

function DescriptionBlog() {
    const { id } = useParams()
    // const [blog, setBlog] = useState([])
    const { blog, setId, fetchDesCriptionPost } = useDesPost()

    // const fetchDesCriptionPost = async () => {
    //     const url = `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setBlog(data.blog)
    //         console.log(data); // Dữ liệu của blog với id tương ứng
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        setId(id)
        fetchDesCriptionPost();
    }, [id, setId, fetchDesCriptionPost]);

    const dateCreate = new Date(blog.created_at)
    const day = dateCreate.getDay()
    const month = dateCreate.getMonth() + 1
    const year = dateCreate.getFullYear()
    return (
        <>
            <div className="py-[110px]">
                <div className=" shadow-[0_0px_8px_0px_rgba(0,0,0,0.5)] w-[1210px] text-center mx-auto ">
                    <div className='pt-[65px]'>
                        <p className="text-[#d1bb95] py-[15px]">MONTH {month} {day}, {year} </p>
                        <h1 className="text-[45px] ">{blog.description}</h1>

                    </div>
                    <div className="flex justify-center italic font-thin py-[30px]">
                        <div className="mx-4 cursor-pointer  hover:text-[#d1bb95]">
                            <span className="text-[#a6a6a6]">by </span>User {blog.user_id}
                        </div>
                        <div className="mx-4 cursor-pointer hover:text-[#d1bb95]">
                            Category: <span className="text-[#a6a6a6]">{blog.category}</span>
                        </div>
                    </div>
                    <div className="mb-[50px]">
                        <img className='h-[498px] w-[968px] mx-auto' src={blog.photo_url} alt="cc"></img>
                    </div>
                    <div>
                        <div className="w-[775px] mx-auto text-left text-[16px] font-thin">{blog.content_text}</div>
                    </div>
                    <br></br>
                    <div>
                        <div className="w-[775px] mx-auto text-left" dangerouslySetInnerHTML={{ __html: blog.content_html }}></div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default DescriptionBlog