import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './characters.json';
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    click: false,
    count: 0
  };

  // countIncrease increases this.state.count by 1
  countIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // clicked changes this.state.click to true
  clicked =  () => {
    this.setState({ click: true });
  };

  // Sorting through characters array, shuffling
  sortCharacters = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ friends });
    alert('this got clicked');
    console.log(friends.id);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            sortCharacters={this.sortCharacters}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
