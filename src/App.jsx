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
import AboutPage from './components/AboutPage'
import VendorList from './components/VendorList'
import VendorDetails from './components/VendorDetails'
import BlogMain from './components/BlogMain'
import { Contact } from 'lucide-react'
import ContactMain from './components/ContactMain'







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

          {/* About page route */}
          <Route path="/about" element={
            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
              <AboutPage />
              <Footer />
            </>
          } />
          {/* Vendor List page route */}
          <Route path="/vendor" element={
            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
              <VendorList />
              <Footer />
            </>
          } />
          {/* Vendor List page route */}
          <Route path="/vendorDetails" element={
            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
              <VendorDetails />
              <Footer />
            </>
          } />

          <Route path="/blogmain" element={
            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
              <BlogMain />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <HeaderTop />
              <HeaderSearch />
              <HeaderMiddle />
              <ContactMain />
             
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
