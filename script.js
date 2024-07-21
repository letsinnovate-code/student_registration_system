
// first we get all the major element from the html file 

const leftContainer = document.querySelector(".left_container");

const form = document.querySelector("#form");
const rightContainer = document.querySelector(".right_container");
const inputField = document.querySelectorAll(".input_field");

const submitButton = document.querySelector("#submit");
const table = document.querySelector("table");
const deleteBtn = document.getElementById("deleteBtn");
const resetBtn = document.getElementById("resetBtn");




// perform

form.addEventListener("submit",addStudentList);


function addStudentList(e){
    e.preventDefault();
   const studentName = document.getElementById('student_name').value;
   const fatherName = document.getElementById("father_name").value;
   const motherName = document.getElementById("mother_name").value;
   const rollno = document.getElementById("roll_no").value;
   const className = document.getElementById("class").value;
   const enrollmentNo = document.getElementById("enrollmentNo").value;



const newRow =document.createElement("tr");



// const newData = document.createElement(td);

table.appendChild(newRow);
newRow.innerHTML= `
<td>${studentName}</td>
<td>${fatherName}</td>
<td>${motherName}</td>
<td>${rollno}</td>
<td>${className}</td>
<td>${enrollmentNo}</td>
<td><button id="resetBtn">Reset</button></td>
<td><button id="deleteBtn">Delete</button></td>


`;

table.addEventListener("click",clear);
function clear(){
    newRow.removeChild("td");

}



  
  
}





