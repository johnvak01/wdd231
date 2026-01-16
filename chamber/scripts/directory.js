const url = 'data/members.json';
const cards = document.querySelector('#cards');
const button_list = document.getElementById('button-card-list');
const button_grid = document.getElementById('button-card-grid');


button_list.addEventListener("click",()=>{
   cards.classList.remove("grid-view"); 
   cards.classList.add("list-view"); 
});
button_grid.addEventListener("click",()=>{
   cards.classList.remove("list-view"); 
   cards.classList.add("grid-view"); 
});





async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members)=>{
    members.forEach((member)=>{
        let card = document.createElement("div");
        let memberName = document.createElement("h2");
        let memberAddress = document.createElement("h3");
        let memberPhone = document.createElement("h3");
        let memberWebsiteHeader = document.createElement("h3");
        let memberWebsite = document.createElement("a");
        let memberTier = document.createElement("h4");
        let memberImageContainer = document.createElement("div");
        let memberImage = document.createElement("img");
        
        card.classList.add("card-member");

        memberName.textContent = `${member.name}`;
        let address = member.adresses[0]
        memberAddress.textContent = `${address}`;
        memberPhone.textContent = `${member.phone}`;
        memberWebsite.setAttribute("href", member.url);
        memberWebsite.textContent = `Website Link`;
        memberTier.textContent = `Member Tier: ${member.tier}`;

        memberImageContainer.classList.add("member-card-image");
        memberImage.setAttribute("src",member.image);
        memberImage.setAttribute("alt", `Logo of ${member.name}`);
        memberImage.setAttribute("loading","lazy");
        memberImage.setAttribute("width", "88");
        memberImage.setAttribute("height","88");
        


        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(memberPhone);
        card.appendChild(memberWebsiteHeader);
        memberWebsiteHeader.appendChild(memberWebsite);
        card.appendChild(memberTier);
        card.appendChild(memberImageContainer);
        memberImageContainer.appendChild(memberImage);
        cards.appendChild(card);    
    });
}

getMembersData();

