# got-click

This is a memory game application using React. The application's UI is broken into four components: Header, Jumbotron, FriendCard, Footer.

Upon start, 12 Game of Thrones characters are rendered to the DOM. Each character image will listen for click events. The goal is to click on all 12 characters without clicking on the same character twice. After each click, the character images re-shuffle. The users score is incremented at the top. If the user gets a highscore, it's logged as the new highscore.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
Using the app:

* Click on a character.
* The characters re-shuffle after each click.
* Do not click on the same character twice or the game ends. Click on all 12 and you win the game.
* Each click is logged at the top. A new highscore is logged if it's met.

Struggles
=========
Some of the challenges I encountered:

* getting the click event to grab each images id
* breaking up the components
* dealing with state and setState
* React's syntax is tricky