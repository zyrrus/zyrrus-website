import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Projects, Work } from "pages";
import Nav from "components/Nav";

export default function App() {
  return (
    <>
      <div className="custom-gradient" />
      <div className="container min-h-screen min-w-[320px]">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work" element={<Work />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
