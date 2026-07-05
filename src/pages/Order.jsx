import { Link } from "react-router-dom";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Order() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Urutkan");
  const sortRef = useRef(null);

  const sortOptions = ["Terbaru", "Terlama", "Berhasil", "Menunggu", "Gagal"];

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
      <path d="M7 10L12 15L17 10H7Z" fill="rgba(51,51,51,.68)" />
    </svg>
  );
  const orders = [
    {
      id: 1,
      invoice: "HEL/VI/10062023",
      date: "10 Juni 2023, 14:17",
      status: "Berhasil",
      statusClass: "success",
      title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
      image: "/courseiconorder.png",
      price: "Rp 300.000",
      total: "Rp 300.000",
    },
    {
      id: 2,
      invoice: "HEL/VI/10062023",
      date: "10 Juni 2023, 14:17",
      status: "Gagal",
      statusClass: "failed",
      title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
      image: "/courseiconorder.png",
      price: "Rp 300.000",
      total: "Rp 300.000",
    },
    {
      id: 3,
      invoice: "HEL/VI/10062023",
      date: "10 Juni 2023, 14:17",
      status: "Belum Bayar",
      statusClass: "pending",
      title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
      image: "/courseiconorder.png",
      price: "Rp 300.000",
      total: "Rp 300.000",
    },
    {
      id: 4,
      invoice: "HEL/VI/10062023",
      date: "10 Juni 2023, 14:17",
      status: "Berhasil",
      statusClass: "success",
      title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
      image: "/courseiconorder.png",
      price: "Rp 300.000",
      total: "Rp 300.000",
    },
    {
      id: 5,
      invoice: "HEL/VI/10062023",
      date: "10 Juni 2023, 14:17",
      status: "Berhasil",
      statusClass: "success",
      title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
      image: "/courseiconorder.png",
      price: "Rp 300.000",
      total: "Rp 300.000",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 3; // sesuaikan jumlah order per halaman

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  return (
    <>
      <Navbar />
      <div className="order-page">
        <div className="order-container">
          {/* Sidebar */}

          <aside className="order-sidebar">
            <h2>Daftar Pesanan</h2>

            <p>Informasi terperinci mengenai pembelian</p>

            <div className="sidebar-menu">
              <Link to="/profile" className="sidebar-item">
                <img
                  src="/profilnon.png"
                  alt="profile"
                  className="icon-sidebar-menu"
                />
                Profil Saya
              </Link>

              <Link to="/my-class" className="sidebar-item">
                <img
                  src="/kelasnon.png"
                  alt="class"
                  className="icon-sidebar-menu"
                />
                Kelas Saya
              </Link>

              <Link to="/order" className="sidebar-item active">
                <img
                  src="/pesananaktif.png"
                  alt="order"
                  className="icon-sidebar-menu"
                />
                Pesanan Saya
              </Link>
            </div>
          </aside>

          {/* Content */}

          <section className="order-content">
            <div className="order-card">
              {/* Top */}

              <div className="order-top">
                <div className="order-tabs">
                  <button className="active">Semua Pesanan</button>
                  <button>Menunggu</button>
                  <button>Berhasil</button>
                  <button>Gagal</button>
                </div>

                <div className="order-filter">
                  <div className="search-box">
                    <input type="text" placeholder="Cari Kelas" />

                    <button>
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
                    </button>
                  </div>

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
                            className={`sort-item ${
                              selectedSort === option ? "active" : ""
                            }`}
                            onClick={() => handleSelect(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Order List */}

              <div className="order-list">
                {currentOrders.map((order) => (
                  <div className="order-item" key={order.id}>
                    <div className="order-header">
                      <div className="invoice-info">
                        <span className="invoice-label">No. Invoice:</span>

                        <a href="#">{order.invoice}</a>

                        <span className="payment-date">
                          <span className="payment-label">
                            Waktu Pembayaran:
                          </span>{" "}
                          {order.date}
                        </span>
                      </div>

                      <span className={`status ${order.statusClass}`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="order-body">
                      <div className="course-info">
                        <img src={order.image} alt={order.title} />

                        <div>
                          <h4>{order.title}</h4>
                        </div>
                      </div>

                      <div className="price-info">
                        <div className="price-info-content">
                          <span>Harga</span>
                          <strong>{order.price}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="order-footer">
                      <span>Total Pembayaran</span>

                      <div className="total-price">
                        <strong>{order.total}</strong>
                      </div>
                    </div>
                  </div>
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
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
