function addPost() {

    let title = document.getElementById("title").value;

    let content = document.getElementById("content").value;

    let posts = document.getElementById("posts");

    posts.innerHTML += `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
}