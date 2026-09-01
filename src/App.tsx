import { Route, Routes } from "react-router";
import WelcomePage from "./pages/welcomePage";
import ContentPage from "./pages/contentPage";
import NotFoundPage from "./pages/NotFoundPage";
import LayoutPage from "./pages/layoutPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<WelcomePage />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
