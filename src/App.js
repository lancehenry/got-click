// Import dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import friends from "./characters.json";
import "./App.css";

// Set initial state
class App extends Component {
  state = {
    friends,
    clicked: [],
    score: 0
  };

  // Reusable shuffleFriends function
  shuffleFriends = () => {
    this.state.friends.sort(function(a, b) { return 0.5 - Math.random(); })
  };

  // Reusable reset clicked and score function
  resetClickedAndScore = () => {
    this.setState({
      clicked: [],
      score: 0
    })
  };

  imgClick = event => {

    // When a card is clicked, remove from array
    const currentFriend = event.target.id;
    const IsFriendClicked = this.state.clicked.indexOf(currentFriend) > -1;

    // If that friend HAS been clicked, reset game, reorder cards
    if (IsFriendClicked) {
      this.shuffleFriends();
      this.resetClickedAndScore();

    // If that friend HASN'T been clicked, increase score, reorder cards
    } else {
      this.shuffleFriends();
      this.setState({        
        // Concat function to use below https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        clicked: this.state.clicked.concat(currentFriend),
        score: this.state.score + 1
      },

      // If you get all 12 friends, reset game, reorder cards
      () => {
        if (this.state.score === 12) {
          alert('You have won the Game of Thrones!');
          this.shuffleFriends();
          this.resetClickedAndScore();
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
          <div className="container">
            <div className="row">
              {this.state.friends.map(friends => (
                <FriendCard
                imgClick={this.imgClick}
                name={friends.name}
                id={friends.id}
                key={friends.id}
                image={friends.image}
              />
              ))}
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
