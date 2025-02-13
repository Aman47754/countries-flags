# Country Flags Project

This project is a web application that displays country information using the [REST Countries API](https://restcountries.com/). Users can search for countries, filter them by region, view detailed country information, and toggle between light and dark modes.

## Features

- **Search Countries**: Users can search for countries by name.
- **Filter by Region**: Dropdown to filter countries by region.
- **View Country Details**: Clicking on a country shows detailed information, including the flag, population, region, subregion, capital, currency, and languages.
- **Dark Mode**: Toggle between light and dark mode, with the preference saved in localStorage.
- **Back Navigation**: A back button to navigate to the previous page.
- **Border Countries Navigation**: Users can click on border countries to view their details.

## Technologies Used

- HTML
- CSS
- JavaScript
- [REST Countries API](https://restcountries.com/)
- Font Awesome (for icons)
- Google Fonts (for typography)

## Setup & Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/Aman47754/countries-flags.git
   ```
2. Navigate to the project directory:
   ```sh
   cd countries-flags
   ```
3. Open `index.html` in your browser.

## File Structure

```
|-- country-flags/
    |-- index.html  # Main page listing all countries
    |-- country.html  # Detailed view of a single country
    |-- style.css  # Styling file
    |-- script.js  # Main script for handling countries and search
    |-- country.js  # Script for handling single country details
```

## Usage

1. Open the `index.html` file in a browser.
2. Use the search bar to find countries by name.
3. Use the dropdown filter to filter countries by region.
4. Click on any country to view its detailed information.
5. Toggle dark mode using the "Dark Mode" button.
6. Navigate back using the "Back" button on the details page.
7. Click on a border country to view its details.

## Live Demo

If hosted, add the link here:
[Live Demo](countries-flags-delta.vercel.app/)

## Screenshots



## License

This project is open-source and available under the [MIT License](LICENSE).

