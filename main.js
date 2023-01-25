function saveToStorage(event){
    event.preventDefault();
    let name = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    let obj = {
        name:name,
        email:email
    }
    let objSerialization = JSON.stringify(obj);
    localStorage.setItem("myObj",objSerialization);
    let objDeserialization = JSON.parse(localStorage.getItem("myObj"));
}