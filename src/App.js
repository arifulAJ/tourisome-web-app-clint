import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./Components/Registaion/Login";
import Register from "./Components/Registaion/Register";
import Footer from "./Components/ShareComponents/Footer/Footer";
import Navigation from "./Components/ShareComponents/Navbar/Navigation";
import About from "./Pages/About/About";
import Adventure from "./Pages/Adventure/Adventure";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Hotels/Booking";
import Hotels from "./Pages/Hotels/Hotels";
import Admin from "./Pages/OnlyAdmin/Admin";
import TourPlace1 from "./Pages/TourPlace/TourPlace1";
import TourPlace2 from "./Pages/TourPlace/TourPlace2";
import TourPlace3 from "./Pages/TourPlace/TourPlace3";
import TourPlace4 from "./Pages/TourPlace/TourPlace4";
import TourPlace5 from "./Pages/TourPlace/TourPlace5";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/topten" element={<TourPlace1 />} />
      <Route path="/topten2" element={<TourPlace2 />} />
      <Route path="/topten3" element={<TourPlace3 />} />
      <Route path="/topten4" element={<TourPlace4 />} />
      <Route path="/topten5" element={<TourPlace5 />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/hotels" element={<Hotels/>} />
      <Route path="/resister" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/adventure" element={<Adventure/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/booking/:id" element={<Booking/>} />
     
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
