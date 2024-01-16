import MainComponent from "./layout/MainComponent"
import About from "./layout/pages/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderComponent from './layout/HeaderComponent'
import FooterComponent from "./layout/FooterComponent"
import DescriptionBlog from "./layout/pages/DescriptionBlog"
function AppComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<About></About>} />
                    <Route path='/' element={<MainComponent />} />
                    <Route path={`/blog/:id`} element={<DescriptionBlog />} />
                </Routes>
            </BrowserRouter> */}
            <FooterComponent></FooterComponent>
        </>
    )
}
export default AppComponent