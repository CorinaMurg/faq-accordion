# FAQ accordion Card

This is my solution to the [FAQ Accordion Card challenge by Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

### Requirements
The goal was to build the FAQ accordion card to match the figma design provided by Frontend Mentor.

Users should be able to:
- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked


### Technical Details
I built the accordion using
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
  
### A personal challenge: making the page fully accessible
The following are some of the accessibility practices that I applied.
<br>
<br>**Image alt text** to provide a text alternative to screen reader users.
<br>
<br>**Use of `<details>` and `<summary>` elements**:
These semantic HTML elements are inherently accessible and can be opened or closed to reveal more content. When users click on the `<summary>`, the `<details>` will toggle its open/close state and this behavior is announced by screen readers as well.
<br>
<br>**Tabindex on answer content**:
By setting `tabindex="0"`, the content inside the `<p>` tags is focusable with the keyboard. This is helpful for keyboard users to navigate through the answers. Since `<p>` tags are not naturally focusable, adding a `tabindex` can be considered appropriate to draw attention to the content when a question is expanded.
<br>
<br>**JavaScript for Toggle Behavior**:
This ensures that when one question is clicked (expanded), the others are closed. This can help users to focus on one answer at a time, which can be especially useful for screen reader users as it reduces potential auditory clutter.

### Useful resources

- Book: "Learning Web Design" by Jennifer Niederest Robbins (Publisher: O'Reilly)- This is an amazing book which helped me understand working with background images.

### Live site and Snapshot

Live Site URL: https://corina-faq-accordion.netlify.app/
<br>
<br>
![image](https://github.com/CorinaMurg/faq-accordion/assets/115652409/3cacd71d-e8c9-44ee-93b5-5e2c27e56cef)


