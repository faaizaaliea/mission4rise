import "../css/Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter container">
      <div className="newsletter-overlay">
        <span>NEWSLETTER</span>
        <h2>Mau Belajar Lebih Banyak?</h2>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            autoComplete="off"
            placeholder="Masukkan Emailmu"
            aria-label="Masukkan Emailmu"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
