
const title = document.getElementById("article-title");
const sub_title = document.getElementById("article-sub-title");
const author = document.getElementById("article-author");
const content = document.getElementById("article-content");

function saveEntry() {
    // load localstorage
    let articles = JSON.parse(localStorage.getItem("entry_data"));
    console.log(articles);

    if (articles == null) {
        articles = { "data": [] };
    }
    // Save the Article
    // set ID 
    let id = 0;
    for (let x = 0; x < articles.data.length; x++) {
        if (id < articles.data[x].id) {
            break;
        } else {
            id++;
        }
    }
    const id_number = document.getElementById("id-number");
    id_number.value = id;
    // // get other elements of the form


    let new_entry = {
        "id": id,
        "title": title.value,
        "sub_title": sub_title.value,
        "author": author.value,
        "content": content.value
    }
    // save to localstorage 
    articles.data.push(new_entry);
    localStorage.setItem("entry_data", JSON.stringify(articles));

    // alter form to pass only the ID number to Browse page

    return true;
}

function hideModal() {
    const modal = document.querySelector("dialog");
    modal.close();
    modal.innerHTML = "";
}
function PreviewEntry() {
    console.log("preview");
    const modal = document.querySelector("dialog");
    const modal_title = document.createElement("h2");
    const modal_sub_title = document.createElement("h3");
    const modal_author = document.createElement("h4");
    const modal_content = document.createElement("p");
    const modal_close = document.createElement("div");

    modal_title.textContent = title.value;
    modal_sub_title.textContent = sub_title.value;
    modal_author.textContent = author.value;
    modal_content.textContent = content.value;

    modal.appendChild(modal_title);
    modal.appendChild(modal_sub_title);
    modal.appendChild(modal_author);
    modal.appendChild(modal_content);

    modal_close.innerText = "X";
    modal_close.setAttribute("id", "modal-close");
    modal_close.addEventListener("click", () => { hideModal(); });
    modal.appendChild(modal_close);

    modal.showModal();
}

const preview = document.getElementById("button-preview");
preview.addEventListener("click", () => {
    console.log("test");
    PreviewEntry();
});