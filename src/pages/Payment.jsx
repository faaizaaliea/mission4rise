import "../css/Payment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [open, setOpen] = useState("bank");
  const navigate = useNavigate();

  const ChevronUpIcon = () => (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z"
        fill="#3ECF4C"
      />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.59 0.59L6 5.17L1.41 0.59L0 2L6 8L12 2L10.59 0.59Z"
        fill="#3ECF4C"
      />
    </svg>
  );

  return (
    <>
      <Navbar variant="payment" currentStep={2} />
      {/* TIMER */}
      <div className="payment-timer">
        <span>Selesaikan pemesanan dalam</span>

        <div className="timer-box">00</div>
        <span>:</span>
        <div className="timer-box">50</div>
        <span>:</span>
        <div className="timer-box">55</div>
      </div>
      <div className="mobile-stepper">
        <Stepper currentStep={2} />
      </div>

      <main className="payment-page">
        <div className="container payment-layout">
          {/* LEFT */}
          <section className="payment-left">
            {/* PAYMENT INFO */}
            <div className="payment-card">
              <h2>Metode Pembayaran</h2>

              <div className="virtual-account-card">
                <img src="/bca.png" alt="BCA" className="va-logo" />
                <img src="/bcafull.png" alt="BCA" className="va-logo-mobile" />

                <p className="va-title">Bayar Melalui Virtual Account BCA</p>

                <div className="va-number">
                  <span>11739 081234567890</span>

                  <button className="copy-btn">Salin</button>
                </div>
              </div>

              <h3 className="summary-title">Ringkasan Pesanan</h3>

              <div className="summary-row top">
                <p>
                  Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX
                  Designer & Product Manager.
                </p>

                <span>Rp 767.500</span>
              </div>

              <div className="summary-row">
                <span>Biaya Admin</span>

                <span>Rp 7.000</span>
              </div>

              <div className="summary-row total">
                <span>Total Pembayaran</span>
                <span className="price">Rp 774.500</span>
              </div>

              <div className="payment-action">
                <button
                  className="change-method-btn"
                  onClick={() => navigate("/changemethods")}
                >
                  Ganti Metode Pembayaran
                </button>

                <button
                  className="pay-btn"
                  onClick={() => navigate("/finishpayment")}
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>

            {/* ACCORDION */}
            <div className="payment-guide">
              <div className="payment-guide-title">
                <h2>Tata Cara Pembayaran</h2>

                <div className="payment-group">
                  <button
                    className="payment-group-header"
                    onClick={() => setOpen(open === "bank" ? null : "bank")}
                  >
                    <span>ATM BCA</span>

                    {open === "bank" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>

                  {open === "bank" && (
                    <div className="payment-guide-content">
                      <ol>
                        <li>Masukkan kartu ATM dan PIN BCA Anda</li>
                        <li>
                          Di menu utama, pilih "Transaksi Lainnya". Pilih
                          "Transfer". Pilih "Ke BCA Virtual Account"
                        </li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>
                          Pastikan data Virtual Account Anda benar, kemudian
                          masukkan angka yang perlu Anda bayarkan, kemudian
                          pilih "Benar"
                        </li>
                        <li>
                          Cek dan perhatikan konfirmasi pembayaran dari layar
                          ATM, jika sudah benar pilih "Ya", atau pilih "Tidak"
                          jika data di layar masih salah
                        </li>
                        <li>
                          Transaksi Anda sudah selesai. Pilih "Tidak" untuk
                          tidak melanjutkan transaksi lain
                        </li>
                      </ol>
                    </div>
                  )}
                </div>

                <div className="payment-group">
                  <button
                    className="payment-group-header"
                    onClick={() =>
                      setOpen(open === "ewallet" ? null : "ewallet")
                    }
                  >
                    <span>Mobile Banking BCA</span>

                    {open === "ewallet" ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </button>

                  {open === "ewallet" && (
                    <div className="payment-guide-content">
                      <ol>
                        <li>
                          Buka Aplikasi BCA Mobile Pilih "m-BCA", kemudian pilih
                          "m-Transfer"
                        </li>
                        <li>Pilih "BCA Virtual Account"</li>
                        <li>Masukkan nomor Virtual Account, lalu pilih "OK"</li>
                        <li>
                          Klik tombol "Send" yang berada di sudut kanan atas
                          aplikasi untuk melakukan transfer
                        </li>
                        <li>Klik "OK" untuk melanjutkan pembayaran</li>
                        <li>
                          Masukkan PIN Anda untuk meng-otorisasi transaksi
                        </li>
                        <li>Transaksi Anda telah selesai</li>
                      </ol>
                    </div>
                  )}
                </div>

                <div className="payment-group">
                  <button
                    className="payment-group-header"
                    onClick={() => setOpen(open === "card" ? null : "card")}
                  >
                    <span>Internet Banking BCA</span>

                    {open === "card" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>

                  {open === "card" && (
                    <div className="payment-guide-content">
                      <ol>
                        <li>Login ke KlikBCA Individual</li>
                        <li>
                          Pilih "Transfer", kemudian pilih "Transfer ke BCA
                          Virtual Account"
                        </li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran</li>
                        <li>
                          Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada
                          Token BCA Anda, lalu klik tombol "Kirim"
                        </li>
                        <li>Pembayaran telah selesai</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <aside className="course-sidebar">
            <div className="buy-card">
              <img src="/1.jpg" alt="Course" className="pay-course-image" />
              <h3>
                Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
                Manager.
              </h3>
              <div className="price-row">
                <div className="price">Rp 250K</div>

                <div className="old-price">Rp 500K</div>

                <div className="discount">Diskon 50%</div>
              </div>
              <div className="offer">
                <b>Penawaran spesial tersisa 2 hari lagi!</b>
              </div>
              <hr />
              <div className="info">
                <h4>Kelas Ini Sudah Termasuk</h4>
                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L7 15L11 11M9 1.00087C8.90451 1 8.79728 1 8.67471 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.51921 19 3.079 19 4.19694 19L11.8031 19C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2842 14.7822 17.9079C15 17.4805 15 16.9215 15 15.8036V7.32568C15 7.20296 15 7.09561 14.9991 7M9 1.00087C9.28564 1.00347 9.46634 1.01385 9.63884 1.05526C9.84291 1.10425 10.0379 1.18526 10.2168 1.29492C10.4186 1.41857 10.5918 1.59182 10.9375 1.9375L14.063 5.06298C14.4089 5.40889 14.5809 5.58136 14.7046 5.78319C14.8142 5.96214 14.8953 6.15726 14.9443 6.36133C14.9857 6.53376 14.9963 6.71451 14.9991 7M9 1.00087V3.8C9 4.9201 9 5.47977 9.21799 5.90759C9.40973 6.28392 9.71547 6.59048 10.0918 6.78223C10.5192 7 11.079 7 12.1969 7H14.9991M14.9991 7H15.0002"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>Ujian Akhir</span>
                </div>

                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 10.0001L19.553 7.72412C19.8629 7.56926 20.2309 7.58583 20.5256 7.76792C20.8203 7.95002 20.9998 8.27168 21 8.61812V15.3821C20.9998 15.7286 20.8203 16.0502 20.5256 16.2323C20.2309 16.4144 19.8629 16.431 19.553 16.2761L15 14.0001V10.0001Z"
                        stroke="#333333"
                        stroke-opacity="0.68"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="3"
                        y="6"
                        width="12"
                        height="12"
                        rx="2"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>49 Video</span>
                </div>
                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 4V20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H19Z"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 16H7C5.89543 16 5 16.8954 5 18"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 8H15"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>7 Dokumen</span>
                </div>
                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 3V7C14 7.55228 14.4477 8 15 8H19"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 8V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H12"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="6"
                        cy="14"
                        r="3"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 17L3 22L6 20.5L9 22L7.5 17"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>Sertifikat</span>
                </div>
                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9991 7C16.9963 6.71451 16.9857 6.53376 16.9443 6.36133C16.8953 6.15726 16.8142 5.96214 16.7046 5.7832C16.5809 5.58136 16.4089 5.40889 16.063 5.06298L12.9375 1.9375C12.5918 1.59182 12.4186 1.41857 12.2168 1.29492C12.0379 1.18526 11.8429 1.10425 11.6388 1.05526C11.4663 1.01385 11.2856 1.00347 11 1.00087C10.9045 1 10.7973 1 10.6747 1H6.2002C5.08009 1 4.51962 1 4.0918 1.21799C3.71547 1.40973 3.40973 1.71547 3.21799 2.0918C3 2.51962 3 3.08009 3 4.2002V9.00019M16.9991 7C17 7.09561 17 7.20296 17 7.32568V15.8036C17 16.9215 17 17.4805 16.7822 17.9079C16.5905 18.2842 16.2839 18.5905 15.9076 18.7822C15.4802 19 14.921 19 13.8031 19L10 19M16.9991 7H17.0002M16.9991 7H14.1969C13.079 7 12.5192 7 12.0918 6.78223C11.7155 6.59048 11.4097 6.28392 11.218 5.90759C11 5.47977 11 4.9201 11 3.8V1.00087M6 12L8 14M1 19V16.5L8.5 9L11 11.5L3.5 19H1Z"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>Pretest</span>
                </div>
              </div>
              <hr />
              <div className="language">
                <h4>Bahasa Pengantar</h4>

                <div>
                  <span className="sidebar-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.59961 9H20.3996"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.59961 15H20.3996"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4997 3C8.06261 8.50778 8.06261 15.4922 11.4997 21"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 3C15.9371 8.50778 15.9371 15.4922 12.5 21"
                        stroke="#333333"
                        strokeOpacity="0.68"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>Bahasa Indonesia</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <div className="payment-mobile-footer">
        <Footer />
      </div>
    </>
  );
}

export default Payment;
