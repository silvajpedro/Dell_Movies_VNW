import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import * as S from "./components/header/header_style.jsx";
import Movies from "./components/pages/movies/avatar/avatar.jsx";
import Series from "./components/pages/series/flash/flash.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <S.GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
