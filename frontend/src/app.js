import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
export default function App() {
  return (
  <Fragment>
    <BrowserRouter>
      <Routes>
        {/* root components */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          
          {/* login component */}
          <Route path="login" element={<Login/>}/>
  

        </Route>
      </Routes>
    </BrowserRouter>
  </Fragment>);
}
