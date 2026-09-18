import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ContentPage from "./pages/ContentPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="content/:tab" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
