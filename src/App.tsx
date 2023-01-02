import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Projects, Work } from "pages";
import Header from "components/Header";
import Footer from "components/Footer";
import ScrollToTop from "hooks/useScrollToTop";

export default function App() {
  return (
    <>
      <div className="custom-gradient side-gradient" />
      <div className="container min-h-screen min-w-[320px]">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <div className="mx-5 md:mx-10">
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="work" element={<Work />} />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
