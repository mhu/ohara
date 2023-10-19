import React from "react";
import CardSearch from "./CardSearch";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToGuide = () => {
    navigate("/filter-guide");
  };

  return (
    <div class="h-screen flex items-center justify-center">
      <div class="text-white drop-shadow">
        <p class="text-xl mb-4 text-center">
          The advanced One Piece TCG card search
        </p>

        <CardSearch />

        <div class="flex justify-center">
          <button
            class="p-1 mt-4 elevated border rounded hover:bg-[#625a49]"
            onClick={navigateToGuide}
          >
            Filter Guide
          </button>
        </div>

        <p class="mt-4 mb-2 text-lg underline">Example filters</p>

        <ul class="list-none">
          <li>
            <code>name="luffy"</code> to find all cards that include "luffy" in
            their name.
          </li>
          <li>
            <code>color="red"</code> or <code>c="red"</code> to find all red
            cards.
          </li>
          <li>
            <code>name="luffy" color="red"</code> to find all red cards that
            include "luffy" in their name.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
