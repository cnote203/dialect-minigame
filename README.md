# Dialect

Dialect is a simple web-based guessing game where players try to identify the country of origin for a given idiom. Each level features an idiomatic phrase, and the player has up to four guesses to identify the correct country using hints and distance-based feedback.

## Features

- 10 handcrafted levels with unique idioms
- Country alias support (e.g. "USA", "America", "United States")
- Geographic distance feedback based on country coordinates
- Progressive hint system that reduces score with each hint used
- Explanation box that unlocks after the level is completed
- Previous guesses sidebar
- Score and guess tracking
- Fully responsive layout with no external libraries

## How to Play

1. Read the idiom shown on the screen.
2. Enter the country you think the idiom comes from.
3. After each guess, you'll see how far off you are in kilometers.
4. Use the hint button to get clues (costs points).
5. Complete the level to unlock the explanation.
6. Use the Prev/Next buttons to move between levels.

## Getting Started

To run the game locally:

1. Clone the repository: git clone https://github.com/yourusername/dialect.git

2. Open `index.html` in your browser.

No installation or build process is required. Everything runs in the browser.

## Project Structure

- `index.html` – Main HTML file
- `style.css` – Styling for layout, responsiveness, and visual elements
- `dialect-game.js` – Core game logic, including state management and event handling

## License

This project is open source and available under the MIT License.

