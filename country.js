// Get the current URL


// Use URLSearchParams to get the "name" parameter
const countryName = new URLSearchParams(location.search).get("name");
const hero=document.querySelector('.hero');

//back button
document.getElementById("backButton").addEventListener("click", (event) => {
    event.preventDefault(); // Prevents default behavior of `<a>` tag
    history.back(); // Navigates to the previous page in browser history
});


// //dark mode
// const modeButton = document.querySelector('.mode');
// modeButton.addEventListener('click', function () {
//     // Toggle dark mode on the body and header
//     document.body.classList.toggle('dark');
    
// });

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json()) // Call res.json() to parse the JSON response
  .then((data) => {
    console.log(data[0]); // Log the first result in the array
    //countryflag.src=;
    
    const heroHTML=`<div class="flag">
            <img src="${data[0].flags.svg}" alt="country image">
        </div>
        <div class="details">
            <h3 class="card-title">${countryName}</h3>
            <div class="sub-details">
                <p><b>Native Name: </b>${Object.values(data[0].name.nativeName)[0].common}</p>
                <p><b>Population: </b>${data[0].population}</p>
                <p><b>Region: </b>${data[0].region}</p>
                <p><b>Sub Region: </b>${data[0].subregion}</p>
                <p><b>Capital: </b>${data[0].capital}</p>
                <p><b>Currencies: </b>${Object.values(data[0].currencies)[0].name}</p>
                <p><b>Languages: </b>${Object.values(data[0].languages)}</p>
            </div>
            <div class="neighbours">
                <b>Border-countries:</b>
                

            </div>
            
        </div>`;
        hero.innerHTML=heroHTML;
        const neighbour=document.querySelector('.neighbours');
        data[0].borders.forEach(element => {
            const neig=document.createElement('a');
            fetch(`https://restcountries.com/v3.1/alpha?codes=${element}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                let name=data[0].name.common;
                neig.innerHTML=name;
                neig.href= `/country.html?name=${encodeURIComponent(name)}`;
            })
            neighbour.appendChild(neig);
        });

  })


