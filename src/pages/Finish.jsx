import "../css/Finish.css";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RulesSidebar from "../components/RulesSidebar";

export default function Finish() {
  const { state } = useLocation();

  return (
    <>
      <Navbar variant="finish" />

      <div className="finish-container">
        <section className="finish-content">
          <img
            src="/congratsbanner.png"
            alt="Congrats"
            className="finish-banner"
          />

          <div className="finish-body">
            <h3>Tanggal Pretest:</h3>
            <p className="finish-date">23 September 2022, 10:20 AM</p>

            <div className="score-table">
              <div className="score-box score-yellow">
                <span>Nilai</span>
                <strong>100</strong>
              </div>

              <div className="score-box">
                <span>Soal</span>
                <strong>10</strong>
              </div>

              <div className="score-box">
                <span>Benar</span>
                <strong className="correct-score">
                  <img src="/rightanswer.png" alt="" />
                  10
                </strong>
              </div>

              <div className="score-box">
                <span>Salah</span>
                <strong className="wrong-score">
                  <img src="/wronganswer.png" alt="" />0
                </strong>
              </div>
            </div>

            <h2>Selesai!</h2>
            <p className="finish-text">
              Pretest sudah selesai dan kami sudah mengetahui progresmu.
            </p>
            <p className="finish-text">Saatnya memulai kelas!</p>
          </div>
        </section>

        <RulesSidebar
          ruleType="final"
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
  );
}
