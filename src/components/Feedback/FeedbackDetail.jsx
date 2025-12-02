import "./FeedbackDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchFeedbackDetail,
  fetchCreateComment,
} from "../../services/feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeedbackImages from "./FeedbackImages";
import FeedbackFilter from "./FeedbackFilter";
import Comment from "./Comment";

const REST_API = import.meta.env.VITE_REST_API;
export default function FeedbackDetail() {
  const { feedbackId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetchFeedbackDetail(feedbackId);
        console.log(res.data);
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
  }, [feedbackId]);

  const createComment = async () => {
    // console.log(comment);
    const payload = { content: comment };
    try {
      const res = await fetchCreateComment(feedbackId, payload);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div className="container">Đang tải dữ liệu...</div>;
  if (error)
    return (
      <div className="container" style={{ color: "red" }}>
        Lỗi: {error}
      </div>
    );
  if (!data) return <div className="container">Không có dữ liệu</div>;
  return (
    <div className="container">
      <div className="feedback-page-title">GÓC TÂM SỰ</div>
      <div className="fbdetail-page-content">
        <div className="fbdetail-page-left">
          {/* <div className="fbdetail-page-top">
            <p>
              {new Date(data?.createdAt).toLocaleDateString("vi-VN", {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div> */}
          <div className="fbdetail-page-body">
            <h4>{data?.title}</h4>
            <div className="fbdetail-page-body__attachments">
              <p className="fbdetail-page-body__senderName">
                Người viết: {data?.senderName ? "Ẩn danh" : data?.senderName}
              </p>
              <p className="fbdetail-page-body__content">{data?.content}</p>
              {/* {data?.attachments.map((f, i) => (
                <img
                  src={`${REST_API}${f}`}
                  alt="goc-tam-su"
                  style={{ width: "90%", maxHeight: 400, objectFit: "cover" }}
                />
              ))} */}
              {data && <FeedbackImages images={data.attachments} />}
              <p className="fbdetail-page-body__viewCount">
                Lượt xem: {data?.viewCount}
              </p>
              <p className="fbdetail-page-body__createdAt">
                Ngày gửi:{" "}
                {new Date(data?.createdAt).toLocaleDateString("vi-VN", {
                  weekday: "long",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="fbdetail-comments">
            <h4>Tương tác</h4>
            <div className="fbdetail-input">
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <i
                className="fa-solid fa-paper-plane"
                onClick={createComment}
              ></i>
            </div>
            <div className="fbdetail-comments-wrap">
              {data && <Comment data={data} />}
            </div>
          </div>
        </div>
        <div className="fbdetail-page-right">
          <FeedbackFilter />
        </div>
      </div>
    </div>
  );
}
