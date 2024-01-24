import { create } from "zustand";
// import { useParams } from 'react-router-dom';

const useApiStore = create((set, get) => ({
    blogs: [],
    blog: null,
    searchKey: '',
    fetchAllBlogs: async () => {
        const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30';
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