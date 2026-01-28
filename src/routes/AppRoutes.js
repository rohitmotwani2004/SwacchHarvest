import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage, CartPage, ContactUsPage, CourseDetailsPage, Courses, FarmingEssentialsProducts, FarmProduceProducts, GovernmentSubsidies, HomePage, InventoryManagement, Login, PlaylistPage, PrivacyPolicyPage, ProductDetailsPage, Register, ShopPage, TermsAndConditionsPage } from '../pages'


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/shop/farming-essentials' element={<FarmingEssentialsProducts/>}></Route>
        <Route path='/shop/farm-produce' element={<FarmProduceProducts/>}></Route>
        <Route path='/products/:id' element={<ProductDetailsPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage/>}></Route>
        <Route path='/contact-us' element={<ContactUsPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/subsidies' element={<GovernmentSubsidies/>}></Route>
        <Route path='/inventory-management' element={<InventoryManagement/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:id' element={<CourseDetailsPage/>}></Route>  {/* Course Details Page */}
        <Route path='/playlist/:id' element={<PlaylistPage/>}></Route>  {/* Playlist Page */}
    </Routes>
  )
}
