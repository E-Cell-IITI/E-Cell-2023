import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import FooterData from "./data/Footer.json";
import galleryImages from './data/Gallery2';

import BlogsPage from "./pages/BlogsPage";
import BlogsPage2 from "./pages/BlogsPage2";
import BlogsPage3 from "./pages/BlogsPage3";
import BlogsPage4 from "./pages/BlogsPage4";
import BlogsPage5 from "./pages/BlogsPage5";
import Gallery2 from "./pages/Gallery2";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/blogs" element={<BlogsPage/>}/>
          <Route exact path="/blogs2" element={<BlogsPage2/>}/>
          <Route exact path="/blogs3" element={<BlogsPage3/>}/>
          <Route exact path="/blogs4" element={<BlogsPage4/>}/>
          <Route exact path="/blogs5" element={<BlogsPage5/>}/>
          <Route exact path="/gallery" element={<Gallery2 galleryImages={galleryImages}/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer {...FooterData} />
    </>
  );
}

export default App;
