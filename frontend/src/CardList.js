import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardSearch from "./CardSearch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardList() {
  const [_data, setData] = useState(null); // eslint-disable-line no-unused-vars

  const navigate = useNavigate();

  const { state } = useLocation();
  const cards = state.data.cards;
  const page = state.data.page;
  const numPages = state.data.num_pages;

  const previousPage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/cards?page=${page - 1}&filter=${state.filter}`
      );

      const data = response.data;
      setData(data);
      navigate("/card-list", { state: { data, filter: state.filter } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const nextPage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/cards?page=${page + 1}&filter=${state.filter}`
      );

      const data = response.data;
      setData(data);
      navigate("/card-list", { state: { data, filter: state.filter } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCardClick = (card) => {
    navigate("/card-detail", { state: { data: card } });
  };

  if (cards.length === 0) {
    return (
      <div>
        <CardSearch />
        <p class="flex justify-center text-white mt-4 text-lg">
          No cards found
        </p>
      </div>
    );
  }

  if ("error" in cards) {
    return (
      <div>
        <CardSearch />
        <p class="flex justify-center text-white mt-4 text-lg">{cards.error}</p>
      </div>
    );
  }

  return (
    <div>
      <CardSearch />
      <div class="flex justify-center">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-4xl mt-4">
          {cards.map((card, index) => (
            <img
              key={index}
              src={require(`./assets/images/${card.number}.png`)}
              alt={`Card ${index}`}
              class="cursor-pointer"
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>

      <div class="flex justify-center">
        {page > 1 ? (
          <button
            class="p-1 w-8 mt-4 mr-4 elevated border rounded text-white"
            onClick={previousPage}
          >
            &lt;
          </button>
        ) : null}
        <span class="p-1 mt-4 text-white">Page {page}</span>
        {page < numPages ? (
          <button
            class="p-1 w-8 mt-4 ml-4 elevated border rounded text-white"
            onClick={nextPage}
          >
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default CardList;
