/age=16;
//let fullName="saireddy";
//console.log(fullName);


 //let login=prompt("Login Id");
// Mahindra car data


         // Welcome message when page loads
window.onload = function () {
    alert("Welcome to Mahindra Cars Website!");
};


// Search button function
document.getElementById("button1").onclick = function () {

    let searchValue = document.querySelector("input").value.toLowerCase();

    if (searchValue.includes("thar")) {
        alert("Mahindra Thar Roxx is available on this page!");
    }

    else if (searchValue.includes("xuv")) {
        alert("Mahindra XUV300 information is available above.");
    }

    else if (searchValue === "") {
        alert("Please type something to search.");
    }

    else {
        alert("Car not found on this page.");
    }
};


// Submit button feedback
document.getElementById("one").onclick = function () {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    if (fname === "" || lname === "") {
        alert("Please enter your name before submitting.");
    }
    else {
        alert("Thank you " + fname + " for your feedback!");
    }
};
