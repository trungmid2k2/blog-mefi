import { create } from "zustand";

const useCatePost = create((set, get) => ({
    blogs: [],
    currentPage: 1,
    itemsPerPage: 10,
    category: '',
    setCurrentPage: (page) => set({ currentPage: page }),
    setCategory: (category) => set({ category }),
    fetchCategoryPost: async () => {
        const { category, currentPage, itemsPerPage } = get();
        const url = `https://api.slingacademy.com/v1/sample-data/blog-posts?filter[category]=${category}&offset=5&limit=50`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const filteredBlogs = data.blogs.filter((blog) => blog.category === category);
            set({ blogs: filteredBlogs });
        } catch (error) {
            console.log(error);
        }
    },
}))
export default useCatePost