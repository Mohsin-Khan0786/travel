/// Stats
export default function Stats({ packedItem }) {
  if (!packedItem.length)
    return (
      <em>
        <p className="stats">Start adding some Items to your packing list 🚀</p>
      </em>
    );
  const numItems = packedItem.length;
  const packedItems = packedItem.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything ! Ready to go ✈"
          : `You have ${numItems} items on your list and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
