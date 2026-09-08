function savePersonal(){

let name = document.getElementById("name").value;
let father = document.getElementById("father").value;
let mother = document.getElementById("mother").value;
let dob = document.getElementById("dob").value;

let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let adhar = document.getElementById("adhar").value;

let state = document.getElementById("state").value;
let city = document.getElementById("city").value;
let pincode = document.getElementById("pincode").value;

let gender = document.querySelector('input[name="gen"]:checked').value;

sessionStorage.setItem("name", name);
sessionStorage.setItem("father", father);
sessionStorage.setItem("mother", mother);
sessionStorage.setItem("dob", dob);
sessionStorage.setItem("phone", phone);
sessionStorage.setItem("email", email);
sessionStorage.setItem("adhar", adhar);
sessionStorage.setItem("state", state);
sessionStorage.setItem("city", city);
sessionStorage.setItem("pincode", pincode);
sessionStorage.setItem("gender", gender);
}


function saveQualification(){

let highschool = document.getElementById("highschool").value;
let highmarks = document.getElementById("highmarks").value;

let secondaryschool = document.getElementById("secondaryschool").value;
let secondarymarks = document.getElementById("secondarymarks").value;

let course = document.getElementById("course").value;
let university = document.getElementById("university").value;

let passingyear = document.getElementById("passingyear").value;

sessionStorage.setItem("highschool", highschool);
sessionStorage.setItem("highmarks", highmarks);

sessionStorage.setItem("secondaryschool", secondaryschool);
sessionStorage.setItem("secondarymarks", secondarymarks);

sessionStorage.setItem("course", course);
sessionStorage.setItem("university", university);

sessionStorage.setItem("passingyear", passingyear);

}

function saveDocuments(){

let about = document.getElementById("about").value;

sessionStorage.setItem("about", about);

let photo = document.getElementById("photo").files[0];
let sign = document.getElementById("sign").files[0];

let reader1 = new FileReader();
reader1.onload = function(){
sessionStorage.setItem("photo", reader1.result);
}
reader1.readAsDataURL(photo);

let reader2 = new FileReader();
reader2.onload = function(){
sessionStorage.setItem("sign", reader2.result);
}
reader2.readAsDataURL(sign);

}

if (window.location.pathname.includes("preview.html")) {

window.addEventListener("DOMContentLoaded", function(){

document.getElementById("name").textContent = sessionStorage.getItem("name") || "";
document.getElementById("father").textContent = sessionStorage.getItem("father") || "";
document.getElementById("mother").textContent = sessionStorage.getItem("mother") || "";
document.getElementById("dob").textContent = sessionStorage.getItem("dob") || "";
document.getElementById("gender").textContent = sessionStorage.getItem("gender") || "";

document.getElementById("phone").textContent = sessionStorage.getItem("phone") || "";
document.getElementById("email").textContent = sessionStorage.getItem("email") || "";
document.getElementById("adhar").textContent = sessionStorage.getItem("adhar") || "";

document.getElementById("state").textContent = sessionStorage.getItem("state") || "";
document.getElementById("city").textContent = sessionStorage.getItem("city") || "";
document.getElementById("pincode").textContent = sessionStorage.getItem("pincode") || "";

document.getElementById("highschool").textContent = sessionStorage.getItem("highschool") || "";
document.getElementById("highmarks").textContent = sessionStorage.getItem("highmarks") || "";

document.getElementById("secondaryschool").textContent = sessionStorage.getItem("secondaryschool") || "";
document.getElementById("secondarymarks").textContent = sessionStorage.getItem("secondarymarks") || "";

document.getElementById("course").textContent = sessionStorage.getItem("course") || "";
document.getElementById("university").textContent = sessionStorage.getItem("university") || "";
document.getElementById("passingyear").textContent = sessionStorage.getItem("passingyear") || "";

document.getElementById("about").textContent = sessionStorage.getItem("about") || "";

let photo = sessionStorage.getItem("photo");
let sign = sessionStorage.getItem("sign");

if(photo){
document.getElementById("previewPhoto").src = photo;
}

if(sign){
document.getElementById("previewSign").src = sign;
}

});
}