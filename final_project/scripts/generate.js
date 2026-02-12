
function saveEntry() {
    // load localstorage
    let articles = JSON.parse(localStorage.getItem("entry_data"));
    console.log(articles);

    if(articles == null){
        articles={"data":[]};
    }
    // Save the Article
    // set ID 
    let id=0;
    for(let x = 0; x<articles.data.length;x++){
        if(id < articles.data[x].id){
            break;
        }else{
            id++;
        }
    }
    const id_number = document.getElementById("id-number");
    id_number.value = id;
    // // get other elements of the form
    const title = document.getElementById("article-title");
    const sub_title = document.getElementById("article-sub-title");
    const author = document.getElementById("article-author");
    const content = document.getElementById("article-content");
    

    let new_entry = {
        "id": id,
        "title": title.value,
        "sub-title": sub_title.value,
        "author": author.value,
        "content": content.value
    }
    // save to localstorage 
    articles.data.push(new_entry);
    localStorage.setItem("entry_data",JSON.stringify(articles));

    // alter form to pass only the ID number to Browse page

    alert("pause");
    return true;
}