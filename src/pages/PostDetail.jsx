// src/pages/BlogDetailPage.jsx
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PostDetail.css";
// import { fetchPostDetail } from "../services/post"; // nếu có service riêng thì dùng, còn không có thể bỏ

const REST_API = import.meta.env.VITE_REST_API;

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setError("");
        const res = await axios.get(`${REST_API}/admin/post/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
        setError("Không tải được bài viết");
      }
    };

    if (slug) fetchDetail();
  }, [slug, REST_API]);

  // ✅ Hook phải đặt trước mọi return
  const normalizedBody = useMemo(() => {
    if (!post?.body) return "";
    // Chỉ thay những src="/uploads..." để thêm domain REST_API phía trước
    return post.body.replaceAll(
      'src="/uploads',
      `class="image-post" src="${REST_API}/uploads`
    );
  }, [post, REST_API]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Đang tải...</p>;

  return (
    <div
      className="post-detail"
      style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}
    >
      <h1>{post.title}</h1>
      <p className="post-detail-date" style={{ fontStyle: "italic" }}>
        Ngày phát hành: &nbsp;
        {new Date(post.createdAt).toLocaleDateString("vi-VN", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
      <p className="post-detail-summary">
        <i>{post.summary}</i>
      </p>
      {post.coverImage && (
        <img
          src={`${REST_API}${post.coverImage}`}
          alt={post.title}
          style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
        />
      )}
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: normalizedBody }}
      />
    </div>
  );
}
