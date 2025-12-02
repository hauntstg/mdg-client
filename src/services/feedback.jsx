import api from "./api";
import axios from "axios";

export async function fetchCreateFeedback(payload) {
  try {
    const res = await api.post("/admin/create-feedback", payload, {
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

export async function fetchFeedbackList(payload) {
  try {
    const res = await api.get("/admin/list-feedback");
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

export async function fetchFeedbackDetail(feedbackId) {
  try {
    const res = await api.get("/admin/feedback/" + feedbackId);
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

export async function fetchFeedbackFilter(payload) {
  try {
    const res = await api.get("/admin/feedback-filter");
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

export async function fetchCreateComment(feedbackId, payload) {
  try {
    const res = await api.post(
      "/admin/feedback/" + feedbackId + "/create-comment",
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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
