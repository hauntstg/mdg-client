import { useState, useRef, useCallback, useMemo } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { quillModulesBase, quillFormats } from "../quillConfig";
import { fetchCreatePost, fetchUploadEditorImage } from "../services/post";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const quillRef = useRef(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // Kiểm tra dung lượng
      if (file.size > 3 * 1024 * 1024) {
        alert("Ảnh vượt quá 3MB!");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetchUploadEditorImage(formData);

      const url = res.data.url;

      if (!quillRef.current) return;
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);

      editor.insertEmbed(range.index, "image", url, "user");
    };
  }, []);

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: quillModulesBase.toolbar,
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("body", body);
      if (coverImage) formData.append("coverImage", coverImage);

      const res = await fetchCreatePost(formData);

      setMessage("Create post success!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error creating post");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2>Tạo bài viết</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div>
          <label>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={3}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div>
          <label>Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
        </div>

        <div style={{ marginTop: 16 }}>
          <label>Body</label>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={body}
            onChange={setBody}
            modules={quillModules}
            formats={quillFormats}
            style={{ height: 300, marginBottom: 40 }}
          />
        </div>

        <button type="submit" style={{ marginTop: 16 }}>
          Save
        </button>
      </form>
    </div>
  );
}
