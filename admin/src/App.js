import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {useContext} from 'react'

import { AuthContext } from './context/authContext/AuthContext'

import Topbar from '../src/components/topbar/Topbar'
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

import './App.css';

function App() {

  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {user && (
      <>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />  
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newuser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} /> 
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} />
          </Routes>
        </div>
      </>
      )}
    </BrowserRouter>
  );
}

export default App;
