import Header from "./pages/Header"
import Footer from "./pages/Footer"
import About from './pages/About'
import Main from './layout/Main'
import DescriptionBlog from './pages/DescriptionBlog'
import CategoryFilter from './pages/CategoryFilter'
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