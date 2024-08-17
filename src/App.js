import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/pages/Layout'
import Main from './components/pages/Main'
import HeadBlog from './components/pages/blog/HeadBlog';
import HeadCourse from './components/pages/course/HeadCourse';
import Signin from './components/auth/Signin';
import CourseDetails from './components/pages/course/CourseDetails';
import BlogDetails from './components/pages/blog/BlogDetails';
import Signup from './components/auth/Signup';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='blog' element={<HeadBlog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='course' element={<HeadCourse />} />
          <Route path='course/:id' element={<CourseDetails />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App