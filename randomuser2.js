//random user

const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => displaUer(data))
}

const displaUer = user =>{
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    console.log(user.results[0].gender);

    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
}

loadUser();