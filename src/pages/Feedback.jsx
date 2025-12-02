import "./Feedback.css";
import { useNavigate } from "react-router-dom";
import FeedbackList from "../components/Feedback/FeedbackList";
import FeedbackFilter from "../components/Feedback/FeedbackFilter";

export default function Feedback() {
  const navigate = useNavigate();
  return (
    <div className="container feedback-page">
      <div className="feedback-page-title">GÓC TÂM SỰ</div>
      <div className="feedback-page-content">
        <div className="feedback-page-content__left">
          <div className="feedback-page__left-sticky">
            <div className="feedback-page__send-feedback">
              <p>
                Bạn đọc gửi chuyện thật, không chấp nhận bài sáng tác, hoặc lấy
                từ nguồn khác. <br />
                Người gửi bài chịu trách nhiệm trước pháp luật về bản quyền của
                mình. <br />
                Tòa soạn biên tập nội dung nếu cần. Mục này không có nhuận bút
              </p>
              <button onClick={() => navigate("gui-tam-su")}>Gửi tâm sự</button>
            </div>
            <div className="video-mdg">
              <iframe
                width="100%"
                height="250px"
                src="https://www.youtube.com/embed/T_SKmRXUAmo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="feedback-page-content__middle">
          <div className="feedback-page__articles">
            <FeedbackList />
          </div>
        </div>
        <div className="feedback-page-content__right">
          <div className="feedback-page-content__image">
            <img src="./images/book.jpg" alt="book" />
          </div>
          <div className="feedback-page__featured">
            <FeedbackFilter />
          </div>
        </div>
      </div>
    </div>
  );
}
