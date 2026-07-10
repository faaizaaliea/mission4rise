import Stepper from "./Stepper";
import { useState } from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";

function ChevronDownIcon() {
  return (
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
}

function Navbar({ variant = "default", currentStep = 1 }) {
  const [progressOpen, setProgressOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className={`home-header ${variant}`}>
      <div className="container navbar">
        {variant !== "video" && variant !== "finish" && (
          <a href="/" className="brand">
            <img src="/Logo.png" alt="videobelajar" />
          </a>
        )}

        {/* DESKTOP */}
        <nav
          className={`home-nav ${
            variant === "payment"
              ? "payment-nav"
              : variant === "video" || variant === "finish"
                ? "video-nav"
                : ""
          }`}
        >
          {variant === "default" && (
            <div className="desktop-nav">
              <a href="#" className="kategori-nav">
                Kategori
              </a>
              <div className="profile-wrapper">
                <img
                  src="/ava1.jpg"
                  alt="profile"
                  onClick={() => setDesktopOpen(!desktopOpen)}
                />

                {desktopOpen && (
                  <div className="profile-dropdown">
                    <a href="#">Profil Saya</a>
                    <a href="#">Kelas Saya</a>
                    <a href="#">Pesanan Saya</a>

                    <a href="#" className="logout">
                      Keluar
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                          fill="#FF5C2B"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {variant === "payment" && (
            <div className="navbar-stepper">
              <Stepper currentStep={currentStep} />
            </div>
          )}
          {variant === "video" && (
            <div className="video-navbar">
              <div className="video-left">
                <button className="video-back">
                  <img src="/arrowleft.png"></img>
                </button>

                <span className="video-course-title">
                  Foundations of User Experience Design
                </span>
              </div>

              <div className="video-navbar-right">
                <div className="video-progress">
                  <div className="video-progress-bar">
                    <div className="video-progress-fill"></div>
                  </div>
                  <div className="progress-wrapper">
                    <button
                      className="progressdetail"
                      onClick={() => setProgressOpen(!progressOpen)}
                    >
                      <span>10/12</span>
                      <ChevronDownIcon />
                    </button>

                    {progressOpen && (
                      <div className="progress-dropdown">
                        <h2>25% Modul Telah Selesai</h2>
                        <p>
                          Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                        </p>
                        <button>Ambil Sertifikat</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="profile-wrapper">
                  <img
                    src="/ava1.jpg"
                    alt="profile"
                    onClick={() => setDesktopOpen(!desktopOpen)}
                  />

                  {desktopOpen && (
                    <div className="profile-dropdown">
                      <a href="#">Profil Saya</a>
                      <a href="#">Kelas Saya</a>
                      <a href="#">Pesanan Saya</a>

                      <a href="#" className="logout">
                        Keluar
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                            fill="#FF5C2B"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {variant === "video" && (
            <div className="video-navbar-mobile">
              <button className="video-back">
                <img src="/arrowleft.png" alt="Back" />
              </button>
              <span className="video-course-title-mobile">
                Foundations of User Experience Design
              </span>
              <div className="progress-wrapper">
                <button
                  className="progressdetail-mobile"
                  onClick={() => setProgressOpen(!progressOpen)}
                >
                  <span>10/12</span>
                  <ChevronDownIcon />
                </button>

                {progressOpen && (
                  <div className="progress-dropdown">
                    <h2>25% Modul Telah Selesai</h2>
                    <p>Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
                    <button>Ambil Sertifikat</button>
                  </div>
                )}
              </div>
              <button
                className="menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 15.5V17.5H22V15.5H2ZM2 10.5V12.5H22V10.5H2ZM2 5.5V7.5H22V5.5H2Z"
                    fill="#4A505C"
                  />
                </svg>
              </button>
              {mobileOpen && (
                <div className="mobile-dropdown">
                  <a href="#">Kategori</a>
                  <a href="#">Profil Saya</a>
                  <a href="#">Kelas Saya</a>
                  <a href="#">Pesanan Saya</a>

                  <a href="#" className="logout">
                    Keluar
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                        fill="#FF5C2B"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          )}
          {variant === "finish" && (
            <div className="video-navbar">
              <div className="video-left">
                <button className="video-back">
                  <img src="/arrowleft.png" alt="Back" />
                </button>

                <span className="video-course-title">
                  Foundations of User Experience Design
                </span>
              </div>

              <div className="video-navbar-right">
                <div className="progress-wrapper">
                  <button
                    className="certificate-trigger"
                    onClick={() => setProgressOpen(!progressOpen)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
                        fill="#FFBD3A"
                      />
                    </svg>
                    <span>Ambil Sertifikat</span>
                    <ChevronDownIcon />
                  </button>

                  {progressOpen && (
                    <div className="progress-dropdown certificate-dropdown">
                      <h2>Modul sudah selesai</h2>
                      <p>
                        16 dari 16 modul telah selesai, silahkan download
                        sertifikat
                      </p>
                      <button onClick={() => navigate("/certificate")}>
                        Ambil Sertifikat
                      </button>
                    </div>
                  )}
                </div>

                <div className="profile-wrapper">
                  <img
                    src="/ava1.jpg"
                    alt="profile"
                    onClick={() => setDesktopOpen(!desktopOpen)}
                  />

                  {desktopOpen && (
                    <div className="profile-dropdown">
                      <a href="#">Profil Saya</a>
                      <a href="#">Kelas Saya</a>
                      <a href="#">Pesanan Saya</a>

                      <a href="#" className="logout">
                        Keluar
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                            fill="#FF5C2B"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* MOBILE */}
        {(variant === "default" || variant === "payment") && (
          <nav className="mobile-nav">
            <button
              className="menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15.5V17.5H22V15.5H2ZM2 10.5V12.5H22V10.5H2ZM2 5.5V7.5H22V5.5H2Z"
                  fill="#4A505C"
                />
              </svg>
            </button>

            {mobileOpen && (
              <div className="mobile-dropdown">
                <a href="#">Kategori</a>
                <a href="#">Profil Saya</a>
                <a href="#">Kelas Saya</a>
                <a href="#">Pesanan Saya</a>

                <a href="#" className="logout">
                  Keluar
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                      fill="#FF5C2B"
                    />
                  </svg>
                </a>
              </div>
            )}
          </nav>
        )}
        {variant === "payment" && (
          <div className="navbar-stepper mobile-stepper">
            <Stepper currentStep={currentStep} />
          </div>
        )}
        {variant === "finish" && (
          <div className="video-navbar-mobile">
            <button className="video-back">
              <img src="/arrowleft.png" alt="Back" />
            </button>

            <span className="video-course-title-mobile">
              Foundations of User Experience Design
            </span>

            <div className="progress-wrapper">
              <button
                className="certificate-trigger-mobile"
                onClick={() => setProgressOpen(!progressOpen)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
                    fill="#FFBD3A"
                  />
                </svg>
                <ChevronDownIcon />
              </button>

              {progressOpen && (
                <div className="progress-dropdown certificate-dropdown">
                  <h2>Modul sudah selesai</h2>
                  <p>
                    16 dari 16 modul telah selesai, silahkan download sertifikat
                  </p>
                  <button onClick={() => navigate("/certificate")}>
                    Ambil Sertifikat
                  </button>{" "}
                </div>
              )}
            </div>

            <button
              className="menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 15.5V17.5H22V15.5H2ZM2 10.5V12.5H22V10.5H2ZM2 5.5V7.5H22V5.5H2Z"
                  fill="#4A505C"
                />
              </svg>
            </button>

            {mobileOpen && (
              <div className="mobile-dropdown">
                <a href="#">Kategori</a>
                <a href="#">Profil Saya</a>
                <a href="#">Kelas Saya</a>
                <a href="#">Pesanan Saya</a>

                <a href="#" className="logout">
                  Keluar
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                      fill="#FF5C2B"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
