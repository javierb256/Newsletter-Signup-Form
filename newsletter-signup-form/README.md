# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Signup Desktop screenshot](/Newsletter%20Signup%20Form%20Screenshot.jpeg)


### Links

- Solution URL: [https://github.com/javierb256/Newsletter-Signup-Form](https://github.com/javierb256/Newsletter-Signup-Form)
- Live Site URL: [https://javierb256.github.io/Newsletter-Signup-Form/](https://javierb256.github.io/Newsletter-Signup-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [React Responsive](https://www.npmjs.com/package/react-responsive?activeTab=readme) - React media query module
- [Formik](https://formik.org/) - For form creation
- [Yup](https://www.npmjs.com/package/yup) - For form validation


### What I learned

As I was working on this project I wanted to try to render a different image based on the screen width. I was researching different methods to accomplish this which brought me to learn about a react package called react-responsive. This package allows react to render different components based on the current page width. 

I used this library to render a different image file based on whether the page was at a desktop or mobile device view. You can utilize a MediaQuery component that takes in a width attribute that can be set to any screen width that you want. I had never heard about this package prior to working on this project and I will continue to use it in future projects.


```js
import MediaQuery from "react-responsive";

<div className="graphic">
  <MediaQuery maxWidth={600}>
      <img
        src={MobileGraphic}
        alt="promotional art to display device range"
      />
  </MediaQuery>

  <MediaQuery minWidth={601}>
      <img src={Graphic} alt="promotional art to display device range" />
  </MediaQuery>
</div>

```


## Author

- Website - [Javier Barrera](https://javierbarrera.dev/)
- Frontend Mentor - [@javierb256](https://www.frontendmentor.io/profile/javierb256)


