import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetail from "./pages/PostDetail";
import ListPost from "./pages/ListPost";
import Feedback from "./pages/Feedback";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import FeedbackDetail from "./components/Feedback/FeedbackDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/bai-viet",
        children: [
          { index: true, element: <ListPost /> },
          { path: "tao-bai-viet", element: <CreatePostPage /> },
          { path: "chi-tiet/:slug", element: <PostDetail /> },
        ],
      },
      {
        path: "/goc-tam-su",
        children: [
          { index: true, element: <Feedback /> },
          { path: "gui-tam-su", element: <FeedbackForm /> },
          { path: "chi-tiet/:feedbackId", element: <FeedbackDetail /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
