
import Header from './Components/header/Header'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Main from './layout/Main'
import DescriptionBlog from './pages/DescriptionBlog'
import CategoryFilter from './pages/CategoryFilter'
import Footer from './pages/Footer';

function App() {
  return (
    <div className="">
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

    </div>
  );
}

export default App;
