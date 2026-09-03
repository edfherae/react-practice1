import { Route, Routes } from "react-router";
import WelcomePage from "./components/pages/WelcomePage";
import ContentPage from "./components/pages/ContentPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
