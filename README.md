# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![./src/images/website screenshot.jpg]

### Links

- Solution URL: [https://github.com/udhavrajnath/rock-paper-scissors-game.git]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned
This project was mainly a revision of states in React and conditional rendering of components based on the different states values in the project.
To see how you can add code snippets, see below:

```js
{(computerPicked==true && userPicked==true)&&<div className='ComputerSelected'>
<ComputerChoice userselected={userPicked} userPick={userChoice} computerPick={computerchose}/>
</div>}
}
```


### Continued development

If I were to revise this project in the future, I would definitely improve on the CSS and the way I used my states. They were a bit all over the place in this project and if I were to do it agagin, I would organize and use my states in a more orderly manner to avoid any confusion and emphasize on writing cleaner codes.

## Author

- Website - [Udhav Rajnat](https://www.your-site.com)
- Frontend Mentor - [@udhavrajnath]-[(https://www.frontendmentor.io/profile/udhavrajnath)]

