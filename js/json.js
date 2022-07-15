function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => display(data));
}


// const loadComment = Comments => {
//     Comments.forEach(comment => {
//         const commentContainer = document.getElementById('comment-container');
//         const div = document.createElement('div');
//         div.innerHTML = `<p>Nadim</p>`
//         commentContainer.appendChild(div)
//     })
// }

// function display(data) {
//     for (const comment of data) {
//         const commentContainer = document.getElementById('comment-container');
//         const div = document.createElement('div');
//         div.innerHTML = `${comment.name}`
//         commentContainer.appendChild(div)
//     }
// }

const display = comments => {
    comments.forEach(comment => {
        const commentContainer = document.getElementById('comment-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="details()">Nadim</button>
        <p>Name:${comment.name}</p>
        
        `
        commentContainer.appendChild(div)

        // console.log(comment)
    })
}
// 
const details = detail => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
        .then(res => res.json())
        .then(data => detailBycomments(data))
    // console.log(detail)
}
function detailBycomments(details) {
    const commentContainerDetails = document.getElementById('details');
    for (const detail of details) {
        const div = document.createElement('div');
        div.innerHTML = `<p>${detail.postId}</p>`
        commentContainerDetails.appendChild(div);
        // console.log(detail.id)
    }


    // console.log(details)
}

// function nadimButton(nadims) {
//     for (const nadim of nadims) {
//         const commentContainer = document.getElementById('comment-container');
//         const p = document.createElement('p');
//         p.innerText = `${nadim.name}`;
//         commentContainer.appendChild(p);
//         // console.log(nadim)
//     }

//     // console.log('bbbb')
// }