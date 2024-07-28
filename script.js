
// first we get all the major element from the html file 


const form = document.querySelector("#form");

const submitButton = document.querySelector("#submit");
let newData = document.querySelector("tbody");



let editIndex = -1;
form.addEventListener("submit",
    displayData =(e)=>{
        e.preventDefault();
        
        
        // form data 
        const studentName = document.querySelector("#student_name").value;
        const studentId = document.querySelector("#student_id").value;
        const email = document.querySelector("#email").value;
        const contactNo = document.querySelector("#contact").value;
        
        
        
        let localData = JSON.parse(localStorage.getItem("userDetails")) ?? [];


        if(editIndex=== -1){
            localData.push(
                {
                "name":studentName,
                'id':studentId,
                "email":email,
                "contact":contactNo,
            });
        }else {
            localData[editIndex]={
                "name":studentName,
                'id':studentId,
                "email":email,
                "contact":contactNo,
            }
            editIndex = -1;
        }
    
        
        localStorage.setItem("userDetails",JSON.stringify(localData));
        storageData();

        
        


       

         form.reset();

        }
);


let storageData = ()=>{
    let localData = JSON.parse(localStorage.getItem("userDetails"));
    
    let finaData="";
    localData.forEach((element,i) => {
        finaData += `
          <tr>
          <td>${element.name}</td>
          <td>${element.id}</td>
          <td>${element.email}</td>
          <td>${element.contact}</td>
          <td><button onclick='editData(${i})' >Edit</button></td>
          <td><span onclick='removeData(${i})'>&times;<span></span></td>
        </tr>`;
        
    });
    
    newData.innerHTML = finaData;

    
};

function editData(index){
    let localData = JSON.parse(localStorage.getItem("userDetails"));

    let studentName = document.querySelector("#student_name").value;
    let studentId = document.querySelector("#student_id").value;
    let email = document.querySelector("#email").value;
    let contactNo = document.querySelector("#contact").value;

    studentName=localData[index].name;
    studentId=localData[index].id;
    email=localData[index].email;
    contactNo=localData[index].contact;

    editIndex = index;
};


function removeData(index){

   
    let localData = JSON.parse(localStorage.getItem("userDetails"));
    localData.splice(index,1);

    localStorage.setItem("userDetails",JSON.stringify(localData));
    storageData();
    

};


document.addEventListener("DOMContentLoaded",storageData);







