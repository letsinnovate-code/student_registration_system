
// first we get all the major element from the html file 


const form = document.querySelector("#form");

const submitButton = document.querySelector("#submit");
let newData = document.querySelector("tbody");



let editIndex = -1;

// using a eventlistener on a form to submit a data 
form.addEventListener("submit",
    displayData =(e)=>{
        e.preventDefault();
        
        
        // get the value of input fields by using the querySelector 
        const studentName = document.querySelector("#student_name").value;
        const studentId = document.querySelector("#student_id").value;
        const email = document.querySelector("#email").value;
        const contactNo = document.querySelector("#contact").value;
        
        
        // accesing the data form the localstorage to add data into the table 
        let localData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

// this if is used becouse if we want to edit the data first editIndex 
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
    
        // adding the data inside the localstorage to store the data and to access data after closing the tab or refresh the page
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
          <td><button onclick='removeData(${i})'>Delete</button></td>
        </tr>`;
        
    });
    
    newData.innerHTML = finaData;

    
};
// here when we click on the button and then we accese the data of perticular index and  all the values of that perticular index will assign to the input field 


function editData(index){
    let localData = JSON.parse(localStorage.getItem("userDetails"));

    

    studentName.textContent =localData[index].name;
    studentId.textContent=localData[index].id;
    email.textContent=localData[index].email;
    contactNo.textContent=localData[index].contact;
// value of index  will assign to editIndex form -1
    editIndex = index;
};


function removeData(index){

   
    let localData = JSON.parse(localStorage.getItem("userDetails"));
    localData.splice(index,1);

    localStorage.setItem("userDetails",JSON.stringify(localData));
    storageData();
    

};

// it is used to prevent the display data deleting after refresh the page
document.addEventListener("DOMContentLoaded",storageData);







