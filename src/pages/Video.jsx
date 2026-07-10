import Navbar from "../components/Navbar";
import RulesSidebar from "../components/RulesSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/Video.css";

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

export default function Video() {
  const { state } = useLocation();

  const activeLesson = state?.activeLesson;
  const currentModule = state?.moduleId ?? 1;
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
  const ruleType = state?.ruleType;
  const navigate = useNavigate();

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

  const course = state?.course;
  const index = state?.index ?? 0;
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
    <div className="video-page">
      {/* TOPBAR */}

      <>
        <Navbar variant="video" />

        <div className="video-content">
          {/* LEFT */}

          <div className="video-main">
            <div className="player-container">
              <div className="player">
                <div className="play-button">▶</div>
              </div>
            </div>

            <div className="video-info">
              <h2>Praktikkan Skill dengan Technical Book</h2>

              <p>
                Pelajari dan praktikkan skill teknis dalam berbagai industri
                dengan Technical Book Riselearn
              </p>

              <div className="instructor">
                <div className="instructor">
                  <span
                    className={`instructor-avatar instructor-avatar-video avatar-${(index % 3) + 1}`}
                  />

                  <div className="instructor-info">
                    <div className="instructor-video">
                      <strong>Jenna Ortega</strong>
                      <small>Senior Accountant di Gojek</small>
                    </div>
                  </div>
                </div>
              </div>
              <span className="rating video-rating">
                <b>★★★</b>
                <em>★★</em>
                <a href="#">3.5 (86)</a>
              </span>
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
