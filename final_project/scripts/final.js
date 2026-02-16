// // const form_articles = document.getElementById("form-articles");
// // load in Articles

// async function apiFetch(url) {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             // console.log(data);
//             return data;
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }

// }

// async function loadArticles(){
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


// loadArticles();