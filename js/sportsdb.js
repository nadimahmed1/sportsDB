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
        // div.classList.add('col-md-6')
        // div.classList.add('mb-4')


        div.innerHTML = `
        <div class="card border m-auto p-5">
                        <div class="pro-pic">
                            <img class="w-50" src="${player.strThumb}" alt="">
                        </div>
                        <h2 class ="px-5">${player.strPlayer}</h2>
                        <h5 class ="px-5">${player.strNationality}</h5>
                        <p></p>
                        <div class="allbutton px-5">
                            <button class="btn btn-danger">Delete</button>
                            <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                        </div>
                    </div>
        `
        divContainer.appendChild(div)
    }
}
const details = (info) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
}

const setDetails = (info) => {
    document.getElementById('details-container').innerHTML = `
   <div>
   <img class="w-50" src="${info.strThumb}" alt="">
   <h1>Name: ${info.strPlayer}</h1>
   </div>

   `
}

