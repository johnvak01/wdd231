const learn_np = document.querySelector(".np-tier .learn-more-button");
const learn_bronze = document.querySelector(".bronze-tier .learn-more-button");
const learn_silver = document.querySelector(".silver-tier .learn-more-button");
const learn_gold = document.querySelector(".gold-tier .learn-more-button");

learn_gold.addEventListener("click",()=>{showModal(1);});
learn_silver.addEventListener("click",()=>{showModal(2);});
learn_bronze.addEventListener("click",()=>{showModal(3);});
learn_np.addEventListener("click",()=>{showModal(4);});
    
async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

async function showModal(tier){
    const modal = document.querySelector("dialog");
    console.log("test") ;
    const modal_data = await apiFetch("data/member-tiers.json");
    console.log(modal_data.data[0].tier_name);
    let modal_header = document.createElement("h2");
    let modal_cost = document.createElement("p");
    let modal_benefits = document.createElement("p");
    let modal_close = document.createElement("div");
    modal_header.innerText=`${modal_data.data[tier-1].tier_name} Tier`;
    modal_cost.innerText=`$${modal_data.data[tier-1].cost_per_month} per Month`;
    modal_benefits.innerText=`Benefits: ${modal_data.data[tier-1].benefits}`;
    modal_close.innerText="X";
    modal_close.setAttribute("id","close");
    modal_close.addEventListener("click",()=>{hideModal();});

    modal.appendChild(modal_header);
    modal.appendChild(modal_cost);
    modal.appendChild(modal_benefits);
    modal.appendChild(modal_close);


    modal.showModal();
}
function hideModal(){
    const modal = document.querySelector("dialog");
    modal.close();
    modal.innerHTML="";
}

let now = moment().format('YYYY-MM-DD HH:mm:ss');
document.getElementById("timestamp").value = now;



