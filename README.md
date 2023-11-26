# Summary

- [The Project](#the-project)
   - [Functionalities](#functionalities)
   - [Built With](#built-with)
- [Using the Project](#using-the-project)
   - [Installation](#installation)
      - [Pre-requisites](#pre-requisites)
      - [Steps](#steps)
   - [Testing](#testing)
   - [Linting + Formatting](#linting--formatting)

# The Project

(<b><abbr title="Work in progress">WIP</abbr></b>) This is a Quest, a special exercise from the [DevQuest](https://br.linkedin.com/school/devquest-dev-em-dobro/) course where I have to come up with my own design and implementation of a <abbr title="Single Page Application">SPA</abbr> that fetches Pokémons from the [PokéAPI](https://pokeapi.co/) and exhibit them on a list initially containing 10.

## Functionalities

- Obtains initial Pokémons from user's Local Storage or fetches 10 from PokéAPI.
- Allows searching for a new Pokémon by typing its name or ID.
- Permits getting between 1 to 10 random Pokémons.
- (WIP) Sort by ID or name.
- (WIP) Filter/sort by type(s).
- (WIP) Toggle between light and dark themes.
- (WIP) Saves user settings.

## Built With

Project Kickstarted with <strong>[Vite](https://vitejs.dev/)</strong> using the following technologies:

- <strong>HTML5, CSS3</strong>: Provides necessary structure and styling for the app.

- <strong>JavaScript + [TypeScript](https://www.typescriptlang.org/)</strong>: JS allows interactions with the app and TS makes JS code type-safe, less prone to bugs.

- <strong>[React](https://react.dev/)</strong>: Transforms the app into a <abbr title="Single Page Application">SPA</abbr>, making the user experience smoother.

   - <strong>[Styled Components](https://styled-components.com/)</strong>: Isolate styles, making them easier to be created, maintaned and escalated.

   - <strong>[React Router DOM](https://reactrouter.com/)</strong>: Further improves user experience by leaving the routing to the Browser, allowing it to download only what has changed on the screen, instead of downloading everything again.

- <strong>[Vitest](https://vitest.dev/)</strong>: For testing the project.

- Some <strong>[Testing Library](https://testing-library.com/)</strong> libraries:
   - <strong>[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)</strong>: Make tests with React Components.
   - <strong>[User event](https://testing-library.com/docs/user-event/intro/)</strong>: Test events (mouse click, keyboard typing, etc.) with more accuracy.
- <strong>[ESLint](https://eslint.org/)</strong>: Linter used to detect bugs in code.

- <strong>[Prettier](https://prettier.io/)</strong>: Code formatter used to make the code visually better and standardized.


# Using the project

This section will explain how to install and use the project.

## Installation

Want to test it in your own machine? Check the following guide:

### Pre-requisites

- Git
- A package manager (I used NPM which is installed together with [Node.js](https://nodejs.dev))

### Steps

1. (Optional) Fork the project

2. Run in the terminal: `git clone https://github.com/alexgabriel8/results-summary-component.git`
   - <b>If you have forked the project</b>, substitute alexgabriel8 by your username.

3. Enter the folder created by the clone and install its dependencies. (Using NPM: `npm i` or `npm install`)

4. After installing, run the `dev` script (Using NPM: `npm run dev`) and paste the resulting URL on the Browser to see the project running!

## Testing

Run the `test` script in the terminal to run all tests. (Using NPM: `npm run test`)

## Linting + Formatting

You can run the `lint` script in the terminal (Using NPM: `npm run lint`) or use VS Code with the ESLint extension to see errors in real time.

Running the `format` script with your Package Manager will make Prettier format all files inside the src folder. (Using NPM: `npm run format`)