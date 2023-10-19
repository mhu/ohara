import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [_data, setData] = useState(null); // eslint-disable-line no-unused-vars

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm.replace(/\s/g, "").length) {
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/cards?page=1&filter=${searchTerm}`
      );

      const data = response.data;
      setData(data);
      navigate("/card-list", { state: { data, filter: searchTerm } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div class="flex w-full items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fff"
        class="w-8 h-8 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>

      <form onSubmit={handleSubmit} class="w-full flex justify-center">
        <input
          class="shadow border rounded p-2 text-gray-700 w-full focus:outline-none"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CardSearch;
