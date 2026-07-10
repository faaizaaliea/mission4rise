import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../css/Profile.css";
export default function Profile() {
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+62");
  const codeRef = useRef(null);

  const codeOptions = ["+62", "+60", "+1"];

  const handleSelectCode = (code) => {
    setSelectedCode(code);

    setProfile((prev) => ({
      ...prev,
      code,
    }));

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (codeRef.current && !codeRef.current.contains(e.target)) {
        setIsOpen(false);
      }

      if (genderRef.current && !genderRef.current.contains(e.target)) {
        setIsGenderOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [profile, setProfile] = useState({
    name: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    phone: "81234567890",
    code: "+62",
    gender: "Perempuan",
    password: "howyoulikethat",
    confirmPassword: "howyoulikethat",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Perempuan");
  const genderRef = useRef(null);

  const genderOptions = ["Perempuan", "Laki-laki"];

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);

    setProfile((prev) => ({
      ...prev,
      gender,
    }));

    setIsGenderOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="xxorder-order-page">
        <div className="xxorder-order-container">
          {/* Sidebar */}
          <aside className="xxorder-order-sidebar">
            <h2>Ubah Profil</h2>

            <p>Ubah data diri Anda</p>

            <div className="xxorder-sidebar-menu">
              <Link
                to="/profile"
                className="xxorder-sidebar-item xxorder-active"
              >
                <img
                  src="/profilaktif.png"
                  alt="profile"
                  className="xxorder-icon-sidebar-menu"
                />
                Profil Saya
              </Link>

              <Link to="/my-class" className="xxorder-sidebar-item">
                <img
                  src="/kelasnon.png"
                  alt="class"
                  className="xxorder-icon-sidebar-menu"
                />
                Kelas Saya
              </Link>

              <Link to="/order" className="xxorder-sidebar-item">
                <img
                  src="/pesanannon.png"
                  alt="order"
                  className="xxorder-icon-sidebar-menu"
                />
                Pesanan Saya
              </Link>
            </div>
          </aside>

          {/* Content */}
          <section className="profile-content">
            <div className="profile-header">
              <img src="/image.png" alt="" className="profile-photo" />

              <div className="profile-info">
                <h3>Jennie Ruby Jane</h3>
                <p>rubyjane@gmail.com</p>

                <button className="change-photo">Ganti Foto Profil</button>
              </div>
            </div>

            <div className="profile-form">
              <div className="form-group name">
                <div className="input-wrapper">
                  <label>Nama Lengkap</label>
                  <input
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group email">
                <div className="input-wrapper">
                  <label>E-Mail</label>
                  <input
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group code">
                <label>&nbsp;</label>

                <div className="profile-select" ref={codeRef}>
                  <button
                    type="button"
                    className={`profile-select-btn ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>{selectedCode}</span>

                    <span
                      className={`profile-select-icon ${isOpen ? "rotate" : ""}`}
                    >
                      <SortChevronIcon />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="profile-select-menu">
                      {codeOptions.map((code) => (
                        <div
                          key={code}
                          className={`profile-select-item ${
                            selectedCode === code ? "active" : ""
                          }`}
                          onClick={() => handleSelectCode(code)}
                        >
                          {code}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group phone">
                <div className="input-wrapper">
                  <label>No. Hp</label>
                  <input
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {isMobile && (
                <>
                  <div className="form-group gender">
                    <div className="input-wrapper">
                      <label>Jenis Kelamin</label>

                      <div className="profile-select" ref={genderRef}>
                        <button
                          type="button"
                          className={`profile-select-btn ${
                            isGenderOpen ? "active" : ""
                          }`}
                          onClick={() => setIsGenderOpen(!isGenderOpen)}
                        >
                          <span>{selectedGender}</span>

                          <span
                            className={`profile-select-icon ${
                              isGenderOpen ? "rotate" : ""
                            }`}
                          >
                            <SortChevronIcon />
                          </span>
                        </button>

                        {isGenderOpen && (
                          <div className="profile-select-menu">
                            {genderOptions.map((gender) => (
                              <div
                                key={gender}
                                className={`profile-select-item ${
                                  selectedGender === gender ? "active" : ""
                                }`}
                                onClick={() => handleSelectGender(gender)}
                              >
                                {gender}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group password">
                    <div className="input-wrapper password-wrapper">
                      <label>Password</label>

                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={profile.password}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <img
                          src={
                            showPassword ? "/eyesopen.png" : "/eyesclose.png"
                          }
                          alt="toggle password"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="form-group confirm-password">
                    <div className="input-wrapper">
                      <label>Konfirmasi Password</label>

                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={profile.confirmPassword}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <img
                          src={
                            showConfirmPassword
                              ? "/eyesopen.png"
                              : "/eyesclose.png"
                          }
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
              <button className="save-btn">Simpan</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
