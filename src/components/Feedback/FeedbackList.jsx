import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackList.css";
import { fetchFeedbackList } from "../../services/feedback";

const REST_API = import.meta.env.VITE_REST_API;
export default function FeedbackList() {
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
        const res = await fetchFeedbackList();
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
    <div className="fb-list">
      {data &&
        data.map((fb, i) => (
          <article key={fb._id} className="fb-list-item" title={fb.title}>
            <div
              className="fb-list-title"
              onClick={() => navigate(`chi-tiet/${fb._id}`)}
            >
              <h4>
                <i
                  className="fa-regular fa-comment-dots"
                  style={{
                    color: "#000080",
                    fontSize: "20px",
                    paddingRight: "10px",
                  }}
                ></i>
                {fb.title}
              </h4>
            </div>
            <p className="fb-list-content">{fb.content}</p>
          </article>
        ))}
    </div>
  );
}
