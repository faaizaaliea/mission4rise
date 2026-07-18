import { Link } from "react-router-dom";
import "../css/CourseCard.css";

function CourseCard({ course, index }) {
  return (
    <Link
      to={`/course/${course.id}`}
      state={{ course, index }}
      className="cc-course-card-link"
    >
      <article className="cc-course-card">
        <img
          className="cc-course-image"
          src={course.image}
          alt={course.title}
        />

        <div className="cc-course-body">
          <h3 className="cc-course-title">{course.title}</h3>

          <p className="cc-course-description">
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

          <div className="cc-rating-price">
            <span className="cc-rating">
              <b>★★★</b>
              <em>★★</em>
              <span className="rating-count">3.5 (86)</span>
            </span>

            <div className="cc-price">
              {course.originalPrice && (
                <span className="cc-old-price">{course.originalPrice}</span>
              )}

              <span className="cc-new-price">{course.price}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CourseCard;
