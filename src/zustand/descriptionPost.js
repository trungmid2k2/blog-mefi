import { create } from "zustand";


const useDesPost = create((set, get) => ({
    blog: [],
    id: null,
    setId: (id) => set({ id }),
    fetchDesCriptionPost: async () => {
        const { id } = get()

        const url = `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
        try {
            const response = await fetch(url)
            const data = await response.json()
            set({ blog: data.blog });

        } catch (error) {
            console.log(error)
        }
    }
}))
export default useDesPost