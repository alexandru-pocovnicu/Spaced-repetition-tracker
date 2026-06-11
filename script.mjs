import { getUserIds } from "./common.mjs";
import { getData } from "./storage.mjs";
const users = getUserIds();
let usersDropdown;
let message;
window.onload = function () {
  usersDropdown = document.getElementById("users-dropdown");
  message = document.getElementById("message");
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
  }
}
