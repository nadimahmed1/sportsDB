const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
loadUsers();

const displayUsers = data => {
    const users = data.results;
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Name: ${user.name.first} ${user.name.last}</h3>
        <p>City: ${user.location.city}
        </p>
        <p>Street: ${user.location.street.name} Postcode: ${user.location.postcode} ${user.name.phone}
        </p>
        <img src="${user.picture.large}" alt="">
        
        `
        userContainer.appendChild(div)
        // console.log(user.picture.thumbnail)
    }
    console.log(users)
}
