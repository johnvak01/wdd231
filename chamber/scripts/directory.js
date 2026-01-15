const url = 'data/members.json';
const cards = document.querySelector('#cards');

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
        let memberWebsite = document.createElement("h3");
        let memberTier = document.createElement("h3");
        let memberImage = document.createElement("img");
        
        card.classList.add("card-member");

        memberName.textContent = `${member.name}`;
        let address = member.adresses[0]
        memberAddress.textContent = `${address}`;
        memberPhone.textContent = `${member.phone}`;
        memberWebsite.textContent = `${member.url}`;
        memberTier.textContent = `${member.tier}`;

        memberImage.setAttribute("src",member.image);
        memberImage.setAttribute("alt", `Logo of ${member.name}`);
        memberImage.setAttribute("loading","lazy");
        memberImage.setAttribute("width", "340");
        memberImage.setAttribute("height","440");
        


        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(memberPhone);
        card.appendChild(memberWebsite);
        card.appendChild(memberTier);
        card.appendChild(memberImage);
        cards.appendChild(card);    
    });
}

getMembersData();