import { Link } from "react-router-dom";
import "../css/CourseCardHome.css";

function CourseCard({ course, index }) {
  return (
    <Link
      to={`/course/${course.id}`}
      state={{ course, index }}
      className="home-course-card-link"
    >
      <article className="home-course-card">
        <img
          className="home-course-image"
          src={course.image}
          alt={course.title}
        />

        <div className="home-course-body">
          <h3 className="home-course-title">{course.title}</h3>

          <p className="home-course-description">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan materi mendalam.
          </p>

          <div className="instructor">
            <span
              className={`instructor-avatar avatar-${(index % 3) + 1}`}
            ></span>

            <div className="instructor-info">
              <strong>Jenna Ortega</strong>
              <small>Senior Accountant di Gojek</small>
            </div>
          </div>

          <div className="rating-price">
            <span className="rating">
              <b>★★★</b>
              <em>★★</em>
              <a href="#">3.5 (86)</a>
            </span>

            <div className="price">
              {course.originalPrice && (
                <span className="old-price">{course.originalPrice}</span>
              )}

              <span className="new-price">{course.price}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CourseCard;
