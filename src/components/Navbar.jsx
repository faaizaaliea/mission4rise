import React from "react";
import Stepper from "./Stepper";
import { useState } from "react";

function Navbar({ variant = "default", currentStep = 1 }) {
  const [progressOpen, setProgressOpen] = useState(false);
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
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className={`home-header ${variant}`}>
      <div className="container navbar">
        {variant !== "video" && (
          <a href="/" className="brand">
            <img src="/Logo.png" alt="videobelajar" />
          </a>
        )}

        {/* DESKTOP */}
        <nav
          className={`home-nav ${
            variant === "payment"
              ? "payment-nav"
              : variant === "video"
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
        </nav>

        {/* MOBILE */}
        {variant === "default" && (
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
      </div>
    </header>
  );
}

export default Navbar;
