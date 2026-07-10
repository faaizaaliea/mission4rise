import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/MyClass.css";

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
        fill="#333333"
        fillOpacity="0.68"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 2.667A1.333 1.333 0 0 0 2 4v8.667c0 .736.597 1.333 1.333 1.333h9.334c.368 0 .666-.298.666-.666V3.333a.666.666 0 0 0-.666-.666H3.333ZM3.333 4h8.667v8.667H3.333a.667.667 0 0 1-.666-.667V4c0-.368.298-.667.666-.667Z"
        fill="#8A8A8A"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.333A6.667 6.667 0 1 0 8 14.667 6.667 6.667 0 0 0 8 1.333Zm0 12A5.333 5.333 0 1 1 8 2.667a5.333 5.333 0 0 1 0 10.666Zm.667-8H7.333v3.334c0 .176.07.346.195.471l2 2 .943-.943-1.804-1.805V5.333Z"
        fill="#8A8A8A"
      />
    </svg>
  );
}

export default function MyClass() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const classes = [
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      mentor: "Jenna Ortega",
      mentorRole: "Senior Accountant di Gojek",
      image: "/11.jpg",
      mentorImage: "/ava1.jpg",
      modulesDone: 12,
      totalModules: 12,
      duration: 360,
      progress: 100,
      status: "Selesai",
    },
    {
      id: 2,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      mentor: "Jenna Ortega",
      mentorRole: "Senior Accountant di Gojek",
      image: "/11.jpg",
      mentorImage: "/ava1.jpg",
      modulesDone: 2,
      totalModules: 12,
      duration: 360,
      progress: 28,
      status: "Sedang Berjalan",
    },
    {
      id: 3,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      mentor: "Jenna Ortega",
      mentorRole: "Senior Accountant di Gojek",
      image: "/11.jpg",
      mentorImage: "/ava1.jpg",
      modulesDone: 2,
      totalModules: 12,
      duration: 360,
      progress: 28,
      status: "Sedang Berjalan",
    },
    {
      id: 4,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      mentor: "Jenna Ortega",
      mentorRole: "Senior Accountant di Gojek",
      image: "/11.jpg",
      mentorImage: "/ava1.jpg",
      modulesDone: 2,
      totalModules: 12,
      duration: 360,
      progress: 28,
      status: "Sedang Berjalan",
    },
    {
      id: 5,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      mentor: "Jenna Ortega",
      mentorRole: "Senior Accountant di Gojek",
      image: "/11.jpg",
      mentorImage: "/ava1.jpg",
      modulesDone: 2,
      totalModules: 12,
      duration: 360,
      progress: 28,
      status: "Sedang Berjalan",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 3;

  const filteredClasses = classes.filter((item) => {
    const matchTab =
      activeTab === "all"
        ? true
        : activeTab === "ongoing"
          ? item.status === "Sedang Berjalan"
          : item.status === "Selesai";

    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  const totalPages = Math.ceil(filteredClasses.length / classesPerPage);
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = filteredClasses.slice(
    indexOfFirstClass,
    indexOfLastClass,
  );

  return (
    <>
      <Navbar />

      <div className="xxorder-order-page">
        <div className="xxorder-order-container">
          <aside className="xxorder-order-sidebar">
            <h2>Daftar Kelas</h2>
            <p>
              Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!
            </p>

            <div className="xxorder-sidebar-menu">
              <Link to="/profile" className="xxorder-sidebar-item">
                <img
                  src="/profilnon.png"
                  alt="profile"
                  className="xxorder-icon-sidebar-menu"
                />
                Profil Saya
              </Link>

              <Link
                to="/my-class"
                className="xxorder-sidebar-item xxorder-active"
              >
                <img
                  src="/kelasaktif.png"
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

          <section className="xxorder-order-content">
            <div className="mc-card">
              {/* top */}
              <div className="mc-top">
                <div className="mc-tabs">
                  <button
                    className={activeTab === "all" ? "mc-active" : ""}
                    onClick={() => setActiveTab("all")}
                  >
                    Semua Kelas
                  </button>
                  <button
                    className={activeTab === "ongoing" ? "mc-active" : ""}
                    onClick={() => setActiveTab("ongoing")}
                  >
                    Sedang Berjalan
                  </button>
                  <button
                    className={activeTab === "done" ? "mc-active" : ""}
                    onClick={() => setActiveTab("done")}
                  >
                    Selesai
                  </button>
                </div>

                <div className="mc-search-box">
                  <input
                    type="text"
                    placeholder="Cari Kelas"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="button">
                    <SearchIcon />
                  </button>
                </div>
              </div>

              {/* list */}
              <div className="mc-list">
                {currentClasses.map((item) => {
                  const isDone = item.status === "Selesai";

                  return (
                    <div className="mc-item" key={item.id}>
                      <div className="mc-item-header">
                        <span>
                          {item.modulesDone} / {item.totalModules} Modul
                          Terselesaikan
                        </span>

                        <span
                          className={`mc-badge ${
                            isDone ? "mc-badge-success" : "mc-badge-progress"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mc-item-body">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mc-course-thumb"
                        />

                        <div className="mc-course-main">
                          <h3>{item.title}</h3>
                          <p className="mc-course-desc">{item.description}</p>

                          <div className="mc-mentor">
                            <img
                              src={item.mentorImage}
                              alt={item.mentor}
                              className="mc-mentor-avatar"
                            />
                            <div>
                              <strong>{item.mentor}</strong>
                              <span>{item.mentorRole}</span>
                            </div>
                          </div>

                          <div className="mc-meta">
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V13.8002C1 14.9203 1 15.4801 1.21799 15.9079C1.40973 16.2842 1.71547 16.5905 2.0918 16.7822C2.5192 17 3.07899 17 4.19691 17H5M5 1H13.8002C14.9203 1 15.4796 1 15.9074 1.21799C16.2837 1.40973 16.5905 1.71547 16.7822 2.0918C17 2.5192 17 3.07899 17 4.19691V13.8036C17 14.9215 17 15.4805 16.7822 15.9079C16.5905 16.2842 16.2837 16.5905 15.9074 16.7822C15.48 17 14.921 17 13.8031 17H5M5 1V17M9 8H13M9 5H13"
                                  stroke="#333333"
                                  strokeOpacity="0.68"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {item.totalModules} Modul
                            </span>
                            <span>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 5V10H15M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z"
                                  stroke="#333333"
                                  strokeOpacity="0.68"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {item.duration} Menit
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mc-item-footer">
                        <div className="mc-progress-wrap">
                          <span className="mc-progress-label">
                            Progres Kelas: {item.progress}%
                          </span>

                          <div className="mc-progress-bar">
                            <div
                              className="mc-progress-fill"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="mc-actions">
                          {isDone ? (
                            <>
                              <button className="mc-btn mc-btn-outline">
                                Unduh Sertifikat
                              </button>
                              <button className="mc-btn mc-btn-primary">
                                Lihat Detail Kelas
                              </button>
                            </>
                          ) : (
                            <button className="mc-btn mc-btn-primary">
                              Lanjutkan Pembelajaran
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pagination">
                <button
                  className="pagination-arrow"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                      fill="#222325"
                    />
                  </svg>
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="pagination-arrow"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"
                      fill="#222325"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
