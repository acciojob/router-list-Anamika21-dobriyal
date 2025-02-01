import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const items = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" }
];

const ItemList = () => (
  <div>
    <h1>Item List</h1>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  
  if (!item) return <h1>Item not found</h1>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
  </Router>
);

export default App;
