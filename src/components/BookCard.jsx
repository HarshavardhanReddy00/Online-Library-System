import { Link } from "react-router-dom";

// created bookcard to display the data in the home page

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-yellow-300">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p>{book.author}</p>
      <p className="text-sm text-gray-500">{book.category}</p>

      <Link
        to={`/book/${book.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}