let result = document.getElementById("result");
let filter = document.getElementById("filter");
let listItems = [];

async function getUsers() {
    let data = await fetch("https://randomuser.me/api/?results=50&&gender=male");
    let response = await data.json();
    let finalResults = await response.results;
    listItems = finalResults;
    console.log(listItems);
    result.innerHTML = ``;
    listItems.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <li>
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user_info">
                    <h4>${user.name.title}.${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                </div>
            </li>
        `;
        result.append(li);
    }) 
}
getUsers();
filter.addEventListener("input",(e) => {
    filterUsers(e.target.value)
});

function filterUsers(value) {
    document.querySelectorAll("li").forEach(user => {
       if(user.innerText.toLowerCase().includes(value.toLowerCase())) {
        user.classList.remove("hide");
       }
       else {
        user.classList.add("hide");
       }
    })
}