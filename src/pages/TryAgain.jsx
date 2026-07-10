import { useState } from "react";
import "../css/TryAgain.css";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RulesSidebar from "../components/RulesSidebar";

export default function TryAgain() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const titleMap = {
    quiz: "Tanggal Quiz:",
    final: "Tanggal Ujian Akhir:",
  };

  const descriptionMap = {
    quiz: {
      title: "Sedikit Lagi!",
      text: `Kamu sudah menyelesaikan quiz dengan baik namun nilaimu belum cukup untuk melanjutkan materi.
Pelajari kembali modul sebelumnya dan kerjakan kembali quiz ini!`,
    },
    final: {
      title: "Sedikit Lagi!",
      text: `Kamu sudah menyelesaikan quiz dengan baik namun nilaimu belum cukup untuk melanjutkan materi.
Pelajari kembali modul sebelumnya dan kerjakan kembali quiz ini!`,
    },
  };

  const ruleType = state?.ruleType ?? "quiz";
  const content = descriptionMap[ruleType];

  return (
    <>
      <Navbar variant="video" />

      <div className="tryagain-container">
        <section className="tryagain-content">
          <img
            src="/tryagainbanner.png"
            alt="Try Again"
            className="tryagain-banner"
          />

          <div className="tryagain-body">
            <h3>{titleMap[ruleType]}</h3>
            <p className="tryagain-date">23 September 2022, 10:20 AM</p>

            <div className="score-table">
              <div className="score-box score-red">
                <span>Nilai</span>
                <strong>20</strong>
              </div>

              <div className="score-box">
                <span>Soal</span>
                <strong>10</strong>
              </div>

              <div className="score-box">
                <span>Benar</span>
                <strong className="correct-score">
                  <img src="/rightanswer.png" alt="" />2
                </strong>
              </div>

              <div className="score-box">
                <span>Salah</span>
                <strong className="wrong-score">
                  <img src="/wronganswer.png" alt="" />8
                </strong>
              </div>
            </div>

            <h2 className="tryagain-title">{content.title}</h2>
            <p className="tryagain-text">
              {content.text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <button
              className="tryagain-button"
              onClick={() => navigate("/question")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.64 2.35C12.19 0.9 10.2 0 7.99 0C3.57 0 0 3.58 0 8C0 12.42 3.57 16 7.99 16C11.72 16 14.83 13.45 15.72 10H13.64C12.82 12.33 10.6 14 7.99 14C4.68 14 1.99 11.31 1.99 8C1.99 4.69 4.68 2 7.99 2C9.65 2 11.13 2.69 12.21 3.78L8.99 7H15.99V0L13.64 2.35Z"
                  fill="#3ECF4C"
                />
              </svg>
              Ulangi Quiz
            </button>
          </div>
        </section>

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
  );
}
