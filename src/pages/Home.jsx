import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const books = useSelector((state) => state.books);
  const categories= ["Fiction","Non-Fiction","Sci-Fiction"]

  return (
    <div className="p-6 bg-green-500" >
      <h1 className="text-3xl font-bold">Welcome to Library</h1>

      {/* Categories */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="flex gap-3 mt-2">
            {categories.map((cat)=>(
                <Link key={cat} to={`/books/${cat}`} className="bg-blue-100 px-4 py-2 rounded hover:bg-blue-300">{cat}</Link>
            ))}
        </div>
      </div>

      {/* Popular Books */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {books.slice(0, 6).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}