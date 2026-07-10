import "../css/SubmitQuestion.css";
import submitQuestion from "/submit-question.png";

const contentMap = {
  pretest: {
    title: "Selesaikan Pretest",
    desc: "Apakah kamu yakin ingin menyelesaikan pretest ini?",
    button: "Selesai",
  },
  quiz: {
    title: "Selesaikan Quiz",
    desc: "Apakah kamu yakin ingin menyelesaikan quiz ini?",
    button: "Selesai",
  },
  final: {
    title: "Selesaikan Ujian Akhir",
    desc: "Apakah kamu yakin ingin menyelesaikan ujian akhir ini?",
    button: "Selesai",
  },
};

function SubmitModal({ isOpen, type = "quiz", onClose, onSubmit }) {
  if (!isOpen) return null;

  const data = contentMap[type] || contentMap.quiz;

  return (
    <div className="submit-modal-overlay">
      <div className="submit-modal">
        <img
          src={submitQuestion}
          alt="Submit Question"
          className="submit-modal-image"
        />

        <h2>{data.title}</h2>

        <p>{data.desc}</p>

        <div className="submit-modal-actions">
          <button className="submit-cancel-btn" onClick={onClose}>
            Batal
          </button>

          <button className="submit-confirm-btn" onClick={onSubmit}>
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmitModal;
