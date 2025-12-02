import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackFilter.css";
import { fetchFeedbackList } from "../../services/feedback";

const REST_API = import.meta.env.VITE_REST_API;
export default function FeedbackFilter() {
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
          setData(res.data.slice(0, 10));
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
    <div className="fb-filter">
      <div className="fb-filter-title">XEM NHIỀU</div>
      {data &&
        data.map((fb, i) => (
          <div key={fb._id} className="fb-filter-item" title={fb.title}>
            <div
              className="fb-filter-item-title"
              onClick={() => navigate(`/goc-tam-su/chi-tiet/${fb._id}`)}
            >
              {fb.title}
            </div>
            <p className="fb-filter-item-date">
              <i
                className="fa-solid fa-calendar-days"
                style={
                  {
                    // color: "#2ba6eeff",
                    // fontSize: "12px",
                    // paddingRight: "10px",
                  }
                }
              ></i>
              <span>
                {new Date(fb.createdAt).toLocaleDateString("vi-VN", {
                  weekday: "long",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}
