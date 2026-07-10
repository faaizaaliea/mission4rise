import { useState } from "react";
import "../css/ReviewModal.css";

const contentMap = {
  pretest: {
    title: "Tulis Review Terbaikmu!",
    desc: "Apakah kamu yakin untuk menyelesaikan pretest ini?",
    button: "Selesai",
  },
  quiz: {
    title: "Tulis Review Terbaikmu!",
    desc: "Apakah kamu yakin untuk menyelesaikan quiz ini?",
    button: "Selesai",
  },
  final: {
    title: "Tulis Review Terbaikmu!",
    desc: "Apakah kamu yakin untuk menyelesaikan ujian akhir ini?",
    button: "Selesai",
  },
};

function ReviewModal({ isOpen, type = "quiz", onClose, onSubmit }) {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");

  if (!isOpen) return null;

  const data = contentMap[type] || contentMap.quiz;

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ rating, review });
    }
  };

  return (
    <div className="review-modal-overlay">
      <div className="review-modal">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <div className="review-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`review-star ${star <= rating ? "active" : ""}`}
              onClick={() => setRating(star)}
              aria-label={`Beri rating ${star}`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          className="review-textarea"
          placeholder="Masukkan Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="review-modal-actions">
          <button className="review-cancel-btn" onClick={onClose}>
            Batal
          </button>

          <button className="review-confirm-btn" onClick={handleSubmit}>
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
