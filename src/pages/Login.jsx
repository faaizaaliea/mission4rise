import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login berhasil!");
    navigate("/home");
  };

  return (
    <>
      <AuthHeader />

      <main className="page-shell">
        <section className="login-card" aria-labelledby="login-title">
          <div className="card-heading">
            <h1 id="login-title">Masuk ke Akun</h1>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>

          <form
            className="login-form"
            id="loginForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="field">
              <label htmlFor="email">
                E-Mail <span aria-hidden="true">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue="babymonster@yg.co.id"
                required
              />

              <p className="error-message"></p>
            </div>

            <div className="field">
              <label htmlFor="password">
                Kata Sandi <span aria-hidden="true">*</span>
              </label>

              <div className="password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  defaultValue="videobelajar"
                  required
                  minLength={8}
                />

                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Tampilkan kata sandi"
                  title="Tampilkan kata sandi"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.3 5.4A10.5 10.5 0 0 1 12 5c5 0 8.7 4.4 10 7-0.5 1-1.5 2.4-3 3.7" />
                    <path d="M6.5 6.8C4.3 8.3 2.9 10.5 2 12c1.3 2.6 5 7 10 7 1.6 0 3.1-0.5 4.4-1.2" />
                  </svg>
                </button>
              </div>

              <p className="error-message"></p>
            </div>

            <a className="forgot-link" href="#">
              Lupa Password?
            </a>

            <button className="primary-button" type="submit">
              Masuk
            </button>

            <Link to="/register" className="secondary-button">
              Daftar
            </Link>

            <div className="divider" role="separator">
              <span>atau</span>
            </div>

            <button type="button" className="google-button">
              <img src="/Google.png" alt="Google" />
              <span>Masuk dengan Google</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
