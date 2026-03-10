import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout';
import Home from './features/home/Home';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';
import AdminPanel from './features/admin/AdminPanel';
import ProductAddForm from './features/admin/ProductAddForm';
import ProductEdit from './features/admin/ProductEdit';
import ProductDetail from './features/products/ProductDetail';
import CheckOut from './features/carts/CheckOut';
import UserProfile from './features/profile/UserProfile';
import Order from './features/orders/Order';
import Shop from './features/shop/Shop';
import Contact from './features/contact/Contact';
import Blog from './features/blogs/Blog';
import CheckOutBilling from './features/carts/CheckOutBilling';
import AboutUs from './features/about-us/AboutUs';
import CartBox from './features/carts/CartBox';
import BlogAddForm from './features/blogs/BlogPage';
import BlogEdit from './features/blogs/BlogEdit';
import BlogAdd from './features/blogs/BlogAdd';
import User from './features/user/User';
import BlogPage from './features/blogs/BlogPage';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Register />
        },
        {
          path: 'profile',
          element: <UserProfile />
        },
        {
          path: 'order/:id',
          element: <Order />
        },
        {
          path: 'cart-box',
          element: <CartBox />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: 'blog-page',
          element: <BlogPage />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog-add',
          element: <BlogAdd />
        },
        {
          path: 'blog-edit/:id',
          element: < BlogEdit />
        },
        {
          path: 'admin-panel',
          element: <AdminPanel />
        },
        {
          path: 'products/:id',
          element: < ProductDetail />
        },
        {
          path: 'product-edit/:id',
          element: <ProductEdit />
        },
        {
          path: 'product-add',
          element: <ProductAddForm />
        },
        {
          path: 'billing',
          element: <CheckOutBilling />
        },
        {
          path: 'checkout',
          element: <CheckOut />
        },
        {
          path: 'about',
          element: <AboutUs />
        },
        {
          path: 'users',
          element: <User />
        }

      ]
    }

  ]);



  return <RouterProvider router={router} />
}
