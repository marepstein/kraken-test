<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent

Notes:

- This has not been set up with Typescript, but if that is something you would like to add, you can follow the [Next.js docs on how to set this up](https://nextjs.org/docs/basic-features/typescript#existing-projects), and add typings to components if you would like.
- This has not been set up with any type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!


# Post Development Notes

Please note the node version I used is 20.18.0. 

## Features 

- Add to cart logic using local storage 
- Apollo client for fetching GraphQL data on the server 
- Server-side data fetching and rendering for security and performance 
- Mobile and desktop views
- Add, remove, get total and clear cart logic 
- Clear cart on basket click (just for testing purposes)
- Custom hook with test
- Tailwind styling
- Types and TS 

## Future improvements

- Develop on add to cart logic e.g. implementing stock logic, so user cant add to cart if their card already contains the maximum stock quantity
- Add button states regarding text e.g. 'adding to cart...', 'added to cart' etc
- Get my custom render and renderHook functions working - faced some issues with the apollo client here so with more time would look into this.  
- Continue developing on the modularization of the code (potentially look into rearranging ProductDetails) and adding more tests at component level and using snapshots