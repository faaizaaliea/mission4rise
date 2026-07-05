import "../css/style.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function LessonIcon({ type, status }) {
  if (
    status === "active" &&
    (type === "pretest" || type === "quiz" || type === "final")
  ) {
    return <img className="lesson-icon" src="/testicon.png" alt="" />;
  }

  if (status === "done") {
    return <img className="lesson-icon" src="/coursedone.png" alt="" />;
  }

  switch (type) {
    case "video":
      return <img className="lesson-icon" src="/vidcourseon.png" alt="" />;

    case "pretest":
      return <img className="lesson-icon" src="/testicon.png" alt="" />;

    case "summary":
      return <img className="lesson-icon" src="/sumcourseicon.png" alt="" />;

    case "quiz":
      return <img className="lesson-icon" src="/testicon.png" alt="" />;

    case "final":
      return <img className="lesson-icon" src="/testicon.png" alt="" />;

    default:
      return null;
  }
}
export default function Question() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const activeLesson = state?.activeLesson ?? -1;
  const ruleType = state?.ruleType ?? "quiz";

  const course = state?.course;
  const index = state?.index ?? 0;
  const currentModule = state?.moduleId ?? 1;

  const [activeQuestion, setActiveQuestion] = useState(10);

  const [openModules, setOpenModules] = useState({
    intro1: currentModule === 1,
    intro2: currentModule === 2,
    intro3: currentModule === 3,
  });

  const questions = Array.from({ length: 10 }, (_, i) => i + 1);

  const getQuestionStatus = (number) => {
    if (number === activeQuestion) return "active";
    if (number < activeQuestion) return "done";
    return "default";
  };

  const handleLessonClick = (item, lessonIndex, moduleId) => {
    if (item.type === "video") {
      navigate("/video", {
        state: {
          course,
          index,
          moduleId,
          activeLesson: lessonIndex,
        },
      });
    } else if (item.type === "pretest") {
      navigate("/rules", {
        state: {
          course,
          index,
          moduleId,
          activeLesson: lessonIndex,
          ruleType: "pretest",
        },
      });
    } else if (item.type === "summary") {
      navigate("/summary", {
        state: {
          course,
          index,
          moduleId,
          activeLesson: lessonIndex,
        },
      });
    } else if (item.type === "quiz") {
      navigate("/rules", {
        state: {
          course,
          index,
          moduleId,
          activeLesson: lessonIndex,
          ruleType: "quiz",
        },
      });
    } else if (item.type === "final") {
      navigate("/rules", {
        state: {
          course,
          index,
          moduleId,
          activeLesson: lessonIndex,
          ruleType: "final",
        },
      });
    }
  };

  const [openModules, setOpenModules] = useState({
    intro1: currentModule === 1,
    intro2: currentModule === 2,
    intro3: currentModule === 3,
  });

  const toggleModule = (key) => {
    setOpenModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const modules = [
    {
      id: 1,
      title: "Introduction to HR",
      lessons: [
        {
          type: "pretest",
          title: "Pretest: Introduction to HR",
          duration: "10 Pertanyaan",
        },
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "summary",
          title: "Rangkuman: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "quiz",
          title: "Quiz: Introduction to HR",
          duration: "10 Pertanyaan",
        },
      ],
    },

    {
      id: 2,
      title: "Introduction to HR",
      lessons: [
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "video",
          title: "Video: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "summary",
          title: "Rangkuman: Introduction to HR",
          duration: "12 Menit",
        },
        {
          type: "quiz",
          title: "Quiz: Introduction to HR",
          duration: "10 Pertanyaan",
        },
        {
          type: "final",
          title: "Ujian Akhir",
          duration: "20 Pertanyaan",
        },
      ],
    },
  ];

  const currentLessons =
    modules.find((m) => m.id === currentModule)?.lessons || [];
  const lesson = currentLessons[activeLesson] ?? {
    title: "",
  };
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

  const getLessonStatus = (item, lessonIndex, moduleId) => {
    const lessons = modules.find((m) => m.id === moduleId)?.lessons || [];

    const pretestIndex = lessons.findIndex((l) => l.type === "pretest");
    const summaryIndex = lessons.findIndex((l) => l.type === "summary");
    const quizIndex = lessons.findIndex((l) => l.type === "quiz");
    const finalIndex = lessons.findIndex((l) => l.type === "final");

    // ===================
    // RULES PRETEST
    // ===================
    if (ruleType === "pretest" && moduleId === currentModule) {
      if (lessonIndex === pretestIndex) return "active";
      return "locked";
    }
    // ===================
    // RULES QUIZ
    // ===================
    if (ruleType === "quiz") {
      if (moduleId < currentModule) return "done";
      if (moduleId > currentModule) return "locked";

      if (lessonIndex < quizIndex) return "done";
      if (lessonIndex === quizIndex) return "active";
      return "locked";
    }

    // ===================
    // RULES FINAL
    // ===================
    if (ruleType === "final") {
      if (moduleId < currentModule) return "done";
      if (moduleId > currentModule) return "locked";

      if (lessonIndex < finalIndex) return "done";
      if (lessonIndex === finalIndex) return "active";
      return "locked";
    }

    // ===================
    // VIDEO / SUMMARY
    // ===================
    // Module sebelum dianggap selesai
    if (moduleId < currentModule) {
      return "done";
    }

    // Module sesudah masih terkunci
    if (moduleId > currentModule) {
      return "locked";
    }

    if (item.type === "video") {
      if (lessonIndex < activeLesson) return "done";
      if (lessonIndex === activeLesson) return "active";
      return "locked";
    }

    if (item.type === "pretest") {
      return pretestIndex !== -1 ? "done" : "locked";
    }

    if (item.type === "summary") {
      if (lessonIndex < activeLesson) return "done";
      if (lessonIndex === activeLesson) return "active";
      return "locked";
    }

    if (item.type === "quiz") {
      return activeLesson >= summaryIndex ? "locked" : "locked";
    }

    if (item.type === "final") {
      return "locked";
    }

    return "locked";
  };
  const pageData = {
    pretest: {
      title: "Pre-Test",
      button: "Mulai Pre-Test",
      passingScore: "-",
      duration: "5 Menit",
    },
    quiz: {
      title: "Quiz",
      button: "Mulai Quiz",
      passingScore: "60%",
      duration: null,
    },
    final: {
      title: "Ujian Akhir",
      button: "Mulai Ujian Akhir",
      passingScore: "60%",
      duration: null,
    },
  };

  const currentPage = pageData[ruleType];

  return (
    <>
      <Navbar />

      <main className="question-page">
        <div className="container question-layout">
          {/* LEFT */}
          <aside className="question-sidebar">
            <h3>List Soal</h3>

            <div className="question-grid">
              {questions.map((number) => {
                const status = getQuestionStatus(number);

                return (
                  <button
                    key={number}
                    className={`question-number ${status}`}
                    onClick={() => setActiveQuestion(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </div>

            <button className="finish-quiz-btn">
              Selesaikan semua soal untuk mengakhiri quiz
            </button>
          </aside>

          {/* CONTENT */}
          <section className="question-content">
            <h2>Pertanyaan {activeQuestion}</h2>

            <p>
              Memikirkan dan mengantisipasi secara teliti adanya user secara
              tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi
              dengan membuat default yang mengurangi kepanikan pada user adalah
              pengertian dari ...
            </p>

            <div className="question-options">
              <label className="option active">
                <input type="radio" name="answer" />
                <span>Memikirkan tentang default *</span>
              </label>

              <label className="option">
                <input type="radio" name="answer" />
                <span>
                  Mempertimbangkan page layout berdasarkan suatu tujuan tertentu
                </span>
              </label>

              <label className="option">
                <input type="radio" name="answer" />
                <span>
                  Memastikan bahwa sistem berjalan sesuai dengan apa yang
                  terjadi saat itu juga
                </span>
              </label>

              <label className="option">
                <input type="radio" name="answer" />
                <span>
                  Menciptakan konsistensi dan menggunakan elemen UI umum
                </span>
              </label>
            </div>

            <div className="question-actions">
              <button className="question-prev">Sebelumnya</button>
              <button className="question-next">Selesaikan</button>
            </div>
          </section>

          {/* SIDEBAR */}

          <aside className="video-sidebar">
            <div className="mobile-course-nav">
              <div className="mobile-course-prev">
                <button>
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.77 1.77L10 0L0 10L10 20L11.77 18.23L3.54 10L11.77 1.77Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <span>Sebelumnya</span>
              </div>
              <div className="mobile-course-next">
                <span>Setelahnya</span>
                <button>
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="module-heading">Daftar Modul</h3>
            {/* MODULE 1 */}
            <div className="module">
              <button
                className="module-header"
                onClick={() => toggleModule("intro1")}
              >
                <span>Introduction to HR</span>

                <span className={`chevron ${openModules.intro1 ? "open" : ""}`}>
                  <ChevronDownIcon />
                </span>
              </button>

              {openModules.intro1 && (
                <div className="module-content">
                  {modules
                    .find((m) => m.id === 1)
                    .lessons.map((item, index) => {
                      const displayStatus = getLessonStatus(item, index, 1);

                      return (
                        <div
                          key={index}
                          className={`lesson ${displayStatus}`}
                          onClick={() => handleLessonClick(item, index, 1)}
                        >
                          <LessonIcon type={item.type} status={displayStatus} />

                          <div className="lesson-info">
                            <h5>{item.title}</h5>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            {/* MODULE 2 */}
            <div className="module">
              <button
                className="module-header"
                onClick={() => toggleModule("intro3")}
              >
                <span>Introduction to HR</span>

                <span className={`chevron ${openModules.intro3 ? "open" : ""}`}>
                  <ChevronDownIcon />
                </span>
              </button>

              {openModules.intro3 && (
                <div className="module-content">
                  {openModules.intro3 && (
                    <div className="module-content">
                      {modules
                        .find((m) => m.id === 2)
                        .lessons.map((item, index) => {
                          const displayStatus = getLessonStatus(item, index, 2);

                          return (
                            <div
                              key={index}
                              className={`lesson ${displayStatus}`}
                              onClick={() => handleLessonClick(item, index, 2)}
                            >
                              <LessonIcon
                                type={item.type}
                                status={displayStatus}
                              />

                              <div className="lesson-info">
                                <h5>{item.title}</h5>
                                <span>{item.duration}</span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="review-btn">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.16148 13.9563L4.01815 16.6605L5.00065 10.933L0.833984 6.87717L6.58398 6.04384L9.15565 0.833008L11.7273 6.04384L17.4773 6.87717L13.3107 10.933L14.2932 16.6605L9.16148 13.9563Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Beri Review & Rating
            </button>
          </aside>
        </div>

        {/* BOTTOM */}

        <div className="bottom-nav">
          <button>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.77 1.77L10 0L0 10L10 20L11.77 18.23L3.54 10L11.77 1.77Z"
                fill="white"
              />
            </svg>
            Foundations of User Experience Design
          </button>

          <button>
            Foundations of User Experience Design{" "}
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}
