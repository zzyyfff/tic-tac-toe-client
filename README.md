# Tic Tac Toe!

A online version of the class tic tac toe game! Play against someone at the same terminal or play against yourself! Sign up and sign in are required to play; win detection and game statistis are provided for you.

## Getting Started

Simply go to https://zzyyfff.github.io/tic-tac-toe-client/, sign up, and sign in.

## Technologies used

+ HTML
+ CSS + SASS
+ Javascript + jQuery
+ Bootstrap

## Getting involved

If you're interested in playing with the code or contributing? Read on.

#### Prerequisites

+ This game is optimized for the Google Chrome browser, but may work elsewhere.
+ Any text editor will do. I use [Atom](https://atom.io/), which makes development easier.

#### Installing

+ Fork and clone the respository locally
+ Navigate to the respository locally and run `npm install`
+ To test locally, run `grunt serve`

#### Deployment

+ Merge down to your `master` branch
+ Push to your remote
+ Then run `grunt deploy`

## Planning and Development

This project is born of the Software Engineering Immersive course at General Assembly Boston and is my first foray into web development.

#### My Process

1. Consider and brainstorm on the mission and goals of the project, based on the project requirements.
2. Perform user research; talking to potential users about what they would look for in a Tic Tac Toe game, what they would need or want from it, and what might cause a given version of Tic Tac toe to stand out and be desireable.
3. List out the functionality of an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) and separately bucket future functionality that would not be part of the [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).
4. Draw up wireframes and settle on an initial interface design goal. The final interface will change through user testing and redesign. (*See wireframe images below*)
5. Create user stories (*See example user stories below*)
6. Prioritize user stories, putting the ones with the most dependents first
7. Create the basic layout of UI elements in HTML/CSS/SASS/Bootstrap, using semantic tags when possible and only enough styling to meet [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) layout needs.
8. Work on functional elements with local gameplay logic first, then authentication and game API.
9. Test, troubleshoot, debug, refactor, and confirm working deployment.
10. If there is enough time, begin work on stretch goal features and test them in deployment
11. Fill in README.md
12. Once all base functionality is established, apply aesthetic style

#### Initial wireframes and user stories
##### [Mobile wireframe](https://i.imgur.com/b68mnCm.jpg "Tic Tac Toe - mobile wireframe")
##### [Desktop wireframe](https://i.imgur.com/GOjCzei.jpg "Tic Tac Toe - desktop wireframe")

##### [Sample user stories](USERSTORIES.md)

## Problem Solving Strategy

When a functional element doesn't work as exepcted, my strategy is to break down the element into smaller parts, testing to make sure each is functioning as expected. In Javascript, this might involve using `console.log()` or `debugger`, while in HTML/CSS this might involve adding a high-contrast, dashed border around a misbehaving element, and for API usage, it might involve confirming functionality via a curl script and also analyzing feedback in the Network tab of the browser development tools. In all situations, I carefully follow the logical sequence of events and make sure I understand what is going on.

When I've exhausted my own ability to debug a situation, I begin formulating how I would communicate this problem to others. I search online for similar issues and educate myself about the technologies and surrounding issues.

Finally, if an answer hasn't been found, I create a showcase of the problem, including example code, the steps to reproduce the problem, and what I've attempted so far, and I use this to ask for help from colleagues and the community of programers.

## Unsolved Problems

+ Height is not constrained on landscape-mode mobile devices
+ Scaling of the interface should be rewritten to fit all contexts
+ Aesthetics could use some work to look more solid, clean, and appealing

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. [ ] For commercial use or
    alternative licensing, please contact legal@ga.co.

## Acknowledgments

Special thanks to Jennifer Meade, Erica Salling, Ben Jenkins, Toni Langley, Jordan Allain, Caleb Pearce, Naida Rosenberger, GA WDI-30, and everyone at General Assembly Boston.
