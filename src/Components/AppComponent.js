import HeaderComponent from './layout/HeaderComponent'
import FooterComponent from "./layout/FooterComponent"
function AppComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HeaderComponent></HeaderComponent>} />
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