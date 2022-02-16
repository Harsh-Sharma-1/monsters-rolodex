import React from "react";
import CardList from "./components/card-list";
import styled from "styled-components";
import { SearchBox } from "./components/searchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Container>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search for monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </Container>
    );
  }
}

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    font-family: "Bigelow Rules";
    font-size: 72px;
    color: #0ccac4;
  }
`;

export default App;
