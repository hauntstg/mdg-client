import { useEffect, useState } from "react";
// import { posts } from "../../data/posts";
import { useNavigate } from "react-router-dom";
import { fetchListPost } from "../../services/post";
import "./Events.css";

const REST_API = import.meta.env.VITE_REST_API;
export default function Events() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchListPost();
        if (isMounted) {
          setData(res.data.slice(0, 5));
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message || "Some thing went wrong!");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;

  return (
    <div className="news-grid">
      {data &&
        data.map((p, i) => (
          <article
            key={p._id}
            title={p.title}
            className={`card ${i === 0 ? "card--featured" : ""}`}
            onClick={() => navigate(`/bai-viet/chi-tiet/${p.slug}`)}
          >
            <img src={`${REST_API}${p.coverImage}`} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
              {/* <p>{p.summary}</p> */}
              <time>{new Date(p.createdAt).toLocaleDateString("vi-VN")}</time>
            </div>
          </article>
        ))}
    </div>
  );
}
