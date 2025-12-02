import { useState } from "react";

import "./Comment.css";

export default function Comment({ data }) {
  // const [data, setData] = useState(null);
  return (
    <>
      {data?.comments?.length === 0 && <p>Không có comment nào</p>}
      {data?.comments?.map((comment, i) => (
        <div className="comments-item">
          <img src="/images/user.png" alt="user-comment" />
          <div className="comments-item__top">
            <p>{comment.content}</p>
            <div className="comments-item__like">
              <span>
                <i className="fa-regular fa-heart"></i> Thích
              </span>
              <span className="comments-item__like-active">
                <i className="fa-regular fa-heart"></i> 5
              </span>
              <span className="comments-item__like-active">Trả lời</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
