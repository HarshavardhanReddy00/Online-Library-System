import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function Layout() {
  const location = useLocation();

  // Check if route is invalid
  const is404 =
    !["/", "/books", "/add"].some((path) =>
      location.pathname.startsWith(path)
    ) &&
    !location.pathname.startsWith("/books/") &&
    !location.pathname.startsWith("/book/");

  return (
    <>
      {/* Hide Navbar in 404 */}
      {!is404 && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />

        {/* 404 MUST be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}