import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchListPost } from "../services/post";
import "./ListPost.css";

const REST_API = import.meta.env.VITE_REST_API;
export default function ListPost() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchListPost();
        if (isMounted) {
          setData(res.data);
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
  if (!data.length) return <p>Không có dữ liệu</p>;

  return (
    <div className="news-page">
      <div className="news-page-title">TIN TỨC SỰ KIỆN</div>
      <div className="news-list">
        {data &&
          data.map((p, i) => (
            <article
              key={p._id}
              className="news-list-item"
              title={p.title}
              onClick={() => navigate(`chi-tiet/${p.slug}`)}
            >
              <div className="news-list-image">
                <img src={`${REST_API}${p.coverImage}`} />
              </div>
              <div className="news-list-content">
                <h4>{p.title}</h4>
                <p className="news-list-summary">{p.summary}</p>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
