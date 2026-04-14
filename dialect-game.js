// ---------------------
// Game Configuration
// ---------------------

const levels = [
  {
    answer: "Canada",
    phrase: "I'm just gonna give'er!",
    explanation: "Used to express going all out or doing something with full energy.",
    hints: [
      "Northern Hemisphere",
      "Located in North America",
      "Known for maple syrup, moose, and politeness",
      "Its capital is Ottawa"
    ],
    region: "North America",
    difficulty: 1
  },
  {
    answer: "Australia",
    phrase: "He's flat out like a lizard drinking.",
    explanation: "Means someone is extremely busy — like a lizard trying to drink while staying flat.",
    hints: [
      "Southern Hemisphere",
      "Also a continent",
      "Famous for beaches and deadly animals",
      "Its capital is Canberra"
    ],
    region: "Oceania",
    difficulty: 2
  },
  {
    answer: "Ireland",
    phrase: "He's away with the fairies.",
    explanation: "Said about someone who is daydreaming or disconnected from reality.",
    hints: [
      "Island nation",
      "Member of the EU",
      "Known for Guinness, folk tales, and rolling green hills",
      "Its capital is Dublin"
    ],
    region: "Europe",
    difficulty: 2
  },
  {
    answer: "Japan",
    phrase: "The nail that sticks out gets hammered down.",
    explanation: "A cultural idiom suggesting that non-conformity is discouraged.",
    hints: [
      "Island country in East Asia",
      "Has a history of shoguns and emperors",
      "Known for technology and cherry blossoms",
      "Its capital is Tokyo"
    ],
    region: "Asia",
    difficulty: 2
  },
  {
    answer: "Brazil",
    phrase: "He stuck his foot in the jackfruit.",
    explanation: "Means someone went overboard or made a huge mess of things.",
    hints: [
      "Located in South America",
      "Portuguese-speaking country",
      "Known for football, samba, and the Amazon",
      "Its capital is Brasília"
    ],
    region: "South America",
    difficulty: 3
  },
  {
    answer: "France",
    phrase: "The carrots are cooked.",
    explanation: "Means it's all over — the situation is irreversible.",
    hints: [
      "Western European country",
      "Borders Spain, Germany, and Italy",
      "Famous for wine, cheese, and revolution",
      "Its capital is Paris"
    ],
    region: "Europe",
    difficulty: 2
  },
  {
    answer: "Mexico",
    phrase: "He threw the egg.",
    explanation: "Means being lazy or doing nothing at all.",
    hints: [
      "North American country",
      "Once home to the Aztec Empire",
      "Known for tacos, mariachi, and Día de los Muertos",
      "Its capital is Mexico City"
    ],
    region: "North America",
    difficulty: 2
  },
  {
    answer: "Kenya",
    phrase: "He was eaten by lions.",
    explanation: "He’s long gone or never coming back — often to a remote place.",
    hints: [
      "Equatorial country",
      "English and Swahili are official languages",
      "Known for safaris and marathon runners",
      "Its capital is Nairobi"
    ],
    region: "Africa",
    difficulty: 3
  },
  {
    answer: "South Korea",
    phrase: "You’ve got poop on your nose.",
    explanation: "Said to someone who’s sucking up to the boss.",
    hints: [
      "Eastern Asia",
      "Split from its northern neighbor in 1945",
      "K-pop, beauty tech, and StarCraft are big here",
      "Its capital is Seoul"
    ],
    region: "Asia",
    difficulty: 2
  },
  {
    answer: "Germany",
    phrase: "I think I’ve been run over by a pig.",
    explanation: "Expresses shock or disbelief, similar to saying 'What just happened?'",
    hints: [
      "Central European country",
      "Known for precision engineering",
      "Oktoberfest and autobahns are big deals here",
      "Its capital is Berlin"
    ],
    region: "Europe",
    difficulty: 3
  }
];


let state = {};
let currentLevelIndex = 0;
let totalScore = 0;

