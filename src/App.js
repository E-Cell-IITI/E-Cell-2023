import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
// import BlogsPage3 from "./pages/BlogsPage3";
// import BlogsPage from "./pages/BlogsPage";
// import AOS from 'aos'
// import "aos/dist/aos.css" from 'aos'
import FooterData from "./data/Footer.json";
// import BlogsPage2 from "./pages/BlogsPage2";
// import BlogsPage from "./pages/BlogsPage";
import Gallery from "./pages/Gallery";
// import BlogsPage4 from "./pages/BlogsPage4";
// import BlogsPage5 from "./pages/BlogsPage5";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/team" element={<Team />} />
          {/* <Route exact path="/blogs" element={<BlogsPage5/>}/> */}
          
        </Routes>
      </BrowserRouter>
      {/* <Gallery /> */}
      {/* <BlogsPage />
      <BlogsPage2 /> */}
      <Footer {...FooterData} />
    </>
  );
}

export default App;
