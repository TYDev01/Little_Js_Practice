let fName = document.querySelector('#fullName').value;
let email = document.querySelector(".email").value;
let age = document.querySelector("#age").value;
let surveyForm = document.querySelector("#survey-form");
let title = document.querySelector("#title");


title.innerHTML = "AltSchool survey form"
prompt ("name?", 5)


surveyForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(fName);
    console.log(email);
    console.log(age);
});