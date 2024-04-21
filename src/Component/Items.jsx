/// item component for items
export default function Items({ item, deleteItems, ToggleItems }) {
  return (
    <div>
      <li>
        <input onChange={() => ToggleItems(item.id)} type="checkbox" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteItems(item.id)}>❌</button>
      </li>
    </div>
  );
}
