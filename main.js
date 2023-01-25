function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phoneNumber = event.target.phonenumber.value;
  // localStorage.setItem('name',name);
  // localStorage.setItem('email',email);
  // localStorage.setItem('phonenumber', phoneNumber)

  const obj = {
    name,
    email,
    phoneNumber,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
  const parentELem = document.getElementById("listOfItems");
  const childELem = document.createElement("li");
  childELem.textContent = obj.name + "-" + obj.email + "-" + obj.phoneNumber;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(obj.email);
    parentELem.removeChild(childELem);
  };
  childELem.appendChild(deleteButton);
  parentELem.appendChild(childELem);
  //parentELem.innerHTML = '<li> $(obj.name) - $(obj.email) - $(obj.phoneNumber)</li>'
}
