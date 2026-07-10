import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Certificate.css";

import sertifikatImg from "/sertifikat.png";
import mentorImg from "/ava1.jpg";
import { Link } from "react-router-dom";

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V14M12 14L8 10M12 14L16 10M5 17V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Certificate() {
  return (
    <div className="sertifikat-page">
      <Navbar />

      <main className="sertifikat-main">
        <div className="sertifikat-container">
          <div className="course-breadcrumb">
            <Link to="/home">Beranda</Link>
            <span className="separator">/</span>
            <Link to="">Desain</Link>
            <span className="separator">/</span>
            <Link to="">Gapai Karir</Link>
            <span className="separator">/</span>
            <strong>Sertifikat</strong>
          </div>

          <section className="sertifikat-card">
            <div className="sertifikat-preview">
              <div className="sertifikat-side-panel" />

              <div className="sertifikat-image-wrap">
                <img
                  src={sertifikatImg}
                  alt="Certificate"
                  className="sertifikat-image"
                />
              </div>

              <div className="sertifikat-side-panel" />
            </div>

            <div className="sertifikat-course-info">
              <div className="sertifikat-course-left">
                <h2>Big 4 Auditor Financial Analyst</h2>
                <p>
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan kurikulum terbaik
                </p>

                <div className="instructor">
                  <span className="instructor-avatar instructor-avatar-video avatar-1" />

                  <div className="instructor-info">
                    <div className="instructor-video">
                      <strong>Jenna Ortega</strong>
                      <small>Senior Accountant di Gojek</small>
                    </div>
                  </div>
                </div>

                <div className="sertifikat-rating">
                  <span className="stars">★★★☆☆</span>
                  <span className="rating-score">3.5 (86)</span>
                </div>
              </div>

              <div className="sertifikat-course-right">
                <button className="download-sertifikat-btn">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0H6L0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM8 15L4 11H7V7.02L9 7V11H12L8 15Z"
                      fill="#3ECF4C"
                    />
                  </svg>
                  <span>Download Sertifikat</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
