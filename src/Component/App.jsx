import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackedList from "./PackedList";
import Stats from "./Stats";

function App() {
  const [packedItem, setpackedItem] = useState([]);

  function handlepackedItems(curritem) {
    setpackedItem((packedItem) => [...packedItem, curritem]);
  }

  function handledeleteItems(id) {
    console.log(id);
    setpackedItem((packedItem) =>
      packedItem.filter((curritem) => curritem.id !== id)
    );
  }

  function ToggleItems(id) {
    setpackedItem((packedItem) =>
      packedItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure to clear the List");
    if (confirmed) setpackedItem([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handlepackedItems} />
      <PackedList
        packedItem={packedItem}
        deleteItems={handledeleteItems}
        ToggleItems={ToggleItems}
        handleClear={handleClear}
      />
      <Stats packedItem={packedItem} />
    </div>
  );
}

export default App;
