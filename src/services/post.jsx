import api from "./api";
import axios from "axios";

export async function fetchCreatePost(payload) {
  try {
    const res = await api.post("/admin/create-post", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(res);
    return { ok: true, status: res.status, data: res.data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const data = error.response?.data;
      const message = data?.message || `Request failed with status ${status}!`;
      return {
        ok: false,
        status,
        data,
        error: message,
      };
    }
    // console.error("Unknown error: ", error);
    return { ok: false, status: 0, data: null, error: "Unknown error" };
  }
}

export async function fetchUploadEditorImage(payload) {
  try {
    const res = await api.post("/admin/upload-image", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(res);
    return { ok: true, status: res.status, data: res.data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const data = error.response?.data;
      const message = data?.message || `Request failed with status ${status}!`;
      return {
        ok: false,
        status,
        data,
        error: message,
      };
    }
    // console.error("Unknown error: ", error);
    return { ok: false, status: 0, data: null, error: "Unknown error" };
  }
}

export async function fetchListPost() {
  try {
    const res = await api.get("/admin/list-post");
    // console.log(res);
    return { ok: true, status: res.status, data: res.data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const data = error.response?.data;
      const message = data?.message || `Request failed with status ${status}!`;
      return {
        ok: false,
        status,
        data,
        error: message,
      };
    }
    // console.error("Unknown error: ", error);
    return { ok: false, status: 0, data: null, error: "Unknown error" };
  }
}

export async function fetchPostDetail(slug) {
  try {
    const res = await api.post("/admin/post-detail/" + slug);
    // console.log(res);
    return { ok: true, status: res.status, data: res.data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const data = error.response?.data;
      const message = data?.message || `Request failed with status ${status}!`;
      return {
        ok: false,
        status,
        data,
        error: message,
      };
    }
    // console.error("Unknown error: ", error);
    return { ok: false, status: 0, data: null, error: "Unknown error" };
  }
}
