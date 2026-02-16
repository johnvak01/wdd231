const form_articles = document.getElementById("article-layout");




// // load in Articles

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function loadArticles() {


    form_articles.innerHTML = "";
    // load the two sources of articles
    const parameters = new URLSearchParams(window.location.search);
    const sample_articles = await apiFetch("data/sample-articles.json");
    const saved_articles = JSON.parse(localStorage.getItem("entry_data"));

    console.log(sample_articles);
    console.log(saved_articles);
    // use the two sources and the url searh params to populate the article
    let counter = 1;
    for (const [key, value] of parameters.entries()) {
        const article = document.createElement("article");
        const title = document.createElement("h2");
        const sub_title = document.createElement("h3");
        const author = document.createElement("h4");
        const content = document.createElement("p");
        article.appendChild(title);
        article.appendChild(sub_title);
        article.appendChild(author);
        article.appendChild(content);

        if (key == "select-layout") {
            console.log(value);
            form_articles.classList.add(`layout-${value}`);
            continue;
        } else if (key.includes("samp")) {
            console.log("pull from samples");
            for (const item of sample_articles.articles) {
                if (item.id == key) {
                    console.log("found it");
                    title.innerText = item.title;
                    sub_title.innerText = item.sub_title;
                    author.innerText = `by ${item.author}`;
                    content.innerText = item.content;
                    article.id = `art-${counter}`;
                    break;
                }
            }

            article.classList.add(`art-${counter}`);
            counter++;
            form_articles.appendChild(article);
        } else {
            console.log("pull from localstorage")
            for (const item of saved_articles.data) {
                if (item.id == key) {
                    console.log("test", key);
                    title.innerText = item.title;
                    sub_title.innerText = item.sub_title;
                    author.innerText = `by ${item.author}`;
                    content.innerText = item.content;
                    article.id = `art-${counter}`;
                }
            }
            article.id = `art-${counter}`;
            counter++;
            form_articles.appendChild(article);
        }

    }
}
//     form_articles.innerHTML="";
//     const legend = document.createElement("legend");
//     legend.textContent = "Selected Articles";
//     form_articles.appendChild(legend);

//     const sample_articles = await apiFetch("data/sample-articles.json");

//     sample_articles.articles.forEach((article)=>{
//         const label = document.createElement("label");
//         const text = document.createTextNode(`${article.title} - ${article.sub_title}`);
//         const input = document.createElement("input");
//         input.setAttribute("type","checkbox");
//         input.setAttribute("name",`${article.id}`);
//         input.setAttribute("title",`${article.title}`);
//         label.appendChild(input);
//         label.appendChild(text);
//         form_articles.appendChild(label);
//     });
//     const saved_articles = JSON.parse(localStorage.getItem("entry_data"));
//     saved_articles.data.forEach((article)=>{
//         const label = document.createElement("label");
//         const text = document.createTextNode(`${article.title} - ${article.sub_title}`);
//         const input = document.createElement("input");
//         input.setAttribute("type","checkbox");
//         input.setAttribute("name",`${article.id}`);
//         input.setAttribute("title",`${article.title}`);
//         label.appendChild(input);
//         label.appendChild(text);
//         form_articles.appendChild(label);
//     });
// }

// function verifySelection(){
//     const all_checked = document.querySelectorAll(`input:checked`);
//     console.log(all_checked);
//     console.log(all_checked.length);
//     const selection = document.getElementById("select-layout");
//     let selection_difference = selection.value - all_checked.length;


//     if(selection.value==0){
//         alert("Please select a layout");
//         return false;
//     }
//     else if(selection_difference > 0){
//         alert(`Not enough articles selected. Please Select ${selection_difference} more article(s)`);
//         return false;
//     }
//     else if(selection_difference < 0){
//         alert(`Too many articles selected. Please Select ${Math.abs(selection_difference)} fewer article(s)`);
//         return false;
//     }
//     return false;
// }


loadArticles();