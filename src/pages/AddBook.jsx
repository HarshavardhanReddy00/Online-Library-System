import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!Object.values(form).every(Boolean)) {
      alert("All fields required");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3 bg-purple-400">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button className="bg-blue-600 text-white px-4 py-2">
        Add Book
      </button>
    </form>
  );
}