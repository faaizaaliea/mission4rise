import Navbar from "../components/Navbar";
import RulesSidebar from "../components/RulesSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/Rules.css";

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
export default function Rules() {
  const { state } = useLocation();

  const activeLesson = state?.activeLesson ?? -1;
  const ruleType = state?.ruleType ?? "pretest";
  const navigate = useNavigate();
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

  const course = state?.course;
  const index = state?.index ?? 0;
  const currentModule = state?.moduleId ?? 1;
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
    title: currentPage?.title ?? "",
  };

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

  return (
    <div className="rules-page">
      {/* TOPBAR */}

      <>
        <Navbar variant="video" />
        <div className="rules-layout">
          {/* LEFT */}
          <div className="rules-main">
            <div className="rules-banner">
              <img src="/rulesbanner.png" alt="Rules Banner" />
            </div>

            <div className="rules-content">
              <h2>{lesson.title}</h2>
              <p>
                Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman
                awalmu terkait materi yang akan kamu pelajari.
              </p>
              <div className="rules-info">
                <p>Syarat Nilai Kelulusan: {currentPage.passingScore}</p>

                {currentPage.duration && (
                  <p>Durasi Ujian: {currentPage.duration}</p>
                )}
              </div>
              <p>
                Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan
                penilaian akhirmu dalam rangkaian kelas ini.
              </p>
              <button
                className="start-pretest-btn"
                onClick={() =>
                  navigate("/question", {
                    state: {
                      course,
                      index,
                      moduleId: currentModule,
                      activeLesson,
                      ruleType,
                    },
                  })
                }
              >
                {currentPage.button}
              </button>{" "}
            </div>
          </div>

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
      </>
    </div>
  );
}
