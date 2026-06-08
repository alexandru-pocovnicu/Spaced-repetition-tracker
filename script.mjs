import { getUserIds } from "./common.mjs";
const users = getUserIds();
window.onload = function () {
  addUsersToDropdown();
};

function addUsersToDropdown() {
  const usersDropdown = document.getElementById("users-dropdown");
  for (const user of users) {
    const option = document.createElement("option");
    option.innerText = `User ${user}`;
    option.value = user;
    usersDropdown.append(option);
  }
}
