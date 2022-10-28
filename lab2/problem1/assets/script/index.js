const nameCheck = document.getElementById("name");
const emailCheck = document.getElementById("email");
const phoneNumberCheck = document.getElementById("mobile");
const addButton = document.getElementById("addContactButton");
const errorDiv = document.getElementById("error");
const mainTable = document.getElementById("mainTable");

let info = [];
let validEmail = false;
let validPhone = false;
let validName = false;

let nameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
let emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phoneRegex = /[0-9]/;

function checkName(checkname) {
  if (checkname.length > 20 || !nameRegex.test(checkname)) {
    console.log("Name error"); // keep form from submitting
    // errorDiv.innerHTML = "Wrong input Format";
    return false;
  } else {
    console.log("Name working");
    return true;
  }
}

function checkEmail(checkemail) {
  if (checkemail.length > 40 || !emailRegex.test(checkemail)) {
    console.log("Email error");
    return false;
    // errorDiv.innerHTML = "Wrong input Format";
  } else {
    console.log("Email working");
    return true;
  }
}

function checkPhone(checkphone) {
  if (checkphone.length != 10 || !phoneRegex.test(checkphone)) {
    console.log("Phone error");
    return false;
    // errorDiv.innerHTML = "Wrong input Format";
  } else {
    console.log("Phone working");
    return true;
  }
}

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    checkName(nameCheck.value) &&
    checkPhone(phoneNumberCheck.value) &&
    checkEmail(emailCheck.value)
  ) {
    info.push({
      name: nameCheck.value,
      phoneNumber: phoneNumberCheck.value,
      email: emailCheck.value,
    });
    console.log("everything working");
    nameCheck.value = "";
    phoneNumberCheck.value = "";
    emailCheck.value = "";

    console.log(
      "test",
      nameCheck.value,
      phoneNumberCheck.value,
      emailCheck.value
    );
  } else {
    errorDiv.innerHTML = "Wrong input Format";
  }
  console.log(info);
  displayTable(info);
});

function displayTable(info) {
  const userValues = document.createElement("tr");
  for (let i = 0; i < info.length; i++) {
    userValues.classList.add("userValue");
    userValues.innerHTML = `
        <td>${info[i].name}</td>
        <td>${info[i].phoneNumber}</td>
        <td>${info[i].email}</td>
    `;
    mainTable.appendChild(userValues);
  }
}
