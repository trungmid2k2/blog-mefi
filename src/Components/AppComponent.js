import Header from './layout/Header'
import Footer from "./layout/Footer"
import About from './layout/pages/About'
import Main from './layout/Main'
import DescriptionBlog from './layout/pages/DescriptionBlog'
import CategoryFilter from './layout/pages/CategoryFilter'
import { Route, Routes } from 'react-router-dom'

function AppComponent() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path='/blog-mefi/about' element={<About></About>} />
                <Route path='/blog-mefi' element={<Main />} />
                <Route path={`/blog-mefi/blog/:id`} element={<DescriptionBlog />} />
                <Route path={`/blog-mefi/blogs/:category`} element={<CategoryFilter />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}
export default AppComponent