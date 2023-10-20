import React from "react";
import CardSearch from "./CardSearch";

function FilterGuide() {
  return (
    <div>
      <CardSearch />
      <div class="flex justify-center text-white mt-4">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="border p-1">Filter</th>
              <th class="border p-1">Examples</th>
              <th class="border p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-1">attribute, a</td>
              <td class="border p-1">
                <p>attribute=slash</p>
                <p>a=slash</p>
              </td>
              <td class="border p-1">
                Shows all cards with the attribue "Slash" (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">category</td>
              <td class="border p-1">category=leader</td>
              <td class="border p-1">
                Shows all cards with the Leader category (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">color, c</td>
              <td class="border p-1">
                <p>color=red</p>
                <p>c=r</p>
                <p>c=r/g</p>
              </td>
              <td class="border p-1">
                <p>Shows all red cards (case-insensitive)</p>
                <p>
                  The shorthand codes for colors are: red = r, green = g, blue =
                  u, black = b, purple = p, yellow = y
                </p>
              </td>
            </tr>
            <tr>
              <td class="border p-1">cost</td>
              <td class="border p-1">cost=2</td>
              <td class="border p-1">Shows all cards with a cost of 2</td>
            </tr>
            <tr>
              <td class="border p-1">counter</td>
              <td class="border p-1">counter=1000</td>
              <td class="border p-1">Shows all cards with a counter of 1000</td>
            </tr>
            <tr>
              <td class="border p-1">effect, e</td>
              <td class="border p-1">
                <p>effect="when attacking"</p>
                <p>e="when attacking"</p>
              </td>
              <td class="border p-1">
                Shows all cards that have an effect when attacking
                (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">life</td>
              <td class="border p-1">life=5</td>
              <td class="border p-1">Shows all cards with 5 life</td>
            </tr>
            <tr>
              <td class="border p-1">name</td>
              <td class="border p-1">
                <p>name=luffy</p>
                <p>name="nefeltari vivi"</p>
              </td>
              <td class="border p-1">
                Shows all cards containing the strings "luffy" or "nefeltari
                vivi" (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">number</td>
              <td class="border p-1">number=ST01-009</td>
              <td class="border p-1">
                Show the card with the number "ST01-009"
              </td>
            </tr>
            <tr>
              <td class="border p-1">power</td>
              <td class="border p-1">power=4000</td>
              <td class="border p-1">Shows all cards with a power of 4000</td>
            </tr>
            <tr>
              <td class="border p-1">rarity</td>
              <td class="border p-1">rarity=c</td>
              <td class="border p-1">
                Shows all cards with rarity "C" (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">set</td>
              <td class="border p-1">set=ST01</td>
              <td class="border p-1">
                Shows all cards in the ST01 set (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">trigger effect</td>
              <td class="border p-1">trigger="play this card"</td>
              <td class="border p-1">
                Shows all cards that can be played with their trigger effect
                (case-insensitive)
              </td>
            </tr>
            <tr>
              <td class="border p-1">type, t</td>
              <td class="border p-1">
                <p>type="straw hat pirates"</p>
                <p>t=alabasta</p>
              </td>
              <td class="border p-1">
                Shows all cards that include the types "Straw Hat Pirates" or
                "Alabasta" (case-insensitive)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-center text-white">
        <p class="mt-4">
          All filters can be combined, e.g. <code>c=r life=5 name=luffy</code>{" "}
          will show all red cards with 5 life that contain the string "luffy" in
          their name.
        </p>
      </div>
    </div>
  );
}

export default FilterGuide;
