import "../css/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FinishPayment() {
  return (
    <>
      <Navbar variant="payment" currentStep={3} />
      <div className="mobile-stepper">
        <Stepper currentStep={3} />
      </div>
      <main className="finish-payment">
        <div className="finish-card">
          <img src="/finishpayment.png" className="finish-image" />

          <h2>Pembayaran Berhasil!</h2>

          <p>
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami
            jika ada kendala.
          </p>

          <button className="finish-btn">Lihat Detail Pesanan</button>
        </div>
      </main>
    </>
  );
}
