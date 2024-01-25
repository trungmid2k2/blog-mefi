import { create } from "zustand";
// import { useParams } from 'react-router-dom';

const useApiStore = create((set, get) => ({
    blogs: [],
    blog: null,
    currentPage: 1,
    itemsPerPage: 6,
    category: '',
    setCurrentPage: (page) => set({ currentPage: page }),
    setCategory: (category) => set({ category }),
    searchKey: '',
    fetchAllBlogs: async () => {
        const { currentPage, itemsPerPage } = get();
        const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=40';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch blog data');
            }
            const data = await response.json();
            set({ blogs: data.blogs });
        } catch (error) {
            console.error(error);
        }
    },
    setSearchKey: (searchKey) => set({ searchKey })

}))
export default useApiStore