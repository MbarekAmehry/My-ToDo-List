const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.querySelector(".ul");
const edit = document.querySelector(".fa-pencil");

// *************** add To do ***************
function addToDo() {
  //if input isn't empty
  if (input.value !== "") {
    const item = `
    <li>
    <div class="left">
    <div class="check_task">
    <i
        id="circle"
        class="fa fa-check-circle-o"
        aria-hidden="true"
        job="complete"
        ></i>
        <p class="text uncheck" contenteditable="false">${input.value}</p>
        </div>
  </div>
  <div class="right">
  <i class="fa fa-check" aria-hidden="true"></i>
  <i class="fa fa-pencil" aria-hidden="false"></i>
    <i class="fa fa-trash-o" ></i>
    </div>
    </li>
    `;
    ul.insertAdjacentHTML("afterbegin", item);

    input.value = "";
  } else if (input.value == "") {
    return;
  }
}

// *************** add to do when Enter button is clicked ***************
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const inputValue = input.value;

    //if input isn't empty
    if (inputValue !== "") {
      addToDo();
    } else if (inputValue == "") {
      return;
    }
  }
});

// add to do when ADD button is clicked
btn.addEventListener("click", addToDo);

// *************** remove To Do ***************
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-o")) {
    e.target.parentElement.parentElement.remove();
  }
});

// *************** Set To Do as COMPLETED ***************
ul.addEventListener("click", (event) => {
  const element = event.target;
  const circle = element.id;

  if (circle == "circle") {
    element.classList.toggle("fa-check-circle");
    element.classList.toggle("fa-check-circle-o");
    element.nextElementSibling.classList.toggle("check");
  } else return;
});

//*************** Edit Task ***************
ul.addEventListener("click", (el) => {
  // paragraph (its looks to much but it works lol)
  let paraAtt =
    el.target.parentElement.previousElementSibling.firstElementChild
      .lastElementChild;

  if (el.target.classList.contains("fa-pencil")) {
    // make text editable
    paraAtt.setAttribute("contenteditable", "true");

    // ** show check btn
    el.target.previousElementSibling.style.display = "initial";
    // ** hide Pencil (edit)
    el.target.style.display = "none";
  } else if (el.target.classList.contains("fa-check")) {
    paraAtt.setAttribute("contenteditable", "false");
    // hide check btn
    el.target.style.display = "none";
    // ** show Pencil
    el.target.nextElementSibling.style.display = "initial";
  }
});
