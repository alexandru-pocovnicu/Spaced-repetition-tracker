import { getUserIds } from "./common.mjs";
const users = getUserIds();
let usersDropdown;

window.onload = function () {
  usersDropdown = document.getElementById("users-dropdown");
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
}
