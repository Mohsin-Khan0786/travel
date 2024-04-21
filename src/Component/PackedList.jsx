import { useState } from "react";
import Items from "./Items";

/// packedlist to render list items
export default function PackedList({
  packedItem,
  deleteItems,
  ToggleItems,
  handleClear,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;
  if (sort === "input") sortedItems = packedItem;
  if (sort === "description")
    sortedItems = packedItem
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = packedItem
      .slice()
      .sort((a, b) => Number(a.packed - Number(b.packed)));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            deleteItems={deleteItems}
            key={item.id}
            ToggleItems={ToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
