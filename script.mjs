import { getUserIds } from "./common.mjs";
import { getData } from "./storage.mjs";
const users = getUserIds();
let usersDropdown;
let message;
let agendaList
window.onload = function () {
  usersDropdown = document.getElementById("users-dropdown");
  message = document.getElementById("message");
  agendaList=document.getElementById("agenda-list")
  addUsersToDropdown();
  usersDropdown.addEventListener("change", selectedUser);
};

function addUsersToDropdown() {
  for (const user of users) {
    const option = document.createElement("option");
    option.innerText = `User ${user}`;
    option.value = user;
    usersDropdown.append(option);
  }
}

function selectedUser() {
  const selectedUserId = usersDropdown.value;
  if (selectedUserId === "") {
    message.hidden = true;
    return;
  }
  const userAgenda = getData(selectedUserId) || [];
  if (userAgenda.length === 0) {
    message.hidden = false;
  } else {
    message.hidden = true;
    displayAgenda(userAgenda)
  }
}

function displayAgenda(userAgenda){
  agendaList.innerHTML=""
  for(const item of userAgenda){
    const listItem=document.createElement("li")
    listItem.innerText=item
    agendaList.append(listItem)
  }
}
