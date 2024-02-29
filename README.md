# Summary

- [Project Pokédex](#project-pokédex)
   - [My Process](#my-process)
      - [Design/Prototype](#designprototype)
      - [Initial Coding Difficulties](#initial-coding-difficulties)
      - [Version 0.3.0](#version-030)
      - [List Filtering and Sorting](#list-filtering-and-sorting)
      - [Version 1.0.0](#version-100)
   - [Functionalities](#functionalities)
   - [Built With](#built-with)
- [Using the Project](#using-the-project)
   - [Installation](#installation)
      - [Pre-requisites](#pre-requisites)
      - [Steps](#steps)
   - [Testing](#testing)
   - [Linting + Formatting](#linting--formatting)

# Project Pokédex

![Project Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Falexgabriel8%2Fproject-pokedex%2Fmain%2Fpackage.json&query=%24.version&label=Version)

Originally conceived as a Quest - special exercise from the [DevQuest](https://br.linkedin.com/school/devquest-dev-em-dobro/) course - where I have to come up with my own design and implementation of a <abbr title="Single Page Application">SPA</abbr> that fetches Pokémons from the [PokéAPI](https://pokeapi.co/), exhibits them on a list initially containing 10 and takes to a page detailing any Pokémon that is clicked. However, I wanted to develop much more than was asked and decided to turn it in a personal project.

<div align="center">
   <img alt="Video for desktop version" src="./readme-assets/app-presentation-desktop.gif" width="700">
   <br>
   <br>
   <img alt="Video for mobile version" src="./readme-assets/app-presentation-mobile.gif">
</div>

## My Process

<details>

   <summary>A bit of my development journey...</summary>

   What was supposed to be an exercise for a course, became a personal project when I got excited to implement many extra things that weren't asked.

   ### Design/Prototype

   If you want to check the Project's [design](https://www.figma.com/file/5D3noXVHYhTpYkDuyM9ttH), change the visibility of the Settings Modal and the pages inside Outlet in order to see only the part you want:

   <div align="center">
      <img src="./readme-assets/navigate-figma-design.png" alt="Figma's design screenshot" width="500">

   </div>

   I'm not a designer, but I needed a visual representation of everything I planned to develop, which led me to create my first [Figma design](https://www.figma.com/file/5D3noXVHYhTpYkDuyM9ttH).

   I used [React Router's tutorial project](https://reactrouter.com/en/main/start/tutorial) as my initial inspiration, especially on the routing part. It's composed of two main components: the Pokémon list as the Root Route, the route that always stay on screen. And the Outlet Route, responsible for displaying the contents of every route accessed.

   For the themes, I tried choosing colors that reminded something about the Pokémon world. The light theme used the Pokédex's red and a light gray to simulate the lit screen. The dark theme colors were inspired in the Master Ball.

   I wanted to create a theme structure that would allow me to use both light and dark themes by coding few conditionals, this led me to devise an object structure for them and create two versions of the app in my Figma design, to see if the colors looked good on both themes.

   ### Initial Coding Difficulties

   Being my first personal project and one with a complexity I never dealed before, it was difficult coding it. Some of the initial difficulties were:

   - Had to google and even ask ChatGPT for help with TypeScript because I recently started learning it when I decided to use on the Project.

   - Implementing two sections with their own scroll — the Pokémon List and the Outlet — that would smoothly adjust their sizes whenever the list was toggled open/closed along with creating top and bottom bars that would follow the user's scroll on the list required a lot of experimentation.

   - How to store the Pokémons and how to manage its manipulation, from recovering from Local Storage to adding multiple Pokémons, one after the other to the list.

   ### Version 0.3.0

   After version 0.3.0, development got a bit easier. The basic structure of the project was done and the amount of time and effort it took for to get this far turned me into a better developer.

   ### List Filtering and Sorting

   The remaining functionalities to reach version 1.0.0 were the list filtering and sorting. The greatest challenge this time wasn't with logic, but on their implementation. Alterations on existing code were necessary, which required me to ponder for some hours on solutions that produced a clean code without breaking any parts of the project.

   I decided to not mutate the Pokémons List by copying to a new list the Pokémons meeting the filter criteria, then perform sorting on it. By counting the lenght of the filtered and unfiltered lists, it is obtained the amount of Pokémons on the list and the ones meeting the filter criteria.

   In order to not break the delete Pokémon functionality, the Pokémon's position on the list is placed inside its object, allowing correct deletion even when the list is both ordered and filtered.
   
   The filter and sort rules; the amount of Pokémons on the list and the ones that meet the filter criteria are stored somewhere global: inside a React Context.

   ### Version 1.0.0

   This version marks that all the planned functionalities were developed. This does not mean no more work will be done, from time to time refactors and maybe new functionalities will be made.

</details>

## Functionalities

**A list of Pokémons that:**

- [X] Is initially populated with 10 Pokémons fetched from the PokéAPI or recovered from user's Local Storage if saved there.
- [X] Adds Pokémons by typing its name or ID or by letting the App get 1 to 10 random ones.
- [X] Exhibits amount of Pokémons inside it.
- [X] Allows deleting a Pokémon from it.
- [X] Can sort Pokémons by ID or name.
- [X] Can filter by type(s).

**Page detailing a Pokémon:**

- [X] Shows Pokemon artwork, name, ID, Genus, types, stats, habitat, height, weight, generation, description, abilities and moves.
- [X] Shows previous and next Pokémons based on the ID of the current Pokémon.

**Theme:**

- [X] Starts with light or dark theme depending on user's preference.
- [X] Toggle between light and dark themes.

**Settings:**

- [X] Let user choose animated or static sprites for the Pokémon List.
- [X] Allow to save or not Pokémon List in Local Storage.
- [X] Empty the Pokémon List.

## Built With

Used <strong>[Vite](https://vitejs.dev/)</strong> with the following technologies:

- <strong>HTML5, CSS3</strong>: Provides structure and styling for the app.

- <strong>JavaScript + [TypeScript](https://www.typescriptlang.org/)</strong>: JS allows interactions with the app and TS makes JS code type-safe, less prone to bugs.

- <strong>[React](https://react.dev/)</strong>: Makes the user experience smoother by turning the App in a <abbr title="Single Page Application">SPA</abbr> and forces code to be written as components, facilitating maintanence and development of new features.

   - <strong>[Styled Components](https://styled-components.com/)</strong>: Isolate styles, making them easier to be created, maintaned and escalated.

   - <strong>[React Router DOM](https://reactrouter.com/)</strong>: Further improves user experience by leaving the routing to the Browser, allowing it to download only what has changed on the screen, instead of downloading everything again.

- <strong>[Vitest](https://vitest.dev/)</strong>: For testing the project.

- Some <strong>[Testing Library](https://testing-library.com/)</strong> libraries:
   - <strong>[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)</strong>: Test React Components.
   - <strong>[User event](https://testing-library.com/docs/user-event/intro/)</strong>: Test events (mouse click, keyboard typing, etc.) with more accuracy.
- <strong>[ESLint](https://eslint.org/)</strong>: Linter used to detect bugs in code.

- <strong>[Prettier](https://prettier.io/)</strong>: Code formatter used to make the code visually better and standardized.

# Using the project

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
