import { useState, useEffect } from "react";
import "../css/CourseModal.css";
function ChevronDownIcon() {
  return (
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
}
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
const instructorOptions = [
  {
    id: 1,
    name: "Jenna Ortega",
    role: "UI/UX Designer",
    image: "/ava.jpg",
  },
  {
    id: 2,
    name: "Jenna Ortega",
    role: "Frontend Developer",
    image: "/ava.jpg",
  },
  {
    id: 3,
    name: "Jenna Ortega",
    role: "Product Designer",
    image: "/ava.jpg",
  },
];
function CourseModal({
  isOpen,
  mode = "add",
  course = null,
  onClose,
  onSubmit,
}) {
  const [imageDropdownOpen, setImageDropdownOpen] = useState(false);

  const [instructorDropdownOpen, setInstructorDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    instructor: "",
    instructorRole: "",
    image: "",
    price: "",
    originalPrice: "",
  });

  useEffect(() => {
    if (course) {
      setFormData({
        description: "",
        ...course,
      });
    } else {
      setFormData({
        id: "",
        title: "",
        description: "",
        instructor: "",
        instructorRole: "",
        image: "",
        price: "",
        originalPrice: "",
      });
    }
  }, [course]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const imageOptions = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ];
  const handleSubmitCourse = (data) => {
    if (modalMode === "add") {
      setCourseList([
        ...courseList,
        {
          ...data,
          rating: null,
          totalReviews: 0,
        },
      ]);
    } else {
      setCourseList(
        courseList.map((course) =>
          course.id === data.id
            ? {
                ...course,
                ...data,
              }
            : course,
        ),
      );
    }

    setIsModalOpen(false);
  };

  return (
    <div className="course-modal-overlay">
      <div className="course-modal">
        <h2>{mode === "add" ? "Tambah Course" : "Update Course"}</h2>

        <div className="course-form">
          <input
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
          />

          <input
            name="title"
            placeholder="Nama Course"
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Deskripsi Course"
            value={formData.description}
            onChange={handleChange}
          />
          <div className="instructor-selector">
            <button
              type="button"
              className="instructor-header"
              onClick={() => setInstructorDropdownOpen(!instructorDropdownOpen)}
            >
              <span>{formData.instructor || "Pilih Instructor"}</span>

              {instructorDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>

            {instructorDropdownOpen && (
              <div className="instructor-options">
                {instructorOptions.map((instructor) => (
                  <button
                    key={instructor.id}
                    type="button"
                    className="instructor-option"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        instructor: instructor.name,
                      });

                      setInstructorDropdownOpen(false);
                    }}
                  >
                    <img src={instructor.image} alt={instructor.name} />

                    <div>
                      <strong>{instructor.name}</strong>
                      <span>{instructor.role}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="course-image-selector">
            <button
              type="button"
              className="course-image-header"
              onClick={() => setImageDropdownOpen(!imageDropdownOpen)}
            >
              <span>{formData.image || "Pilih Gambar Course"}</span>

              {imageDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>

            {imageDropdownOpen && (
              <div className="course-image-options-grid">
                {imageOptions.map((image) => (
                  <button
                    key={image}
                    type="button"
                    className={`course-image-card ${
                      formData.image === image ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        image,
                      });

                      setImageDropdownOpen(false);
                    }}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            name="price"
            placeholder="Harga"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            name="originalPrice"
            placeholder="Harga Asli"
            value={formData.originalPrice}
            onChange={handleChange}
          />
        </div>

        <div className="course-modal-actions">
          <button className="course-cancel-btn" onClick={onClose}>
            Batal
          </button>

          <button
            className="course-save-btn"
            onClick={() => onSubmit(formData)}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
