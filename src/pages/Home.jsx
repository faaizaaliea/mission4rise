import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";
function Home() {
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

          <div className="course-grid">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default Home;
