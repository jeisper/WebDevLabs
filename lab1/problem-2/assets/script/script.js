const deleteButton = document.querySelectorAll(".deleteButton");
const updateButton = document.querySelectorAll(".updateButton");
const addText = document.getElementById("addText");
const todoTextArea = document.getElementById("todoTextArea");
const listOfTodos = document.getElementById("listOfTodos");
const colourBox = document.querySelectorAll(".colours");
const todoColours = ["pink", "babyBlue"];
const codeOfColours = ["rgb(163, 27, 111)", "rgb(12, 217, 244)"];
let colourSelected = 0;
let todos = [];

for (let i = 0; i < colourBox.length; i++) {
  colourBox[i].addEventListener("click", (event) => {
    colourSelected = i;
  });
}

addText.addEventListener("click", () => {
  if (todoTextArea.value === "") {
    return;
  } else {
    todos.push({
      text: todoTextArea.value,
      colour: todoColours[colourSelected],
    });
    todoTextArea.value = "";
    refreshTodos();
  }
});

const refreshTodos = () => {
  let allTheTodos = "";
  todos.forEach((todo, i) => {
    allTheTodos += ` 
    <div class="todo ${todo.colour}">
        <p> 
            ${todo.text}
        </p>
        <div class="buttonDiv">  
            <button class="deleteButton" onclick="deleteTodo(${i})">Delete</button>
            <button class="updateButton onclick="updateTodo(${i})">Update</button>
        </div>
    </div>
  `;
  });
  listOfTodos.innerHTML = allTheTodos;
};

function deleteTodo(pos) {
  let list = [...todos];
  list.splice(pos, 1);
  todos = [...list];
  refreshTodos();
}

function updateTodo(pos) {}
