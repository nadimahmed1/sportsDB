const loadSports = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

