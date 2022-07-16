const loadSports = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
}

const displayPlayers = (players) => {

    for (const player of players) {
        console.log(player)
        const divContainer = document.getElementById('div-container');
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('mb-4')


        div.innerHTML = `
        <div class="card border p-5">
            <div class="pro-pic">
                <img class="w-25" src="" alt="">
            </div>
                <h2>${player.strPlayer}</h2>
                <h5>Country:</h5>
                <p></p>
            <div class="allbutton">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-success">Details</button>
            </div>
        </div>
        `
        divContainer.appendChild(div)
    }
}

