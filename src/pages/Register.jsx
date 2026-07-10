import AuthHeader from "../components/AuthHeader";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

function Register() {
  const SortChevronIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L12 15L17 10H7Z" fill="rgba(51, 51, 51, 0.68)" />
    </svg>
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Pendaftaran berhasil!");
    navigate("/login");
  };
  return (
    <>
      <AuthHeader />

      <main className="page-shell">
        <section className="login-card" aria-labelledby="register-title">
          <div className="card-heading">
            <h1 id="register-title">Pendaftaran Akun</h1>
            <p>Yuk, daftarkan akunmu sekarang juga!</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="fullname">
                Nama Lengkap <span>*</span>
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">
                E-Mail <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Masukkan email"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phone">
                No. HP <span>*</span>
              </label>
              <div className="phone-group">
                <div className="country-code">
                  <div className="flag">
                    <img src="/indonesia.png" alt="Indonesia" />
                  </div>

                  <div className="dial-code">
                    <span>+62</span>

                    <button type="button" className="code-chevron">
                      <SortChevronIcon />
                    </button>
                  </div>
                </div>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="81234567890"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">
                Kata Sandi <span>*</span>
              </label>
              <div className="password-wrap">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan kata sandi"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="icon-button"
                  id="togglePassword"
                  aria-label="Tampilkan kata sandi"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.3 5.4A10.5 10.5 0 0 1 12 5c5 0 8.7 4.4 10 7-0.5 1-1.5 2.4-3 3.7" />
                    <path d="M6.5 6.8C4.3 8.3 2.9 10.5 2 12c1.3 2.6 5 7 10 7 1.6 0 3.1-0.5 4.4-1.2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">
                Konfirmasi Kata Sandi <span>*</span>
              </label>
              <div className="password-wrap">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Konfirmasi kata sandi"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="icon-button"
                  id="toggleConfirmPassword"
                  aria-label="Tampilkan konfirmasi kata sandi"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.3 5.4A10.5 10.5 0 0 1 12 5c5 0 8.7 4.4 10 7-0.5 1-1.5 2.4-3 3.7" />
                    <path d="M6.5 6.8C4.3 8.3 2.9 10.5 2 12c1.3 2.6 5 7 10 7 1.6 0 3.1-0.5 4.4-1.2" />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="primary-button">
              Daftar
            </button>
            <Link to="/login" className="secondary-button">
              Masuk
            </Link>

            <div className="divider">
              <span>atau</span>
            </div>

            <button type="button" className="google-button">
              <img src="/Google.png" alt="Google" />
              <span>Daftar dengan Google</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
