import ListGroup from "./components/listGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Lviv", "Paris", "Kyiv"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