function loadLevel(index) {
  const level = levels[index];
  state = {
    answer: level.answer,
    phrase: level.phrase,
    explanation: level.explanation,
    hints: level.hints,
    region: level.region,
    difficulty: level.difficulty,
    guessesLeft: 4,
    score: 10,
    hintsUsed: 0,
    guessedCorrectly: false,
    levelComplete: false
  };

  // Reset UI for new level
  document.getElementById("hintBox").innerHTML = "";
  document.getElementById("guessHistory").innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("hintBtn").disabled = false;
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("explanationBox").innerHTML = "";

  renderGame();
}


// ---------------------
// Country Coordinates Placeholder
// ---------------------
const countryCoordinates = {
  "Afghanistan": { lat: 33.0, lon: 65.0 },
  "Åland Islands": { lat: 60.116667, lon: 19.9 },
  "Albania": { lat: 41.0, lon: 20.0 },
  "Algeria": { lat: 28.0, lon: 3.0 },
  "American Samoa": { lat: -14.3333, lon: -170.0 },
  "Andorra": { lat: 42.5, lon: 1.6 },
  "Angola": { lat: -12.5, lon: 18.5 },
  "Anguilla": { lat: 18.25, lon: -63.1667 },
  "Antarctica": { lat: -90.0, lon: 0.0 },
  "Antigua and Barbuda": { lat: 17.05, lon: -61.8 },
  "Argentina": { lat: -34.0, lon: -64.0 },
  "Armenia": { lat: 40.0, lon: 45.0 },
  "Aruba": { lat: 12.5, lon: -69.9667 },
  "Australia": { lat: -27.0, lon: 133.0 },
  "Austria": { lat: 47.3333, lon: 13.3333 },
  "Azerbaijan": { lat: 40.5, lon: 47.5 },
  "Bahamas": { lat: 24.25, lon: -76.0 },
  "Bahrain": { lat: 26.0, lon: 50.55 },
  "Bangladesh": { lat: 24.0, lon: 90.0 },
  "Barbados": { lat: 13.1667, lon: -59.5333 },
  "Belarus": { lat: 53.0, lon: 28.0 },
  "Belgium": { lat: 50.8333, lon: 4.0 },
  "Belize": { lat: 17.25, lon: -88.75 },
  "Benin": { lat: 9.5, lon: 2.25 },
  "Bermuda": { lat: 32.3333, lon: -64.75 },
  "Bhutan": { lat: 27.5, lon: 90.5 },
  "Bolivia, Plurinational State of": { lat: -17.0, lon: -65.0 },
  "Bolivia": { lat: -17.0, lon: -65.0 },
  "Bonaire, Sint Eustatius and Saba": { lat: 12.183333, lon: -68.233333 },
  "Bosnia and Herzegovina": { lat: 44.0, lon: 18.0 },
  "Botswana": { lat: -22.0, lon: 24.0 },
  "Bouvet Island": { lat: -54.4333, lon: 3.4 },
  "Brazil": { lat: -10.0, lon: -55.0 },
  "British Indian Ocean Territory": { lat: -6.0, lon: 71.5 },
  "Brunei Darussalam": { lat: 4.5, lon: 114.6667 },
  "Brunei": { lat: 4.5, lon: 114.6667 },
  "Bulgaria": { lat: 43.0, lon: 25.0 },
  "Burkina Faso": { lat: 13.0, lon: -2.0 },
  "Burma": { lat: 22.0, lon: 98.0 },
  "Burundi": { lat: -3.5, lon: 30.0 },
  "Cambodia": { lat: 13.0, lon: 105.0 },
  "Cameroon": { lat: 6.0, lon: 12.0 },
  "Canada": { lat: 60.0, lon: -95.0 },
  "Cape Verde": { lat: 16.0, lon: -24.0 },
  "Cayman Islands": { lat: 19.5, lon: -80.5 },
  "Central African Republic": { lat: 7.0, lon: 21.0 },
  "Chad": { lat: 15.0, lon: 19.0 },
  "Chile": { lat: -30.0, lon: -71.0 },
  "China": { lat: 35.0, lon: 105.0 },
  "Christmas Island": { lat: -10.5, lon: 105.6667 },
  "Cocos Islands": { lat: -12.5, lon: 96.8333 },
  "Colombia": { lat: 4.0, lon: -72.0 },
  "Comoros": { lat: -12.1667, lon: 44.25 },
  "DR Congo": { lat: 0.0, lon: 25.0 },
  "Congo": { lat: -1.0, lon: 15.0 },
  "Cook Islands": { lat: -21.2333, lon: -159.7667 },
  "Costa Rica": { lat: 10.0, lon: -84.0 },
  "Côte d'Ivoire": { lat: 8.0, lon: -5.0 },
  "Croatia": { lat: 45.1667, lon: 15.5 },
  "Cuba": { lat: 21.5, lon: -80.0 },
  "Curaçao": { lat: 12.166667, lon: -68.966667 },
  "Cyprus": { lat: 35.0, lon: 33.0 },
  "Czech Republic": { lat: 49.75, lon: 15.5 },
  "Denmark": { lat: 56.0, lon: 10.0 },
  "Djibouti": { lat: 11.5, lon: 43.0 },
  "Dominica": { lat: 15.4167, lon: -61.3333 },
  "Dominican Republic": { lat: 19.0, lon: -70.6667 },
  "Ecuador": { lat: -2.0, lon: -77.5 },
  "Egypt": { lat: 27.0, lon: 30.0 },
  "El Salvador": { lat: 13.8333, lon: -88.9167 },
  "Equatorial Guinea": { lat: 2.0, lon: 10.0 },
  "Eritrea": { lat: 15.0, lon: 39.0 },
  "Estonia": { lat: 59.0, lon: 26.0 },
  "Ethiopia": { lat: 8.0, lon: 38.0 },
  "Falkland Islands": { lat: -51.75, lon: -59.0 },
  "Faroe Islands": { lat: 62.0, lon: -7.0 },
  "Fiji": { lat: -18.0, lon: 175.0 },
  "Finland": { lat: 64.0, lon: 26.0 },
  "France": { lat: 46.0, lon: 2.0 },
  "French Guiana": { lat: 4.0, lon: -53.0 },
  "French Polynesia": { lat: -15.0, lon: -140.0 },
  "French Southern Territories": { lat: -43.0, lon: 67.0 },
  "Gabon": { lat: -1.0, lon: 11.75 },
  "Gambia": { lat: 13.4667, lon: -16.5667 },
  "Georgia": { lat: 42.0, lon: 43.5 },
  "Germany": { lat: 51.0, lon: 9.0 },
  "Ghana": { lat: 8.0, lon: -2.0 },
  "Gibraltar": { lat: 36.1833, lon: -5.3667 },
  "Greece": { lat: 39.0, lon: 22.0 },
  "Greenland": { lat: 72.0, lon: -40.0 },
  "Grenada": { lat: 12.1167, lon: -61.6667 },
  "Guadeloupe": { lat: 16.25, lon: -61.5833 },
  "Guam": { lat: 13.4667, lon: 144.7833 },
  "Guatemala": { lat: 15.5, lon: -90.25 },
  "Guernsey": { lat: 49.5, lon: -2.56 },
  "Guinea-Bissau": { lat: 12.0, lon: -15.0 },
  "Guinea": { lat: 11.0, lon: -10.0 },
  "Guyana": { lat: 5.0, lon: -59.0 },
  "Haiti": { lat: 19.0, lon: -72.4167 },
  "Heard Island and McDonald Islands": { lat: -53.1, lon: 72.5167 },
  "vatican": { lat: 41.9, lon: 12.45 },
  "Honduras": { lat: 15.0, lon: -86.5 },
  "Hong Kong": { lat: 22.25, lon: 114.1667 },
  "Hungary": { lat: 47.0, lon: 20.0 },
  "Iceland": { lat: 65.0, lon: -18.0 },
  "India": { lat: 20.0, lon: 77.0 },
  "Indonesia": { lat: -5.0, lon: 120.0 },
  "Iran": { lat: 32.0, lon: 53.0 },
  "Iraq": { lat: 33.0, lon: 44.0 },
  "Ireland": { lat: 53.0, lon: -8.0 },
  "Isle of Man": { lat: 54.23, lon: -4.55 },
  "Israel": { lat: 31.5, lon: 34.75 },
  "Italy": { lat: 42.8333, lon: 12.8333 },
  "Ivory Coast": { lat: 8.0, lon: -5.0 },
  "Jamaica": { lat: 18.25, lon: -77.5 },
  "Japan": { lat: 36.0, lon: 138.0 },
  "Jersey": { lat: 49.21, lon: -2.13 },
  "Jordan": { lat: 31.0, lon: 36.0 },
  "Kazakhstan": { lat: 48.0, lon: 68.0 },
  "Kenya": { lat: 1.0, lon: 38.0 },
  "Kiribati": { lat: 1.4167, lon: 173.0 },
  "North Korea": { lat: 40.0, lon: 127.0 },
  "South Korea": { lat: 37.0, lon: 127.5 },
  "Kosovo": { lat: 42.583333, lon: 21.0 },
  "Kuwait": { lat: 29.3375, lon: 47.6581 },
  "Kyrgyzstan": { lat: 41.0, lon: 75.0 },
  "Laos": { lat: 18.0, lon: 105.0 },
  "Latvia": { lat: 57.0, lon: 25.0 },
  "Lebanon": { lat: 33.8333, lon: 35.8333 },
  "Lesotho": { lat: -29.5, lon: 28.5 },
  "Liberia": { lat: 6.5, lon: -9.5 },
  "Libya": { lat: 25.0, lon: 17.0 },
  "Liechtenstein": { lat: 47.1667, lon: 9.5333 },
  "Lithuania": { lat: 56.0, lon: 24.0 },
  "Luxembourg": { lat: 49.75, lon: 6.1667 },
  "Macao": { lat: 22.1667, lon: 113.55 },
  "Macedonia": { lat: 41.8333, lon: 22.0 },
  "Madagascar": { lat: -20.0, lon: 47.0 },
  "Malawi": { lat: -13.5, lon: 34.0 },
  "Malaysia": { lat: 2.5, lon: 112.5 },
  "Maldives": { lat: 3.25, lon: 73.0 },
  "Mali": { lat: 17.0, lon: -4.0 },
  "Malta": { lat: 35.8333, lon: 14.5833 },
  "Marshall Islands": { lat: 9.0, lon: 168.0 },
  "Martinique": { lat: 14.6667, lon: -61.0 },
  "Mauritania": { lat: 20.0, lon: -12.0 },
  "Mauritius": { lat: -20.2833, lon: 57.55 },
  "Mayotte": { lat: -12.8333, lon: 45.1667 },
  "Mexico": { lat: 23.0, lon: -102.0 },
  "Micronesia": { lat: 6.9167, lon: 158.25 },
  "Moldova": { lat: 47.0, lon: 29.0 },
  "Monaco": { lat: 43.7333, lon: 7.4 },
  "Mongolia": { lat: 46.0, lon: 105.0 },
  "Montenegro": { lat: 42.0, lon: 19.0 },
  "Montserrat": { lat: 16.75, lon: -62.2 },
  "Morocco": { lat: 32.0, lon: -5.0 },
  "Mozambique": { lat: -18.25, lon: 35.0 },
  "Myanmar": { lat: 22.0, lon: 98.0 },
  "Namibia": { lat: -22.0, lon: 17.0 },
  "Nauru": { lat: -0.5333, lon: 166.9167 },
  "Nepal": { lat: 28.0, lon: 84.0 },
  "Netherlands Antilles": { lat: 12.25, lon: -68.75 },
  "Netherlands": { lat: 52.5, lon: 5.75 },
  "New Caledonia": { lat: -21.5, lon: 165.5 },
  "New Zealand": { lat: -41.0, lon: 174.0 },
  "Nicaragua": { lat: 13.0, lon: -85.0 },
  "Niger": { lat: 16.0, lon: 8.0 },
  "Nigeria": { lat: 10.0, lon: 8.0 },
  "Niue": { lat: -19.0333, lon: -169.8667 },
  "Norfolk Island": { lat: -29.0333, lon: 167.95 },
  "Northern Mariana Islands": { lat: 15.2, lon: 145.75 },
  "Norway": { lat: 62.0, lon: 10.0 },
  "Oman": { lat: 21.0, lon: 57.0 },
  "Pakistan": { lat: 30.0, lon: 70.0 },
  "Palau": { lat: 7.5, lon: 134.5 },
  "Palestine": { lat: 32.0, lon: 35.25 },
  "Panama": { lat: 9.0, lon: -80.0 },
  "Papua New Guinea": { lat: -6.0, lon: 147.0 },
  "Paraguay": { lat: -23.0, lon: -58.0 },
  "Peru": { lat: -10.0, lon: -76.0 },
  "Philippines": { lat: 13.0, lon: 122.0 },
  "Pitcairn": { lat: -24.7, lon: -127.4 },
  "Poland": { lat: 52.0, lon: 20.0 },
  "Portugal": { lat: 39.5, lon: -8.0 },
  "Puerto Rico": { lat: 18.25, lon: -66.5 },
  "Qatar": { lat: 25.5, lon: 51.25 },
  "Réunion": { lat: -21.1, lon: 55.6 },
  "Romania": { lat: 46.0, lon: 25.0 },
  "Russia": { lat: 60.0, lon: 100.0 },
  "Russian Federation": { lat: 60.0, lon: 100.0 },
  "Rwanda": { lat: -2.0, lon: 30.0 },
  "Saint Barthélemy": { lat: 17.897728, lon: -62.834244 },
  "Saint Helena": { lat: -15.9333, lon: -5.7 },
  "Saint Kitts and Nevis": { lat: 17.3333, lon: -62.75 },
  "Saint Lucia": { lat: 13.8833, lon: -61.1333 },
  "Saint Martin": { lat: 18.075278, lon: -63.06 },
  "Saint Pierre and Miquelon": { lat: 46.8333, lon: -56.3333 },
  "Saint Vincent & the Grenadines": { lat: 13.25, lon: -61.2 },
  "Saint Vincent and the Grenadines": { lat: 13.25, lon: -61.2 },
  "Samoa": { lat: -13.5833, lon: -172.3333 },
  "San Marino": { lat: 43.7667, lon: 12.4167 },
  "Sao Tome and Principe": { lat: 1.0, lon: 7.0 },
  "Saudi Arabia": { lat: 25.0, lon: 45.0 },
  "Senegal": { lat: 14.0, lon: -14.0 },
  "Serbia": { lat: 44.0, lon: 21.0 },
  "Seychelles": { lat: -4.5833, lon: 55.6667 },
  "Sierra Leone": { lat: 8.5, lon: -11.5 },
  "Singapore": { lat: 1.3667, lon: 103.8 },
  "Sint Maarten": { lat: 18.033333, lon: -63.05 },
  "Slovakia": { lat: 48.6667, lon: 19.5 },
  "Slovenia": { lat: 46.0, lon: 15.0 },
  "Solomon Islands": { lat: -8.0, lon: 159.0 },
  "Somalia": { lat: 10.0, lon: 49.0 },
  "South Africa": { lat: -29.0, lon: 24.0 },
  "South Georgia": { lat: -54.5, lon: -37.0 },
  "South Korea": { lat: 37.0, lon: 127.5 },
  "South Sudan": { lat: 8.0, lon: 30.0 },
  "Spain": { lat: 40.0, lon: -4.0 },
  "Sri Lanka": { lat: 7.0, lon: 81.0 },
  "Sudan": { lat: 15.0, lon: 30.0 },
  "Suriname": { lat: 4.0, lon: -56.0 },
  "Svalbard and Jan Mayen": { lat: 78.0, lon: 20.0 },
  "Swaziland": { lat: -26.5, lon: 31.5 },
  "Sweden": { lat: 62.0, lon: 15.0 },
  "Switzerland": { lat: 47.0, lon: 8.0 },
  "Syria": { lat: 35.0, lon: 38.0 },
  "Taiwan": { lat: 23.5, lon: 121.0 },
  "Tajikistan": { lat: 39.0, lon: 71.0 },
  "Tanzania": { lat: -6.0, lon: 35.0 },
  "Thailand": { lat: 15.0, lon: 100.0 },
  "Timor-Leste": { lat: -8.55, lon: 125.5167 },
  "Togo": { lat: 8.0, lon: 1.1667 },
  "Tokelau": { lat: -9.0, lon: -172.0 },
  "Tonga": { lat: -20.0, lon: -175.0 },
  "Trinidad and Tobago": { lat: 11.0, lon: -61.0 },
  "Tunisia": { lat: 34.0, lon: 9.0 },
  "Turkey": { lat: 39.0, lon: 35.0 },
  "Turkmenistan": { lat: 40.0, lon: 60.0 },
  "Turks and Caicos": { lat: 21.75, lon: -71.5833 },
  "Tuvalu": { lat: -8.0, lon: 178.0 },
  "Uganda": { lat: 1.0, lon: 32.0 },
  "Ukraine": { lat: 49.0, lon: 32.0 },
  "United Arab Emirates": { lat: 24.0, lon: 54.0 },
  "United Kingdom": { lat: 54.0, lon: -2.0 },
  "United States": { lat: 38.0, lon: -97.0 },
  "Uruguay": { lat: -33.0, lon: -56.0 },
  "Uzbekistan": { lat: 41.0, lon: 64.0 },
  "Vanuatu": { lat: -16.0, lon: 167.0 },
  "Venezuela": { lat: 8.0, lon: -66.0 },
  "Vietnam": { lat: 16.0, lon: 106.0 },
  "Virgin Islands": { lat: 18.5, lon: -64.5 },
  "Wallis and Futuna": { lat: -13.3, lon: -176.2 },
  "Western Sahara": { lat: 24.5, lon: -13.0 },
  "Yemen": { lat: 15.0, lon: 48.0 },
  "Zambia": { lat: -15.0, lon: 30.0 },
  "Zimbabwe": { lat: -20.0, lon: 30.0 }
};
// ---------------------
// Country Aliases
// ---------------------
const countryAliases = {
  "usa": "United States",
  "us": "United States",
  "united states of america": "United States",
  "america": "United States",
  "uk": "United Kingdom",
  "britain": "United Kingdom",
  "great britain": "United Kingdom",
  "uae": "United Arab Emirates",
  "ivory coast": "Ivory Coast",
  "south korea": "South Korea",
  "north korea": "North Korea",
  "russia": "Russia",
  "vietnam": "Vietnam",
  "laos": "Laos",
  "czechia": "Czech Republic",
  "syria": "Syria",
  "iran": "Iran",
  "tanzania": "Tanzania",
  "venezuela": "Venezuela",
  "moldova": "Moldova",
  "bolivia": "Bolivia",
  "brunei": "Brunei",
  "palestine": "Palestine",
  "micronesia": "Micronesia",
  "cape verde": "Cape Verde",
  "congo-brazzaville": "Congo",
  "congo-kinshasa": "Democratic Republic of the Congo",
  "north macedonia": "North Macedonia"
};

