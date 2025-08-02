// Select the dark mode button
const modeButton = document.querySelector('.mode');

// Check localStorage for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark'); // Apply dark mode if saved
}

// Toggle dark mode on button click and save preference
modeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  
  // Save mode preference in localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});






const cardContaier = document.querySelector(".card-container");
let allCountriesData;
fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
  .then((res) => res.json())
  .then((data) => {
    allCountriesData=data;
    console.log(allCountriesData);
    cardContaier.innerHTML='';
    data.forEach((countryData) => {
      const card = document.createElement("a");
      card.classList.add("card");
      card.href = `./country.html?name=${encodeURIComponent(countryData.name.common)}`;

      // const cardImg=document.createElement('img');
      // cardImg.src='https://flagcdn.com/gs.svg';
      // card.appendChild(cardImg);

      //-->above method is very long if we create each elemt of a card onr by one,below is better approach

      const cardHTML = `
                <img src="${countryData.flags.svg}" alt="${countryData.name.common}">
                <div class="card-content">
                    <h3 class="card-title">${countryData.name.common}</h3>
                    <p><b>Population: </b>${countryData.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${countryData.region}</p>
                    <p><b>Capital: </b>${countryData.capital}</p>
                </div>
                `;
      card.innerHTML = cardHTML;

      cardContaier.append(card);
    });
  });


  //input 


const filter=document.querySelector('.filter');

filter.addEventListener('change',(e)=>{
  let regionname=filter.value;
  fetch(`https://restcountries.com/v3.1/region/${regionname}`)
  .then((res) => res.json())
  .then((data) => {
    cardContaier.innerHTML='';
    data.forEach((countryData) => {
      const card = document.createElement("a");
      card.classList.add("card");
      card.href = `./country.html?name=${encodeURIComponent(countryData.name.common)}`;

      
      const cardHTML = `
                <img src="${countryData.flags.svg}" alt="${countryData.name.common}">
                <div class="card-content">
                    <h3 class="card-title">${countryData.name.common}</h3>
                    <p><b>Population: </b>${countryData.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${countryData.region}</p>
                    <p><b>Capital: </b>${countryData.capital}</p>
                </div>
                `;
      card.innerHTML = cardHTML;

      cardContaier.append(card);
    });
  });
})


//search
const input = document.querySelector('.input-text');
input.addEventListener('input', (e) => {
  const filteredElement = allCountriesData.filter((country) => 
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  
  );
  console.log(filteredElement);
  renderCountries(filteredElement);
  
});
function renderCountries(countries) {
  cardContaier.innerHTML = ''; // Clear previous content
  countries.forEach((countryData) => {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = `./country.html?name=${encodeURIComponent(countryData.name.common)}`;
    
    const cardHTML = `
      <img src="${countryData.flags.svg}" alt="${countryData.name.common}">
      <div class="card-content">
          <h3 class="card-title">${countryData.name.common}</h3>
          <p><b>Population: </b>${countryData.population.toLocaleString('en-IN')}</p>
          <p><b>Region: </b>${countryData.region}</p>
          <p><b>Capital: </b>${countryData.capital || 'N/A'}</p>
      </div>
    `;
    card.innerHTML = cardHTML;
    cardContaier.append(card);
  });
}

  //2nd page
  

  


