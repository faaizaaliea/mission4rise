function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-about">
          <a href="home.html" className="brand footer-brand">
            <img src="/Logo.png" alt="videobelajar" />
          </a>
          <h4>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h4>
          <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p>+62-877-7123-1234</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Kategori</h4>
            <ul>
              <li>Digital &amp; Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h4>Komunitas</h4>
            <ul>
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="socials" aria-label="Social media">
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
