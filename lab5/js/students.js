let student_list = localStorage.getItem("studs")
  ? JSON.parse(localStorage.getItem("studs"))
  : [];
let stud_name = document.querySelector("#stud_name");
let stud_grade = document.querySelector("#stud_grade");
let stud_dep = document.querySelector("input[name='stud_dep']");
let stud_table = document.querySelector("#student-table");
let errorPanel = document.querySelector("#errorPanel");

function addStud(event) {
  event.preventDefault();
  errorPanel.style.display = "none";

  if (/^.{3,}$/.test(stud_name.value) === false) {
    return displayError(
      "Student name should be not be empty and atleast 3 characters"
    );
  }

  if (!/^(100|[1-9]?[0-9])$/.test(stud_grade.value)) {
    return displayError("Student grade must be a number between 0 and 100");
  }

  if (
    student_list.some(
      (obj) => obj.stud_name.toLowerCase() === stud_name.value.toLowerCase()
    )
  ) {
    return displayError("Student name already exists");
  }

  let stud_obj = {
    stud_name: stud_name.value[0].toUpperCase() + stud_name.value.slice(1),
    stud_grade: stud_grade.value,
    stud_dep: stud_dep.value,
  };
  student_list.push(stud_obj);
  updateStorage();
}

function delStud(index) {
  student_list.splice(index, 1);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem("studs", JSON.stringify(student_list));
  reRender();
}

function reRender(stud_list = student_list, force = false) {
  let stud_data = "";

  stud_list.forEach((stud, index) => {
    stud_data += `<tr>
    <td>${stud.stud_name}</td>
    <td>${stud.stud_grade}</td>
    <td>
        <span class="delbtn" onclick="delStud(${index});"><i class="fa-solid fa-trash"></i></span>
    </td></tr>`;
  });

  stud_table.innerHTML = stud_data;
  if (force === false) {
    filter();
    studSort();
  }
}

let filterBtn = document.querySelector("#filterBtn");
function filter() {
  let grade = filterBtn.value;
  let vstudent_list = student_list.filter((stud) => {
    switch (grade) {
      case "all":
        return true;

      case "failed":
        if (stud.stud_grade < 60) {
          return true;
        }
        break;

      case "success":
        if (stud.stud_grade >= 60) {
          return true;
        }
        break;
      default:
        return false;
    }
  });
  reRender(vstudent_list, true);
}

let sortBtn = document.querySelector("#sortBtn");
function studSort() {
  let sortType = sortBtn.value;
  student_list = student_list.sort((a, b) => {
    switch (sortType) {
      case "name":
        return a.stud_name.localeCompare(b.stud_name);

      case "grade":
        return a.stud_grade - b.stud_grade;

      default:
        return 0;
    }
  });
  reRender(student_list, true);
}

function displayError(msg) {
  errorPanel.style.display = "block";
  errorPanel.innerHTML = msg;
  return false;
}

function validateGrade(e) {
  if (!/^[0-9.]+$/.test(e.key)) {
    e.preventDefault();
  }
}

reRender();
