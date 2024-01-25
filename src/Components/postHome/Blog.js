import { NavLink } from "react-router-dom";

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
export default Blog