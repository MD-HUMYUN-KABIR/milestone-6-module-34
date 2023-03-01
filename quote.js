const loadQoute = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    //.then(data => console.log(data))
    //.then(data => console.log(data.quote))
    .then(data => displayQoute(data))
}

const displayQoute = quote =>{
    const blockQuote = document.getElementById('quote');
    console.log(blockQuote);
    blockQuote.innerHTML = quote.quote;
}



//////////////////////////////////////
console.log(`00${7+1+2}`);

const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
console.log(data.result[0].userName.name)
const p=[1,2,3]; const q=p.map( n=> Math.pow(n, 3));
console.log(q);

/* const path = "https://www.images.com/cat.jpg"; 

const div= document.createElement('div');
div.innerHTML = `<img src=${path} alt = "">`;
console.log(div); */

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));

`<div onclick="loaddetail('${name}')"></div>`