import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from '../pages/home/Home.jsx'
import Account from '../pages/account/Account.jsx'
import Favourites from '../pages/favourites/Favourites.jsx'
import Invoices from '../pages/invoices/Invoices.jsx'
import Order from '../pages/order/Order.jsx'
import Orders from '../pages/orders/Orders.jsx'
import Product from '../pages/product/Product.jsx'
import Products from '../pages/products/Products.jsx'
import Contact from '../pages/contact/Contact.jsx'
import Cookies from '../pages/cookies/Cookies.jsx'
import About from '../pages/about/About.jsx'
import Personopplysinger from '../pages/personopplysinger/Personopplysinger.jsx'
import Login from '../pages/login/Login.jsx'

export default function Routing() {
    return (
    <>  
        <Container>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="account" element={<Account />} />
                  <Route path="favourites" element={<Favourites />} />
                  <Route path="invoices" element={<Invoices />} />
                  <Route path="order" element={<Order />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="personopplysinger" element={<Personopplysinger />} />
                  <Route path="cookies" element={<Cookies />} />
                  <Route path="products" element={<Products />} />
                  <Route path="product/:id" element={<Product />} />
                  <Route path="login" element={<Login />} />
            </Routes>    
        </Container>
    </>
  );
}