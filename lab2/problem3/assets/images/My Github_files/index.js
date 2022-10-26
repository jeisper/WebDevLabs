const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");
const profileImage = document.getElementById("profileImage");
const nameUser = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const location1 = document.getElementById("location");
const repoN = document.getElementById("repoN");
const userRepoList = document.getElementById("repoList");

let listOfRepo = [];

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("working");
  getData("jeisper");
  getRepoData("jeisper");
});

function getData(user) {
  let request = new XMLHttpRequest();
  const url = `https://api.github.com/users/${user}`;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getResult(response);
    }
  };
  request.open("GET", url, true);
  request.send();

  function getResult(result) {
    const data = result;

    console.log(result);
    profileImage.src = data.avatar_url;
    nameUser.innerHTML = "Name: " + data.name;
    username.innerHTML = "Username: " + data.login ?? "No Data";
    email.innerHTML = "Email: " + data.email ?? "No Data";
    location.innerHTML = "Location: " + data.location ?? "No Data";
    repoN.innerHTML = "Repositories Number: " + data.public_repos ?? "No Data";
  }
}

const getRepoData = (user) => {
  let request = new XMLHttpRequest();
  const url = `https://api.github.com/users/${user}/repos`;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getResultRepo(response);
    }
  };
  request.open("GET", url, true);
  request.send();

  function getResultRepo(result) {
    const listOfRepo = result;
    userRepoList.innerHTML = "";
    repo = "";

    listOfRepo.forEach((singleRepo) => {
      repo += `<div class="singleRepo">
      <div class="singleRepoName">Name: ${singleRepo.name}</div>
      <p class="singleRepoDesc">Description: ${
        singleRepo.description ?? "No Description"
      }</p>
  </div>
  `;
    });

    userRepoList.innerHTML = repo;
  }
};
