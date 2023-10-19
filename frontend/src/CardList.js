import React from "react";
import { useLocation } from "react-router-dom";
import CardSearch from "./CardSearch";
import { useNavigate } from "react-router-dom";

function CardList() {
  const { state } = useLocation();
  const cards = state.data;
  const navigate = useNavigate();

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
    </div>
  );
}

export default CardList;
