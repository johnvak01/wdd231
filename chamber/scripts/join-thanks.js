const parameters = new URLSearchParams(window.location.search);

const company_name = document.createElement('h3');
const org_description = document.createElement('p');
const tier = document.createElement('p');
const contact = document.createElement('p');
const phone = document.createElement('p');
const email = document.createElement('p');

company_name.innerText=`${parameters.get('org-name')}`;
org_description.innerText=`${parameters.get('org-description')}`;
tier.innerText=`Tier: ${parameters.get('tier')}`;
contact.innerText=`Contact: ${parameters.get('name-first')} ${parameters.get('name-first')}, ${parameters.get('title-position')}`;
phone.innerText=`Phone: ${parameters.get('phone')}`;
email.innerText=`Email: ${parameters.get('email')}`;

const join_card = document.getElementById('join-thanks');

join_card.appendChild(company_name);
join_card.appendChild(org_description);
join_card.appendChild(tier);
join_card.appendChild(contact);
join_card.appendChild(phone);
join_card.appendChild(email);