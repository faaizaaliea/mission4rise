import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";
import CourseCardHome from "../components/CourseCardHome";
import CourseModal from "../components/CourseModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../services/api/courseService";
import "../css/Home.css";

function Home() {
  const [courseList, setCourseList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourseList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const openAddModal = () => {
    setModalMode("add");
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const openEditModal = (course) => {
    console.log(course);

    setModalMode("edit");
    setSelectedCourse(course);
    setIsModalOpen(true);
  };
  const handleSubmitCourse = async (data) => {
    console.log(data);
    try {
      if (modalMode === "add") {
        await addCourse({
          ...data,
          rating: 0,
          totalReviews: 0,
        });
      } else {
        await updateCourse(data.id, data);
      }

      fetchCourses();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteCourse = async (id) => {
    console.log(id);
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
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
