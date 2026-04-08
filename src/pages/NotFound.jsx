import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="p-6 text-center bg-orange-400">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">Invalid URL: {location.pathname}</p>

      <Link to="/" className="text-blue-500 mt-4 inline-block">
        Go to Home
      </Link>
    </div>
  );
}