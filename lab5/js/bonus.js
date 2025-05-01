let tableBody = document.querySelector("#tableBody");
let todo_Text = document.querySelector("#todo");
let tableData = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

function addtodo() {
  let text = todo_Text.value;
  let toadd = {
    checked: false,
    task: text,
  };
  tableData.push(toadd);
  update_db();
}

function removetodo(index) {
  tableData.splice(index, 1);
  update_db();
}

function updatetodo(event, index) {
  tableData[index].checked = event.target.checked;
  update_db();
}

function update_db() {
  localStorage.setItem("todo", JSON.stringify(tableData));
  reRender();
}

function reRender() {
  let results = "";
  tableData.forEach((todoo, index) => {
    let checked = "";
    let cstyle = "";
    if (todoo.checked) {
      checked = "checked";
      cstyle = "ischecked";
    }

    results += `
    <tr>
    <td><input type="checkbox" ${checked} onclick="updatetodo(event, ${index})"></td>
    <td class="${cstyle}">${todoo.task}</td>
        <td>
            <span class="delbtn" onclick="removetodo(${index});"><i class="fa-solid fa-trash"></i></span>
        </td>
    <tr>
      `;
  });
  tableBody.innerHTML = results;
}

reRender();
