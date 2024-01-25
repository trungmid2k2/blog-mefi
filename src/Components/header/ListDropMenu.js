import { NavLink } from "react-router-dom";
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
export default ListDropMenu