
// first we get all the major element from the html file 


const form = document.querySelector("#form");
const inputField = document.querySelectorAll(".input_field");
const submitButton = document.querySelector("#submit");
let newData = document.querySelector("tbody");



form.addEventListener("submit",
    displayData =(e)=>{
        e.preventDefault();
        
        
        // form data 
        
        const studentName = document.querySelector("#student_name").value;
        const studentId = document.querySelector("#student_id").value;
        const email = document.querySelector("#email").value;
        const contactNo = document.querySelector("#contact").value;
        
        
        let localData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
        

        localData.push(
            {
            "name":studentName,
            'id':studentId,
            "email":email,
            "contact":contactNo,
        })

        localStorage.setItem("userDetails",JSON.stringify(localData));



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
                  <td><button class="resetBtn">Reset</button></td>
                  <td><span onclick='removeData(${i})'>&times;<span></span></td>
                </tr>`;
                
            });
            console.log(finaData)
            newData.innerHTML = finaData;

            
        }

        function removeData(index){

            alert(index);
            let localData = JSON.parse(localStorage.getItem("userDetails"));
            localData.splice(index,1);


            localStorage.setItem("userDetails",JSON.stringify(localData));
            storageData();

        }
        




        storageData();
       
        





        
        form.reset();

        
        
        
        
        
        }
);









