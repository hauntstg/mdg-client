import { useState } from "react";
import { fetchCreateFeedback } from "../../services/feedback";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("title", title);
      formData.append("content", content);
      files.forEach((file) => {
        formData.append("attachments", file);
      });
      console.log(formData);
      const res = await fetchCreateFeedback(formData);

      setMessage("Create Feedback success!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Gửi tâm sự</h2>
      {message && <p>{message}</p>}

      <form className="fb-form" onSubmit={handleSubmit}>
        <div className="fb-form-name">
          <label>Họ tên:</label>
          <input
            value={name}
            text="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="fb-form-phoneNumber">
          <label>Số điện thoại:</label>
          <input
            value={phoneNumber}
            text="text"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="fb-form-email">
          <label>Email:</label>
          <input
            value={email}
            text="text"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="fb-form-title">
          <label>Tiêu đề:</label>
          <input
            value={title}
            text="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="fb-form-content">
          <label>Nội dung:</label>
          <textarea
            value={content}
            text="text"
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="fb-form-files">
          <label>Đính kèm hình ảnh hoặc video</label>
          <input
            type="file"
            accept="image/*, video/*"
            multiple
            onChange={(e) => {
              const maxSize = 5 * 1024 * 1024; // 5MB
              const selectedFiles = Array.from(e.target.files);

              const validFiles = selectedFiles.filter((file) => {
                return file.size <= maxSize;
              });

              if (validFiles.length !== selectedFiles.length) {
                alert("Có file vượt quá 10MB! Vui lòng chọn lại.");
                e.target.value = "";
              }

              setFiles(validFiles);
            }}
          />
        </div>
        <button type="submit" style={{ marginTop: 16 }}>
          Save
        </button>
      </form>
    </div>
  );
}
