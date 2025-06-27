import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop'
import { HeaderMiddle } from './components/HeaderMiddle'
import { HeaderSearch } from './components/HeaderSearch'
import UncontrolledExample from './components/UncontrolledExample'
import { Category } from './components/Category'
import FeatureArea from './components/FeatureArea'
import FeaturedGrocery from './components/FeaturedGrocery'
import ProductsWithDiscount from './components/ProductsWithDiscounts'
import WeeklyBestSellingGroceries from './components/WeeklyBestSellingGroceries'
import CategoryFeatureArea from './components/CategoryFeatureArea'
import TopTrendingProducts from './components/TopTrendingProducts'
import LatestBlogPosts from './components/LatestBlogPosts'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Header from './components/dashboard/Header'
import Sidebar from './components/dashboard/Sidebar'
import AddProduct from './components/dashboard/AddProduct'
import { ProductList } from './components/ProductList'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={

            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
             <UncontrolledExample />
              <ProductList />
               <FeatureArea /> 
               <FeaturedGrocery />
              <ProductsWithDiscount />
              <WeeklyBestSellingGroceries />
              <CategoryFeatureArea />
              <TopTrendingProducts />
              <LatestBlogPosts />
              <Footer /> 
             
            </>
          } />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <Header />
              <Sidebar />
              <AddProduct />
            </DashboardLayout>
          } />

           

          {/* <Route path="/dashboard/add-product" element={
             <DashboardLayout>
             <Sidebar />
            </DashboardLayout>
          }/> */}
        </Routes>
      </Router>







    </>
  )
}

export default App
