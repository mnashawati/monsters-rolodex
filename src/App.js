import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  console.log("rendered");

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monsters-search-box"
        placeHolder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <br />
      <SearchBox
        className="title-search-box"
        placeHolder="set title"
        onChangeHandler={onTitleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
