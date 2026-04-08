import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === parseInt(id));

  {/*displays all the details of a book */}

  return (
    <div className="p-10 bg-pink-500 ">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: ⭐ {book.rating}</p>

      <Link to="/books" className="text-blue-500 mt-4 inline-block">
        Back to Browse
      </Link>
    </div>
  );
}