import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";
import CourseCardHome from "../components/CourseCardHome";
import CourseModal from "../components/CourseModal";
import { courses as initialCourses } from "../data/courses";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [courseList, setCourseList] = useState(initialCourses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  const openAddModal = () => {
    setModalMode("add");
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const openEditModal = (course) => {
    setModalMode("edit");
    setSelectedCourse(course);
    setIsModalOpen(true);
  };
  const handleSubmitCourse = (data) => {
    if (modalMode === "add") {
      setCourseList([...courseList, data]);
    } else {
      setCourseList(
        courseList.map((course) => (course.id === data.id ? data : course)),
      );
    }

    setIsModalOpen(false);
  };
  const handleDeleteCourse = (id) => {
    setCourseList(courseList.filter((course) => course.id !== id));
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="hero container">
          <div className="overlay">
            <h1>
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>

            <p>
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>

            <Link to="/all-product" className="hero-button">
              Temukan Video Course untuk Dipelajari!
            </Link>
          </div>
        </section>

        <section className="container courses">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>

          <p className="subtitle">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <CategoryList />
          <div className="crud-demo">
            <button onClick={openAddModal}>Tambah Data</button>{" "}
          </div>
          <div className="course-grid">
            {courseList.map((course, index) => (
              <div key={course.id}>
                <CourseCardHome course={course} index={index} />

                <div className="crud-actions">
                  <button onClick={() => openEditModal(course)}>Update</button>

                  <button onClick={() => handleDeleteCourse(course.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
      <CourseModal
        isOpen={isModalOpen}
        mode={modalMode}
        course={selectedCourse}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitCourse}
      />
    </>
  );
}

export default Home;
