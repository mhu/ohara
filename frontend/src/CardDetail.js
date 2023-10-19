import React from "react";
import { useLocation } from "react-router-dom";
import CardSearch from "./CardSearch";

function CardDetail() {
  const { state } = useLocation();
  const card = state.data;

  return (
    <div>
      <CardSearch />
      <div class="flex justify-center mt-4">
        <div class="flex flex-col text-white w-full">
          <div class="flex justify-center">
            <img
              src={require(`./assets/images/${card.number}.png`)}
              alt="Card"
              class="w-80"
            />
          </div>
          <div class="flex justify-center flex-col items-center">
            <span class="mt-4 mb-2 text-xl">{card.name}</span>
            <div class="p-2 border w-full max-w-md ml-4 mr-4 mb-4">
              <div class="flex justify-between">
                {card.cost ? <span>{card.cost}</span> : null}
                {card.power ? <span>{card.power}</span> : null}
                <span>{card.attribute}</span>
              </div>

              {card.counter ? (
                <div>
                  <div class="border-t mt-2 pt-2" />
                  <span>Counter +{card.counter}</span>
                </div>
              ) : null}

              {card.effect || card.trigger_effect ? (
                <div class="border-t mt-2 pt-2" />
              ) : null}

              {card.effect ? <span>{card.effect}</span> : null}
              {card.effect && card.trigger_effect ? (
                <div>
                  <br />
                </div>
              ) : null}
              {card.trigger_effect ? <span>{card.trigger_effect}</span> : null}

              <div class="border-t mt-2 pt-2" />
              <div class="flex justify-between">
                <span>
                  {card.category}{" "}
                  {card.life ? <span>({card.life} Life)</span> : null}
                </span>
                <span>{card.name}</span>
              </div>

              <div class="border-t mt-2 pt-2" />
              <div class="flex justify-between">
                <span>{card.color}</span>
                <span>{card.card_type}</span>
                <span>{card.number}</span>
                <span>{card.rarity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