// ---------------------
// Guess Submission
// ---------------------
function submitGuess(input) {
  const rawGuess = input.trim();
  const lowerGuess = rawGuess.toLowerCase();

  // Use alias or fallback to capitalized form
  const finalGuess = countryAliases[lowerGuess] || capitalizeEachWord(rawGuess);

  // Validate country
  if (!countryCoordinates[finalGuess]) {
    showInvalidGuess(rawGuess);
    return;
  }

  clearFeedback();



  if (finalGuess.toLowerCase() === state.answer.toLowerCase()) {
    state.guessedCorrectly = true;
    renderWinScreen();
  } else {
    state.guessesLeft--;
    state.score = Math.max(0, state.score - 2);

    const distance = calculateDistance(state.answer, finalGuess);
    appendGuess(finalGuess, distance);
    document.getElementById("feedback").innerHTML = `<span class="incorrect">❌ Incorrect! You are ${distance} km away.</span>`;

    document.getElementById("guessInput").value = "";

    if (state.guessesLeft <= 0) {
      renderLoseScreen();
    } else {
      updateScoreUI();
    }
  }
}

// ---------------------
// Distance Calculation
// ---------------------
function calculateDistance(country1, country2) {
  const toRad = deg => (deg * Math.PI) / 180;
  const R = 6371;

  const c1 = countryCoordinates[country1];
  const c2 = countryCoordinates[country2];

  if (!c1 || !c2) return "unknown";

  const dLat = toRad(c2.lat - c1.lat);
  const dLon = toRad(c2.lon - c1.lon);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(c1.lat)) * Math.cos(toRad(c2.lat)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// ---------------------
// Rendering Logic
// ---------------------
function renderGame() {
  document.getElementById("idiom").innerText = `Idiom: "${state.phrase}"`;
  document.getElementById("levelIndicator").innerText = `Level ${currentLevelIndex + 1} / ${levels.length}`;
  document.getElementById("score").innerText = `Level Score: ${state.score}`;
  document.getElementById("totalScore").innerText = `Total Score: ${totalScore}`;
  document.getElementById("guesses").innerText = `Guesses Left: ${state.guessesLeft}`;
}

function updateScoreUI() {
  document.getElementById("levelIndicator").innerText = `Level ${currentLevelIndex + 1} / ${levels.length}`;
  document.getElementById("score").innerText = `Level Score: ${state.score}`;
  document.getElementById("totalScore").innerText = `Total Score: ${totalScore}`;
  document.getElementById("guesses").innerText = `Guesses Left: ${state.guessesLeft}`;
}

function appendGuess(country, distance) {
  const li = document.createElement("li");
  li.innerText = `${country} - ${distance} km away`;
  document.getElementById("guessHistory").appendChild(li);
}

function showInvalidGuess(word) {
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `<span class="incorrect">❌ Invalid country: "${word}"</span>`;
  shakeInput();
}

function clearFeedback() {
  document.getElementById("feedback").innerText = "";
}

function shakeInput() {
  const inputBox = document.getElementById("guessInput");
  inputBox.classList.add("shake");
  setTimeout(() => inputBox.classList.remove("shake"), 500);
}

function renderWinScreen() {
  if (!state.levelComplete) {
    state.levelComplete = true;
    totalScore += state.score;
  }
  document.getElementById("feedback").innerHTML = `
    <span class="correct">🎉 Correct! ${state.answer} is the right answer!</span>
  `;
  document.getElementById("explanationBox").innerHTML = `
    <div class="hint">💬 Idiom meaning: ${state.explanation}</div>
  `;
  updateScoreUI();
  disableInput();
}

function renderLoseScreen() {
  if (!state.levelComplete) {
    state.levelComplete = true;
  }
  document.getElementById("feedback").innerHTML = `
    <span class="incorrect">❌ Out of guesses! The correct answer was ${state.answer}.</span>
  `;
  document.getElementById("explanationBox").innerHTML = `
    <div class="hint">💬 Idiom meaning: ${state.explanation}</div>
  `;
  updateScoreUI();
  disableInput();
}




function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("hintBtn").disabled = true;
  document.getElementById("submitBtn").disabled = true;
}

