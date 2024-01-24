import { NavLink } from "react-router-dom";
// import useApiStore from "../../zustand/apiStore";
import { useEffect, useState } from "react";

function PostLatest() {
    const [blogs, setBlogs] = useState([]);
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
    // const { blogs, fetchAllBlogs } = useApiStore();
    useEffect(() => {
        fetchData()
    }, [])

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
    return (<>
        <ListLatest blogs={blogs} />
    </>)
}
export default PostLatest