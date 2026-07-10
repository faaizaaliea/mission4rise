import Navbar from "../components/Navbar";
import RulesSidebar from "../components/RulesSidebar";
import { useNavigate, useLocation } from "react-router-dom";

export default function Summary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const currentModule = state?.moduleId ?? 1;
  const activeLesson = state?.activeLesson ?? 0;
  const course = state?.course;
  const index = state?.index ?? 0;
  const ruleType = state?.ruleType;
  const summaryTitle = "Download Rangkuman Modul";
  const summaryDesc =
    "Silakan download rangkuman modul dari materi yang telah kamu pelajari";
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
  return (
    <div className="video-page">
      <Navbar variant="video" />

      <div className="video-content">
        {/* LEFT */}
        <div className="video-main summary-main">
          <div className="player-container summary-player-container">
            <div className="player summary-player">
              <div className="play-button">▶</div>
            </div>
          </div>

          <div className="summary-info">
            <h2>{summaryTitle}</h2>
            <p>{summaryDesc}</p>

            <button className="download-summary-btn">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0H6L0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM8 15L4 11H7V7.02L9 7V11H12L8 15Z"
                  fill="#3ECF4C"
                />
              </svg>
              Download Rangkuman
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <RulesSidebar
          ruleType={ruleType}
          currentModule={currentModule}
          activeLesson={activeLesson}
          course={course}
          index={index}
          onLessonClick={handleLessonClick}
        />
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        <button onClick={() => navigate(-1)}>
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
          Foundations of User Experience Design
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
  );
}
