import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { useEffect, useRef, useState } from "react";
function AllProduct() {
  const [openFilter, setOpenFilter] = useState({
    bidang: true,
    harga: true,
    durasi: true,
  });

  const toggleFilter = (key) => {
    setOpenFilter((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 6;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Urutkan");
  const sortRef = useRef(null);

  const sortOptions = [
    "Harga Rendah",
    "Harga Tinggi",
    "A to Z",
    "Z to A",
    "Rating Tertinggi",
    "Rating Terendah",
  ];

  const handleSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  const SearchIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="rgba(51, 51, 51, 0.68)"
      />
    </svg>
  );
  return (
    <>
      <Navbar />

      <main className="all-product-page">
        <section className="container all-product">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>

          <p className="subtitle">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="all-product-layout">
            {/* SIDEBAR */}
            <aside className="product-filter">
              <div className="filter-top">
                <span>Filter</span>
                <button type="button">Reset</button>
              </div>

              <div className="filter-card">
                <div
                  className="filter-title"
                  onClick={() =>
                    setOpenFilter({
                      ...openFilter,
                      bidang: !openFilter.bidang,
                    })
                  }
                >
                  <h4>
                    <span className="filter-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V13.8002C1 14.9203 1 15.4801 1.21799 15.9079C1.40973 16.2842 1.71547 16.5905 2.0918 16.7822C2.5192 17 3.07899 17 4.19691 17H5M5 1H13.8002C14.9203 1 15.4796 1 15.9074 1.21799C16.2837 1.40973 16.5905 1.71547 16.7822 2.0918C17 2.5192 17 3.07899 17 4.19691V13.8036C17 14.9215 17 15.4805 16.7822 15.9079C16.5905 16.2842 16.2837 16.5905 15.9074 16.7822C15.48 17 14.921 17 13.8031 17H5M5 1V17M9 8H13M9 5H13"
                          stroke="#3ECF4C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Bidang Studi
                  </h4>

                  <span
                    className={
                      openFilter.bidang ? "filter-arrow open" : "filter-arrow"
                    }
                  >
                    <ChevronDownIcon />
                  </span>
                </div>

                {openFilter.bidang && (
                  <>
                    <label>
                      <input type="checkbox" />
                      Pemasaran
                    </label>

                    <label>
                      <input type="checkbox" />
                      Digital & Teknologi
                    </label>

                    <label>
                      <input type="checkbox" />
                      Pengembangan Diri
                    </label>

                    <label>
                      <input type="checkbox" />
                      Bisnis Manajemen
                    </label>
                  </>
                )}
              </div>

              <div className="filter-card">
                <div
                  className="filter-title"
                  onClick={() =>
                    setOpenFilter({
                      ...openFilter,
                      harga: !openFilter.harga,
                    })
                  }
                >
                  <h4>
                    <span className="filter-icon">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M1 13.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V13.8036C19 14.9215 19 15.4805 18.7822 15.9079C18.5905 16.2842 18.2837 16.5905 17.9074 16.7822C17.48 17 16.921 17 15.8031 17H4.19691C3.07899 17 2.5192 17 2.0918 16.7822C1.71547 16.5905 1.40973 16.2842 1.21799 15.9079C1 15.4801 1 14.9203 1 13.8002Z"
                          stroke="#3ECF4C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Harga
                  </h4>

                  <span
                    className={
                      openFilter.harga ? "filter-arrow open" : "filter-arrow"
                    }
                  >
                    <ChevronDownIcon />
                  </span>
                </div>

                {openFilter.harga && (
                  <>
                    <label>
                      <input type="checkbox" />
                      Gratis
                    </label>
                    <label>
                      <input type="checkbox" />
                      Rp100K - Rp300K
                    </label>
                    <label>
                      <input type="checkbox" />
                      Di atas Rp300K
                    </label>
                  </>
                )}
              </div>

              <div className="filter-card">
                <div
                  className="filter-title"
                  onClick={() =>
                    setOpenFilter({
                      ...openFilter,
                      durasi: !openFilter.durasi,
                    })
                  }
                >
                  <h4>
                    <span className="filter-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V10H15M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z"
                          stroke="#3ECF4C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Durasi
                  </h4>

                  <span
                    className={
                      openFilter.durasi ? "filter-arrow open" : "filter-arrow"
                    }
                  >
                    <ChevronDownIcon />
                  </span>
                </div>

                {openFilter.durasi && (
                  <>
                    <label>
                      <input type="radio" name="duration" />
                      Kurang dari 4 Jam
                    </label>
                    <label>
                      <input type="radio" name="duration" />4 - 8 Jam
                    </label>
                    <label>
                      <input type="radio" name="duration" />
                      Lebih dari 8 Jam
                    </label>
                  </>
                )}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="product-content">
              <div className="product-toolbar">
                <div className="sort-wrapper" ref={sortRef}>
                  <button
                    type="button"
                    className="sort-button"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>{selectedSort}</span>
                    <span className={`sort-icon ${isOpen ? "rotate" : ""}`}>
                      <SortChevronIcon />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="sort-menu">
                      {sortOptions.map((option) => (
                        <div
                          key={option}
                          className={`sort-item ${selectedSort === option ? "active" : ""}`}
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="search-box">
                  <span className="search-icon">
                    <SearchIcon />
                  </span>

                  <input type="text" placeholder="Cari Kelas" />
                </div>
              </div>

              <div className="product-grid">
                {currentCourses.map((course, index) => (
                  <CourseCard
                    key={course.id || index}
                    course={course}
                    index={index}
                  />
                ))}
              </div>

              <div className="pagination">
                <button
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AllProduct;
