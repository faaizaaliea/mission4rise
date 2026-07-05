import { Link } from "react-router-dom";
function CategoryList() {
  return (
    <div className="category-list">
      <Link to="/all-product" className="category-btn active">
        {" "}
        Semua Kelas
      </Link>
      <button className="category-btn">Pemasaran</button>
      <button className="category-btn">Desain</button>
      <button className="category-btn">Pengembangan Diri</button>
      <button className="category-btn">Bisnis</button>
    </div>
  );
}

export default CategoryList;
