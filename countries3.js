const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
   // .then(data => console.log(data))
}

const displayCountries = countries => {
    //console.log(countries);//all array
    const countriesContainer = document.getElementById('all-countries');
    countries.forEach(country => {
       // console.log(country);//each element of array
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3> name: ${country.name.common} </h3>
        <p> capital: ${country.capital ? country.capital[0]: 'no capital here'} </p> 
       <button onclick = "loadCountryDetails('${country.cca2}')">details </button>
        `
        ;
        countriesContainer.appendChild(countryDiv);
    }) 

}
const loadCountryDetails = code =>{
    //console.log(code);
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
   // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
    //.then(data => console.log(data[0]));
}
const showCountryDetails = country =>{
   // console.log(country);
    const detailsContainer = document.getElementById('country-detail')
   detailsContainer.innerHTML = `
   <h3> name: ${country.name.common} </h3>
   <img src="${country.flags.png}">
   
   `
}
loadCountries();