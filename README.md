# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge
The challenge was to build out the FAQ accordion card and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: https://github.com/Cor-Ina/faq-accordion-card-main
- Live Site URL: https://corina-murg-faq-accordion-card.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I'm excited to have learned how to toggle features on/off using just HTML and CSS.

```html
<div class="question-container"  aria-selected="false">
  <input type="checkbox" class="checkbox" id="click-1" hidden>
  <div class="question text-question-gray" tabindex="0">
    <label for="click-1">
      <p >How many team members can I invite? </p>
      <img src="./images/icon-arrow-down.svg" alt="" class="arrow" >
    </label>
    
  </div>
  <div class="answer text-answer-gray" hidden>
    <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
      team members for the Premium plan.</p>
  </div>
</div>
```
```css
.checkbox:checked ~ .question {
  font-weight: 700;
  color: var(--clr-dark);
}

.checkbox:checked ~ .question .arrow {
  transform: rotate(180deg);
}

.checkbox:checked ~ .answer {
  display: block;
  width: 90%;
}


### Useful resources

- Book: "Learning Web Design" by Jennifer Niederest Robbins (Publisher: O'Reilly)- This is an amazing book which helped me understand working with background images.


## Author

- Website - https://github.com/Cor-Ina
- Frontend Mentor - @Cor-Ina: https://www.frontendmentor.io/profile/Cor-Ina
- LinkedIn - https://www.linkedin.com/in/corinamurg/
- Twitter - https://twitter.com/corinamurg


## Acknowledgments
