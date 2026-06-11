import { getUserIds } from "./common.mjs";
import { getData, addData } from "./storage.mjs";
const users = getUserIds();
let usersDropdown;
let message;
let agendaList;
let topicForm;
let topicName;
let revisionDate;
window.onload = function () {
  usersDropdown = document.getElementById("users-dropdown");
  message = document.getElementById("message");
  agendaList = document.getElementById("agenda-list");
  topicForm = document.getElementById("topic-form");
  topicName = document.getElementById("topic-name");
  revisionDate = document.getElementById("revision-date");
  addUsersToDropdown();
  usersDropdown.addEventListener("change", selectedUser);
  topicForm.addEventListener("submit", formSubmit);
};

function formSubmit(event) {
  event.preventDefault();
  const selectedUserId = usersDropdown.value;

  const topic = topicName.value.trim();
  if (topic.length < 3) {
    alert("Please enter a valid topic with a minimum of 3 characters");
    return;
  }

  const date = revisionDate.value;

  const agendaItems = createAgendaItem(topic, date);
}

function createAgendaItem(topic, startDate) {
  const date = new Date(startDate);
  const oneWeek = new Date(date);
  oneWeek.setDate(oneWeek.getDate() + 7);

  const oneMonth = new Date(date);
  oneMonth.setMonth(oneMonth.getMonth() + 1);

  const threeMonths = new Date(date);
  threeMonths.setMonth(threeMonths.getMonth() + 3);

  const sixMonths = new Date(date);
  sixMonths.setMonth(sixMonths.getMonth() + 6);

  const oneYear = new Date(date);
  oneYear.setFullYear(oneYear.getFullYear() + 1);

  return [
    {
      topic: topic,
      date: oneWeek,
    },
    {
      topic: topic,
      date: oneMonth,
    },
    {
      topic: topic,
      date: threeMonths,
    },
    {
      topic: topic,
      date: sixMonths,
    },
    {
      topic: topic,
      date: oneYear,
    },
  ];
}

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
    topicForm.hidden = true;
    agendaList.innerHTML = "";
    return;
  }
  const userAgenda = getData(selectedUserId) || [];
  if (userAgenda.length === 0) {
    message.hidden = false;
    agendaList.innerHTML = "";
  } else {
    message.hidden = true;
    displayAgenda(userAgenda);
  }
  topicForm.hidden = false;
}

function displayAgenda(userAgenda) {
  agendaList.innerHTML = "";
  for (const item of userAgenda) {
    const listItem = document.createElement("li");
    listItem.innerText = `${item.topic} - ${item.date}`;

    agendaList.append(listItem);
  }
}
