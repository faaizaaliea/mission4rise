import { Link } from "react-router-dom";
import "../css/CourseCardHome.css";

function CourseCard({ course, index }) {
  const renderStars = (rating) => {
    if (rating == null) {
      return (
        <>
          <em>☆☆☆☆☆</em>
        </>
      );
    }

    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        <b>{"★".repeat(fullStars)}</b>
        <em>{"☆".repeat(emptyStars)}</em>
      </>
    );
  };
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

          <p className="home-course-description">{course.description}</p>

          <div className="instructor">
            <span
              className={`instructor-avatar avatar-${(index % 3) + 1}`}
            ></span>

            <div className="instructor-info">
              <strong>{course.instructor}</strong>
              <small>{course.instructorRole}</small>
            </div>
          </div>

          <div className="rating-price">
            <span className="rating">
              <span className="stars">{renderStars(course.rating)}</span>

              <a href="#">
                {course.rating == null
                  ? "Belum ada ulasan"
                  : `${course.rating} (${course.totalReviews})`}
              </a>
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
