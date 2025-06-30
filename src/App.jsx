import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderTop from './components/HeaderTop';
import { HeaderMiddle } from './components/HeaderMiddle';
import { HeaderSearch } from './components/HeaderSearch';
import UncontrolledExample from './components/UncontrolledExample';
import { Category } from './components/Category';
import FeatureArea from './components/FeatureArea';
import FeaturedGrocery from './components/FeaturedGrocery';
import ProductsWithDiscount from './components/ProductsWithDiscounts';
import WeeklyBestSellingGroceries from './components/WeeklyBestSellingGroceries';
import CategoryFeatureArea from './components/CategoryFeatureArea';
import TopTrendingProducts from './components/TopTrendingProducts';
import LatestBlogPosts from './components/LatestBlogPosts';
import Footer from './components/Footer';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Header from './components/dashboard/Header';
import Sidebar from './components/dashboard/Sidebar';
import AddProduct from './components/dashboard/AddProduct';
import { ProductList } from './components/ProductList';
import AboutPage from './components/AboutPage';
import VendorList from './components/VendorList';
import VendorDetails from './components/VendorDetails';
import BlogMain from './components/BlogMain';
import ContactMain from './components/ContactMain';
import AccountPage from './components/AccountPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'; // ✅ Add this at the top
import { WishlistProvider } from './context/WishlistContext';
import Wishlist from './components/Wishlist';
import {Login} from './components/Login';


function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            {/* Home Page */}
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

            {/* About Page */}
            <Route path="/about" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <AboutPage />
                <Footer />
              </>
            } />

            {/* Account Page (fixed typo) */}
            <Route path="/account" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <AccountPage />
                <Footer />
              </>
            } />

            {/* Vendor Pages */}
            <Route path="/vendor" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <VendorList />
                <Footer />
              </>
            } />

            <Route path="/vendorDetails" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <VendorDetails />
                <Footer />
              </>
            } />

            {/* Blog Page */}
            <Route path="/blogmain" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <BlogMain />
                <Footer />
              </>
            } />

            <Route path="/cart" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <Cart />
                <Footer />
              </>
            } />


            {/* Contact Page */}
            <Route path="/contact" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <ContactMain />
                <Footer />
              </>
            } />
            <Route path="/wishlist" element={
              <>
                <HeaderTop />
                <HeaderSearch />
                <HeaderMiddle />
                <Wishlist />
                <Footer />
              </>
            } />

            <Route path="/login" element={<Login />} />

            {/* Dashboard Page */}
            <Route path="/dashboard" element={
              <DashboardLayout>
                
                <Sidebar />
                <AddProduct />
              </DashboardLayout>
            } />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
