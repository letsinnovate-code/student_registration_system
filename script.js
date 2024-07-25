
// first we get all the major element from the html file 


const form = document.querySelector("#form");
const inputField = document.querySelectorAll(".input_field");
const submitButton = document.querySelector("#submit");



form.addEventListener("submit",
    function displayData(e){
        e.preventDefault();
        
        console.log("button clicked")
        // form data 
        
        const studentName = document.querySelector("#student_name").value;
        const studentId = document.querySelector("#student_id").value;
        const email = document.querySelector("#email").value;
        const contactNo = document.querySelector("#contact").value;
        
        
        
        
        const  oldTable = document.querySelector("table tbody");
        
        let newRow = document.createElement('tr');
        

        let nameCell =document.createElement('td');
        nameCell.textContent = studentName;
        newRow.appendChild(nameCell);


        let idCell =document.createElement('td');
        idCell.textContent = studentId;
        newRow.appendChild(idCell);


        let emailCell =document.createElement('td');
        emailCell.textContent = email;
        newRow.appendChild(emailCell);



        let contactCell =document.createElement('td');
        contactCell.textContent = contactNo;
        newRow.appendChild(contactCell);
        

        let editCell = document.createElement("td");
        let editButton = document.createElement("button");
        editButton.textContent ="Edit";
        editButton.className = "edit-btn"
        editCell.appendChild(editButton);
        newRow.appendChild(editCell);


        editButton.addEventListener("click", function(){
            let cells = newRow.querySelectorAll("td");

            let nameCell = cells[0];
            let idCell = cells[1];
            let emailCell = cells[2];
            let contactCell = cells[3];

            const studentName = document.querySelector("#student_name");
            const studentId = document.querySelector("#student_id");
            const email = document.querySelector("#email");
            const contactNo = document.querySelector("#contact");

            let currentName = nameCell.textContent;
            studentName.textContent = currentName;
            
            let currentId = idCell.textContent;
            studentId.textContent = currentId;


            let currentEmail =emailCell.textContent;
            email.textContent = currentEmail;

            let currentContact= contactCell.textContent;
            contactNo.textContent =contactCell;


            console.log(currentName , currentId ,currentEmail, currentContact)



            nameCell.innerHTML = `<input type ="text" value="${currentName}"`;
            idCell.innerHTML = `<input type ="number" value="${currentId}"`;
            emailCell.innerHTML = `<input type ="email" value="${currentEmail}"`;
            contactCell.innerHTML = `<input type ="number" value="${currentContact}"`;
        
            
        })
        





        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn"
        deleteButton.textContent ="Delete";
        deleteCell.appendChild(deleteButton);
        newRow.appendChild(deleteCell);


        deleteButton.addEventListener("click",function(){

            newRow.remove();
        })




        oldTable.appendChild(newRow);


        
        form.reset();

        
        
        
        
        
        }
);









