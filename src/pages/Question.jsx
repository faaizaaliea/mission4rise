import Navbar from "../components/Navbar";
import SubmitQuestion from "../components/SubmitQuestion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Question.css";
import RulesSidebar from "../components/RulesSidebar";
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
  const handleSubmit = () => {
    navigate("/congrats", {
      state: {
        ruleType,
        course,
        index,
        moduleId: currentModule,
      },
    });
  };

  const activeLesson = state?.activeLesson ?? -1;
  const ruleType = state?.ruleType ?? "quiz";

  const course = state?.course;
  const index = state?.index ?? 0;
  const currentModule = state?.moduleId ?? 1;

  const [activeQuestion, setActiveQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
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
  const handleNextQuestion = () => {
    if (activeQuestion < questions.length) {
      setActiveQuestion((q) => q + 1);
    }
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
  const [showModal, setShowModal] = useState(false);
  const getLessonStatus = (item, lessonIndex, moduleId) => {
    const lessons = modules.find((m) => m.id === moduleId)?.lessons || [];

    const pretestIndex = lessons.findIndex((l) => l.type === "pretest");
    const summaryIndex = lessons.findIndex((l) => l.type === "summary");
    const quizIndex = lessons.findIndex((l) => l.type === "quiz");
    const finalIndex = lessons.findIndex((l) => l.type === "final");

    if (ruleType === "pretest" && moduleId === currentModule) {
      if (lessonIndex === pretestIndex) return "active";
      return "locked";
    }
    if (ruleType === "quiz") {
      if (moduleId < currentModule) return "done";
      if (moduleId > currentModule) return "locked";

      if (lessonIndex < quizIndex) return "done";
      if (lessonIndex === quizIndex) return "active";
      return "locked";
    }

    if (ruleType === "final") {
      if (moduleId < currentModule) return "done";
      if (moduleId > currentModule) return "locked";

      if (lessonIndex < finalIndex) return "done";
      if (lessonIndex === finalIndex) return "active";
      return "locked";
    }

    if (moduleId < currentModule) {
      return "done";
    }
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
  return (
    <>
      <Navbar variant="video" />

      <main className="question-page">
        <div className="question-layout">
          {/* LEFT */}
          <aside className="question-sidebar">
            <h3>List Soal</h3>

            <div className="question-grid">
              {questions.map((number) => {
                const status = getQuestionStatus(number);

                return (
                  <button
                    className={`question-number ${status}`}
                    onClick={() => setActiveQuestion(number)}
                  >
                    <span>{number}</span>
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
              <label
                className={`option ${selectedAnswer === 0 ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === 0}
                  onChange={() => setSelectedAnswer(0)}
                />
                <span>Memikirkan tentang default *</span>
              </label>

              <label
                className={`option ${selectedAnswer === 1 ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === 1}
                  onChange={() => setSelectedAnswer(1)}
                />
                <span>
                  Mempertimbangkan page layout berdasarkan suatu tujuan tertentu
                </span>
              </label>

              <label
                className={`option ${selectedAnswer === 2 ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === 2}
                  onChange={() => setSelectedAnswer(2)}
                />
                <span>
                  Memastikan bahwa sistem berjalan sesuai dengan apa yang
                  terjadi saat itu juga
                </span>
              </label>

              <label
                className={`option ${selectedAnswer === 3 ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === 3}
                  onChange={() => setSelectedAnswer(3)}
                />
                <span>
                  Menciptakan konsistensi dan menggunakan elemen UI umum
                </span>
              </label>
            </div>

            <div className="question-actions">
              <button
                className={`question-prev ${
                  activeQuestion === 1 ? "disabled" : ""
                }`}
                disabled={activeQuestion === 1}
                onClick={() => setActiveQuestion((q) => q - 1)}
              >
                <img src="/questarrowleft.png" />
                Sebelumnya
              </button>

              <button
                className={
                  activeQuestion === questions.length
                    ? "question-finish"
                    : "question-next"
                }
                onClick={() => {
                  if (activeQuestion === questions.length) {
                    setShowModal(true);
                  } else {
                    handleNextQuestion();
                  }
                }}
              >
                {activeQuestion === questions.length
                  ? "Selesaikan"
                  : "Selanjutnya"}

                <img src="/questarrowright.png" alt="" />
              </button>
            </div>
          </section>
          {/* SIDEBAR */}

          <RulesSidebar
            ruleType={ruleType}
            currentModule={state?.moduleId ?? 1}
            activeLesson={state?.activeLesson ?? -1}
            course={state?.course}
            index={state?.index}
          />
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
        <SubmitQuestion
          isOpen={showModal}
          type={ruleType}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      </main>
    </>
  );
}
