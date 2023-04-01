import { Routes, Route } from "react-router-dom";
//components
import MyNavbar from "./components/Navbar";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookDetailPage from "./pages/Detail";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        {/* readbook */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* addbook */}
        <Route path="/book/list" element={<ListingPage />} />
        {/* details */}
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
