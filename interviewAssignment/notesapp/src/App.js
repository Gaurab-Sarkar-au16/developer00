import { Routes, Route } from "react-router-dom";
//components
import MyNavbar from "./components/Navbar";

//pages
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";
import ListingPage from "./components/AddTask";
import HomePage from "./components/ListTask";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookDetailPage from "./components/ReadTask";

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
