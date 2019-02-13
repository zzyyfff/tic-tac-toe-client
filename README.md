# Tic Tac Toe Client

### Planned approach:
1.  [x] Considering what the mission and goals of the project are
2.  [x] Doing user research; talking to potential users about what they would look for in a Tic Tac Toe game, what they would need from it, what they would like from it, and what might cause a given version to stand out and be desireable.
3.  [x] Listing out the functionality of an MVP and separately bucketing future functionality that is not part of the MVP.
4.  [x] Drawing up wireframes and settling on an interface design
5.  [x] Create user stories
6.  [ ] Prioritize user stories, putting the ones with the most dependents first
7.  [ ] Creating the basic layout of elements in HTML/Bootstrap (to be made functional later with JS), using semantic tags when possible and only enough styling to meet layout needs.
8.  [ ] Working on functional elements with local gameplay logic first, then authentication and game API
9.  [ ] Test, troubleshoot, debug, and confirm working deployment
10.  [ ] If there is enough time, begin work on stretch goal features and test them in deployment
11.  [ ] Fill in README.md
12.  [ ] Once all base functionality is established, apply aesthetic style

### Wireframes - FIRST DRAFT
#### Mobile version
![Tic Tac Toe - mobile wireframe](https://i.imgur.com/b68mnCm.jpg "Tic Tac Toe - mobile wireframe"){:height="50%" width="50%"}
#### Desktop version
![Tic Tac Toe - desktop wireframe](https://i.imgur.com/GOjCzei.jpg "Tic Tac Toe - desktop wireframe"){:height="50%" width="50%"}

### First draft of user stories:
+ As a TTT game user, I want to have a game board to play in
+ As a TTT game user, I want to start a new game so that I can play a game of TTT
+ As a TTT game user, I want to touch/click a cell so that I can place my X/O
+ As a TTT game user, I want to not change a cell that has already been played in
+ As a TTT game user, I want it to become the other person's turn after I place my X/O
+ As a TTT game user, I want to see who's turn it is so that I don't get confused
+ As a TTT game user, I want to know when a game is over
+ As a TTT game user, I want to know if there's a winner or if it was a tie
+ As a TTT game user, I want to reach the game via a publicly accessible URL
+ As a TTT game user, I want to sign up so that I can be able to sign in with my identity
+ As a TTT game user, I want to sign in so that I can have games that are mine and safe from interference
+ As a TTT game user, I want to change my password
+ As a TTT game user, I want to sign out
+ As a TTT game user, I want to start a new game, even if a game has already been played
+ As a TTT game user, I want to see how many games I've won after I've logged in
+ As a TTT game user, I want to receive feedback about my authentication actions, be it success or failure, and know what went wrong

### Modeling the game board in Javascript
The game board will be represented as an array of strings, each string containing either a single "x", a single "o", or an empty string, "". These correspond to the possible states of the cells in the final rendered game board. Initially, the array will be 9 elements long, but in the future could be extended for different, non-standard game boards.

### Potential future features:
+ Board dimensions other than 3x3, with a win condintion of `n` in a row for an `n`x`n` board
+ 3-dimensional play area (3x3x3)
+ Sonic feedback
+ Multi-player / Multi-device functionality
+ Integrated messaging

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. [ ] For commercial use or
    alternative licensing, please contact legal@ga.co.
