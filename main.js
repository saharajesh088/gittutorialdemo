function saveToStorage(event){
    event.preventDefault();
    let name = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);


}