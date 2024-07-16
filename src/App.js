import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [state, setState] = useState(
    []
    /* [
    {
      id: 1,
      checked: true,
      comment: "practice test-1",
    },
    {
      id: 2,
      checked: false,
      comment: "practice test-2",
    },
    {
      id: 3,
      checked: true,
      comment: "practice test-3",
    },
  ] */
  );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        const json = await response.json();
        console.log(json);
        setState(json);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchData())();
  }, []);

  const addItem = (item) => {
    console.log(item);
    const id = state.length ? state[state.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, comment: item };
    const newListItems = [...state, addNewItem];
    console.log(newListItems);
    setState(newListItems);
    localStorage.setItem("todo_list", JSON.stringify(newListItems));
  };

  const handleClick = (id) => {
    const listItem = state.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setState(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handleDeleteClick = (id) => {
    const listItem = state.filter((item) => item.id !== id);
    setState(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div>
      <Header title="Universty" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        //state={state}
        state={state.filter((item) =>
          item.comment.toLowerCase().includes(search.toLowerCase())
        )}
        handleClick={handleClick}
        handleDeleteClick={handleDeleteClick}
      />
      <Footer />
    </div>
  );
}

export default App;
