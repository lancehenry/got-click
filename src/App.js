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

  imgClick = event => {
    const currentFriend = event.target.alt;
    const IsFriendClicked = this.state.clicked.indexOf(currentFriend) > -1;

    // If that friend HAS been clicked, reset game, reorder cards
    if (IsFriendClicked) {
      this.setState({
        friends: this.state.friends.sort(function(a, b) { return 0.5 - Math.random(); }),
        clicked: [],
        score: 0
      });

    // If that friend HASN'T been clicked, increase score, reorder cards
    } else {
      this.setState({
        friends: this.state.friends.sort(function(a, b) { return 0.5 - Math.random(); }),
        
        // Concat function to use below https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        clicked: this.state.clicked.concat(currentFriend),
        score: this.state.score + 1
      },

      // If you get all 12 friends, reset game, reorder cards
      () => {
        if (this.state.score === 12) {
          this.setState({
            friends: this.state.friends.sort(function(a, b) { return 0.5 - Math.random(); }),
            clicked: [],
            score: 0
          });
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
