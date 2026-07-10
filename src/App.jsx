import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllProduct from "./pages/AllProduct";
import CourseDetail from "./pages/CourseDetail";
import PaymentMethods from "./pages/PaymentMethods";
import Payment from "./pages/Payment";
import ChangeMethods from "./pages/ChangeMethods";
import FinishPayment from "./pages/FinishPayment";
import PendingPayment from "./pages/PendingPayment";
import Order from "./pages/Order";
import MyClass from "./pages/MyClass";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Rules from "./pages/Rules";
import Question from "./pages/Question";
import Congrats from "./pages/Congrats";
import TryAgain from "./pages/TryAgain";
import Summary from "./pages/Summary";
import Finish from "./pages/Finish";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/changemethods" element={<ChangeMethods />} />
        <Route path="/finishpayment" element={<FinishPayment />} />
        <Route path="/pendingpayment" element={<PendingPayment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/my-class" element={<MyClass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/video" element={<Video />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/question" element={<Question />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/tryagain" element={<TryAgain />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
