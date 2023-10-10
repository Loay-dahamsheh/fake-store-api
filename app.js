// Constructor function to create Product objects
function Product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

// Array to store Product objects
const products = [];

// Function to fetch data from the API and create Product objects
function fetchDataAndCreateObjects() {
    // Fetch data from the API endpoint
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Create 20 Product objects from the retrieved data using map() and push them to the products array
            products.push(...data.slice(0, 20).map(item => new Product(item.title, item.price, item.description, item.image)));
            // Render product cards in the main section
            renderProducts();
            // Log products array in the console
            console.log("Products Array:", products);
        })
        .catch(error => {
            // Handle errors during the fetch request or data processing
            console.error('Error fetching data:', error);
        });
}

// Function to render product cards in the main section
function renderProducts() {
    const mainSection = document.getElementById("main-section");

    // Use map() to create product cards and join them into a string
    const productCards = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Price: $${product.price}</strong></p>
        </div>
    `).join('');

    // Set the innerHTML of the main section to the generated product cards
    mainSection.innerHTML = productCards;
}
function deleteProduct(index) {
    products.splice(index, 1); // Remove the product from the array
    renderProducts(); // Re-render the product cards
}

// Function to update a product
function updateProduct(index) {
    const updatedTitle = prompt("Enter updated title:");
    if (updatedTitle) {
        products[index].title = updatedTitle; // Update the product title
        renderProducts(); // Re-render the product cards
    }
}


// Call fetchDataAndCreateObjects() to fetch data and create Product objects when the page loads
window.onload = fetchDataAndCreateObjects;

// document.addEventListener("DOMContentLoaded", function() {
//     const studentForm = document.getElementById("student-form");
//     const studentsContainer = document.getElementById("students-container");
//     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
//     storedStudents.forEach(student => {
//         renderStudentCard(student);
//     });
//     // Constructor function for Student objects
//     function Student(fullName, dob, major, imageUrl) {
//         this.fullName = fullName;
//         this.dob = dob;
        
//         this.major = major;
//         this.imageUrl = imageUrl;
        
//     }

//     // Function to render students' information in separate cards
//     function renderStudentCard(student) {
//         const card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//             <img src="${student.imageUrl}" alt="Student Image">
//             <h2>${student.fullName}</h2>
//             <p><strong>Date of Birth:</strong> ${student.dob}</p>
            
//             <p><strong>Major:</strong> ${student.major}</p>
            
//         `;

//         studentsContainer.appendChild(card);
//     }

//     // Event listener for form submission
//     studentForm.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const fullName = document.getElementById("fullName").value;
//         const dob = document.getElementById("dob").value;
        
//         const major = document.getElementById("major").value;
//         const imageUrl = document.getElementById("imageUrl").value;
        

//         // Create a new Student object
//         const student = new Student(fullName, dob, major, imageUrl);
        
        
        
//         // Render the student's information as a card
//         renderStudentCard(student);

//         // Clear the form fields
//         studentForm.reset();
//     });
// });



var selectedRow = null;


// function showAlert(message, className){
//     const div = document.createElement("div");
//     div.className = `alert alert-${className}`;

//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector(".container");
//     const main = document.querySelector(".main");
//     container.insertBefore(div, main);
//     setTimeout(() => document.querySelector(".alert").remove(),3000)
    
    
// }


// function clearFeilds(){
// document.querySelector("#firstname").value = "";
// document.querySelector("#lastname").value = "";
// document.querySelector("#rollno").value = "";
// }
var firstName;
var lastName;
var rollNo;

// Add
// document.querySelector("#studentlist").addEventListener("submit", (e) => {
// e.preventDefault();
// const firstName = document.querySelector("#firstname").value;
// const lastName = document.querySelector("#lastname").value;
// const rollNo = document.querySelector("#rollno").value;
function addToTable(){
    var firstName = document.querySelector("#firstname").value;
	var lastName = document.querySelector("#lastname").value;
	var rollNo = document.querySelector("#rollno").value;

    var newRow = tableBody.insertRow();
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	

    cell1.textContent = firstName;
	cell2.textContent = lastName;
	cell3.textContent = rollNo;

    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#rollno").value = "";
}
// if(firstName == "" || lastName == "" || rollNo == ""){
//     showAlert("fill all feild");
// }

// else{
//     if(selectedRow == null){
//         const list = document.querySelector("#studentlist");
//         const row = document.createElement("tr");

//         row.innerHTML = `
//         <td>${firstName}</td>
//         <td>${lastName}</td>
//         <td>${rollNo}</td>
//         <td>
//         <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
//         <a href="#" class="btn btn-warning btn-sm delete">Delete</a>
//         </td>
//         `;
//         list.appendChild(row);
//         selectedRow = null;
//         showAlert("student added", "success")
//     }

//     else{
//         selectedRow.children[0].textContent = firstName;
//         selectedRow.children[1].textContent = lastName;
//         selectedRow.children[2].textContent = rollNo;
//         selectedRow = null;
//         showAlert("student info edited" , "info")
//     }
//     // clearFeilds();
// }
// });


// Edit
document.querySelector("#studentlist").addEventListener("click", (e) => {
    const target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstname").value = selectedRow.children[0].textContent;
        document.querySelector("#lastname").value = selectedRow.children[1].textContent;
        document.querySelector("#rollno").value = selectedRow.children[2].textContent;
    }
});



// Delete
document.querySelector("#studentlist").addEventListener("click", (e) => {
    const target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student data deleted", "danger");
    }
});
