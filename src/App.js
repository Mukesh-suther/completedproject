import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from './pages/Home/index';
import Contactus from './pages/Contactus/index';
import Aboutus from './pages/Aboutus/index';
import Downloadourapp from './pages/Downloadourapp/index';
import Faqs from './pages/Faqs/index';
import Membership from './pages/Membership/index'
import Refundpolicy from './pages/Refundpolicy/index'
import Privacypolicy from './pages/Privacypolicy/index'
import Blog from './pages/Blog/index'
import Footer from './Components/Footer'
import TermsOfUse from "./pages/Termsandcondition";
import Instructor from "./pages/Instructors";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route element={<Home/>} path='/' exact ></Route>
        <Route element={<Aboutus/>} path='/about'></Route>
        <Route element={<Contactus/>} path='/contactus'></Route>
        <Route element={<Downloadourapp/>} path='/downloadourapp'></Route>
        <Route element={<Faqs/>} path='/faqs'></Route>
        <Route element={<Membership/>} path='/membership'></Route>
        <Route element={<Refundpolicy/>} path='/refundpolicy'></Route>
        <Route element={<Privacypolicy/>} path='/privacypolicy'></Route>
        <Route element={<Blog/>} path='/blog'></Route>
        <Route element={<TermsOfUse/>} path='/termsandcondition'></Route>
        <Route element={<Instructor/>} path='/instructors'></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
