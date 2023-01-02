import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyServices from "./Pages/Dashboard/MyServices";
import Payment from "./Component/Payment/Payment";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddTechnician from "./Pages/Dashboard/AddTechnician";
import ManageTechnician from "./Pages/Dashboard/ManageTechnician";
import Helpline from "./Pages/Helpline/Helpline";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Booking from "./Component/Booking/Booking";
import { useState } from "react";
import Pricing from "./Pages/Pricing/Pricing";
function App() {
  const [order,setOrder]= useState({});
  const [date, setDate] = useState(new Date());
  // const [serviceBooking, setServiceBooking] = useState(null);
  return (
    // max-w-7xl mx-auto px-12
    <div> 
      <Routes>
        <Route path="/" element={<Home date={date}  setOrder={setOrder}/>} />
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/helpline" element={<Helpline/>} />

        <Route
          path="/services"
          element={
            <RequireAuth>
              <ServicesPage date={date} setDate={setDate}/>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyServices />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path="addTechnician" element={<RequireAdmin><AddTechnician/></RequireAdmin>}></Route>
          <Route path="manageTechnician" element={<RequireAdmin><ManageTechnician/></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking order={order} setOrder={setOrder} date={date} setDate={setDate}  />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
