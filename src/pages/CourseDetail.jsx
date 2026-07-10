import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

import CourseCardHome from "../components/CourseCardHome";
import CourseCard from "../components/CourseCard";

import { useNavigate } from "react-router-dom";
import "../css/CourseDetail.css";

export default function CourseDetail() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);
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
  const courseMaterials = [
    {
      title: "Introduction to Course 1: Foundations of User Experience Design",
      lessons: [
        "The basics of user experience design",
        "Jobs in the fields of user experience",
        "The product development life cycle",
      ],
    },
    {
      title: "Universal design, inclusive design, and equity-focused design",
      lessons: [
        "Universal design principles",
        "Inclusive design",
        "Equity-focused design",
      ],
    },
    {
      title: "Introduction to design sprints",
      lessons: [
        "What is a design sprint?",
        "Sprint phases",
        "Sprint activities",
      ],
    },
    {
      title: "Introduction to UX research",
      lessons: [
        "UX research basics",
        "Research methods",
        "Interview techniques",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="course-detail">
        <div className="course-breadcrumb">
          <Link to="/home">Beranda</Link>
          <span className="separator">/</span>
          <span>Desain</span>
          <span className="separator">/</span>
          <span className="current">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </span>
        </div>
        {/* Hero */}
        <section className="course-hero">
          <img src="/public/1.jpg" alt="" />

          <div className="course-hero-overlay">
            <h1>
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
              Manager.
            </h1>

            <p>
              Belajar bersama tutor profesional di Video Course.
              <br />
              Kapanpun, dimanapun.
            </p>

            <div className="hero-rating">
              ★★★☆☆ <span>3.5 (86)</span>
            </div>
          </div>
        </section>

        <div className="course-layout">
          {/* Left */}
          <div className="course-main">
            {/* Deskripsi */}
            <section className="card">
              <h3>Deskripsi</h3>

              <p>
                Foundations of User Experience (UX) Design adalah yang pertama
                dari rangkaian tujuh kursus yang akan membekali Anda dengan
                keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
                pemula dalam desain pengalaman pengguna. Desainer UX fokus pada
                interaksi yang dilakukan orang dengan produk seperti situs web,
                aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi
                sehari-hari itu dapat digunakan, menyenangkan, dan dapat
                diakses. Peran seorang desainer UX tingkat pemula mungkin
                termasuk berempati dengan pengguna, menentukan poin rasa sakit
                mereka, memunculkan ide untuk solusi desain, membuat wireframe,
                prototipe, dan maket, dan menguji desain untuk mendapatkan umpan
                balik.
              </p>
            </section>

            {/* Tutor */}
            <section className="card">
              <h3>Belajar bersama Tutor Profesional</h3>

              <div className="tutor-list">
                <div className="tutor-card">
                  <div className="tutor-top">
                    <img src="/1.jpg" alt="Tutor" />

                    <div>
                      <h4>Gregorius Edrik Lawanto</h4>
                      <span>
                        Talent Acquisition Specialist di <b>WingsGroup</b>
                      </span>
                    </div>
                  </div>

                  <p>
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>

                <div className="tutor-card">
                  <div className="tutor-top">
                    <img src="/1.jpg" alt="Tutor" />

                    <div>
                      <h4>Gregorius Edrik Lawanto</h4>
                      <span>
                        Talent Acquisition Specialist di <b>WingsGroup</b>
                      </span>
                    </div>
                  </div>

                  <p>
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                    bekerja sebagai Senior Talent Acquisition Specialist di
                    Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                    tahun.
                  </p>
                </div>
              </div>
            </section>

            {/* Materi */}
            <section className="card">
              <h3>Kamu akan Mempelajari</h3>
              <div className="course-accordion">
                <div className="accordion">
                  {courseMaterials.map((section, index) => (
                    <div className="accordion-item" key={index}>
                      <div
                        className={`accordion-header ${
                          open === index ? "active" : ""
                        }`}
                        onClick={() => setOpen(open === index ? null : index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>{section.title}</span>

                        <span className="accordion-icon">
                          {open === index ? (
                            <ChevronUpIcon />
                          ) : (
                            <ChevronDownIcon />
                          )}
                        </span>
                      </div>

                      {open === index && (
                        <div className="accordion-content">
                          {section.lessons.map((lesson, i) => (
                            <div className="courselesson" key={i}>
                              <span>{lesson}</span>

                              <div className="courselesson-info">
                                <span className="courselesson-icon">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                                      stroke="#333333"
                                      strokeOpacity="0.68"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10 15V9L15 12L10 15Z"
                                      stroke="#333333"
                                      strokeOpacity="0.68"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>

                                <span>Video</span>

                                <span className="courselesson-icon">
                                  <span className="clock-icon">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                        stroke="#333333"
                                        strokeOpacity="0.68"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </span>

                                <span>12 Menit</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Review */}
            <section className="card">
              <h3>Rating dan Review</h3>

              <div className="review-list">
                {[1, 2].map((item) => (
                  <div className="review-card" key={item}>
                    <div className="review-top">
                      <img src="/ava1.jpg" alt="" />

                      <div>
                        <h4>Gregorius Edrik Lawanto</h4>
                        <span>Alumni Batch 4</span>
                      </div>
                    </div>

                    <p>
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                      bekerja sebagai Senior Talent Acquisition Specialist di
                      Wings Group Indonesia (Sayap Mas Utama) selama hampir 1
                      tahun.
                    </p>

                    <div className="review-rating">
                      ★★★☆☆ <span>3.5</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <aside className="course-sidebar">
            <div className="buy-card">
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
              <button onClick={() => navigate("/paymentmethods")}>
                Beli Sekarang
              </button>
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
        <section className="related-courses-section">
          <h2>Video Pembelajaran Terkait Lainnya</h2>

          <p className="related-subtitle">
            Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
          </p>

          <div className="related-courses-grid">
            {courses.slice(0, 3).map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
