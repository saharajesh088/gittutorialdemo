function saveToStorage(event){
    event.preventDefault();
    let form = document.getElementById('form');
    let name = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let obj = {
        name:name,
        email:email
    }
    let objSerialization = JSON.stringify(obj);
    localStorage.setItem(obj.email,objSerialization);

    Object.keys(localStorage).forEach((key)=>{
        console.log(JSON.parse(localStorage.getItem(key)));
    });
    userDetailsOnScreen(obj);

}
function userDetailsOnScreen(user){
    let items = document.getElementById("listOfItems");
    let childHtml = `<li> ${user.name} - ${user.email} </li>`;
    items.innerHTML = items.innerHTML + childHtml;
    items.appendChild(li);

}