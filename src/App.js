import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: false,
    count: 0
  };

  sortCharacters = friends => {
    let friendsSorted = this.state.friends.sort( (a,b) => {return 0.5 - Math.random()});

    friends = friendsSorted;
    
    this.setState({ friends });

    this.handleClicked();
    // console.log(this.state.clicked);
    // console.log(friends);
    
    
  }

  updateScore = () => {
    this.setState({ count: this.state.count + 1 });
    
  };

  handleClicked = id => {
    // 1. check state of friend that is clicked
    // 2. if state clicked=false set to true
    // 3. if state clicked=true, end the game
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Friends List</Header>
        {this.state.friends.map(friend => (
          <FriendCard
            sortCharacters={this.sortCharacters}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;