// ---------------------
// Hint Usage
// ---------------------
function useHint() {
  if (state.hintsUsed >= state.hints.length || state.guessesLeft <= 0) return;

  const hintText = state.hints[state.hintsUsed];
  state.hintsUsed++;
  state.score = Math.max(0, state.score - 1);
  updateScoreUI();

  const hintEl = document.createElement("div");
  hintEl.className = "hint";
  hintEl.innerText = `Hint #${state.hintsUsed}: ${hintText}`;
  document.getElementById("hintBox").appendChild(hintEl);
}

// ---------------------
// Utilities
// ---------------------
function capitalizeEachWord(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ---------------------
// Event Bindings
// ---------------------
window.onload = () => {
  loadLevel(currentLevelIndex);

  document.getElementById("prevLevel").addEventListener("click", () => {
    if (currentLevelIndex > 0) {
      currentLevelIndex--;
      loadLevel(currentLevelIndex);
    }
  });

  document.getElementById("nextLevel").addEventListener("click", () => {
    if (!state.levelComplete) {
      document.getElementById("feedback").innerHTML =
        `<span class="incorrect">⚠️ Finish this level first!</span>`;
      return;
    }
    if (currentLevelIndex < levels.length - 1) {
      currentLevelIndex++;
      loadLevel(currentLevelIndex);
    } else {
      document.getElementById("feedback").innerHTML =
        `<span class="correct">🏆 You've completed all levels! Final Score: ${totalScore}</span>`;
    }
  });

  document.getElementById("guessInput").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      submitGuess(e.target.value);
    }
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    submitGuess(document.getElementById("guessInput").value);
  });

  document.getElementById("hintBtn").addEventListener("click", useHint);
};
