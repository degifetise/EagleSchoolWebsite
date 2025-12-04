document.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");


menu.addEventListener("click", () => {
menu.classList.toggle("fa-times");
navbar.classList.toggle("nav-toggle");
});




document.getElementById("login").addEventListener("click", () => {
document.querySelector(".login").classList.add("popup");
});

document.querySelector(".login form .fa-times").addEventListener("click", () => {
document.querySelector(".login").classList.remove("popup");
});



window.addEventListener("load", removeActiveClasses);
window.addEventListener("scroll", removeActiveClasses);
function removeActiveClasses() {
menu.classList.remove("fa-times");
navbar.classList.remove("nav-toggle");
document.querySelector(".login").classList.remove("popup");
}




window.addEventListener("scroll", () => {
document.querySelectorAll("section").forEach(section => {
const top = window.scrollY;
const height = section.clientHeight;
const id = section.id;
const offset = section.offsetTop - 200;

if (top > offset && top < offset + height) {
document.querySelectorAll(".navbar ul li a").forEach(link => link.classList.remove("active"));
document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add("active");
}
});
});

});






let dateEl = document.getElementById("date");

let d = new Date();


let yearDetail = d.getFullYear();


dateEl.innerHTML = yearDetail;


//navlist = document.getElementById("navlist");
//navlist.addEventListener("click", function () {
//
//
//
//});
//





//user formm validations


//const formValidate = document.getElementById("formValidate");
//
//const userName = document.getElementById("fname");
//
//const userEmail = document.getElementById("userEmail");
//
//const phoneNumber = document.getElementById("phoneNumber");
//
//const textArea = document.getElementById("userText");
//
//const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._]/+)/g;
//
//formValidate.addEventListener("submit", function () =>{
//
//const userNameValue = userName.value.trim();
//
//const userEmailValue = userEmail.value.trim();
//
//const phoneNumberValue = phoneNumber.value.trim();
//
//const textAreaValue = textArea.value.trim();
//
//if(userNameValue == "" && userNameValue !(NaN())){
//alert("please enter valid full name");
//}
//
//else if(userEmailValue !== match(emailPattern)){
//alert("please enter valid email address);
//}
//
//
//else if(phoneNumberValue == NaN()){
//alert("please enter number value only");
//}
//
//else if(textAreaValue == ""){
//alert("please write short and briefy text!");
//}
//
//else{
//alert("successfully submited your information");
//}
//
//});
//



//   document.addEventListener('DOMContentLoaded', () => {
  //const elements = document.querySelectorAll('.display');

  //const observer = new IntersectionObserver((entries) => {
   // entries.forEach(entry => {
     // if (entry.isIntersecting) {
       // entry.target.classList.add('visible');
//      }
//    });
//  }, { threshold: 0.3 }); // Adjust threshold as needed
//
//  elements.forEach(element => observer.observe(element));
//});  //




 //const showEl = document.querySelectorAll('.display');
//
 //showEl.forEach((el) => observer.observe(el));
 //const observer = new IntersectionObserver((entries) =>{
//
//
 //entries.forEach((entry) => {
 //console.log(entry);
//
//
 //if(entry.isIntersecting) {
 //entry.target.classList.add('show');
 //}
 //else{
 //entry.target.classList.remove('show');
 //}
 //})
//
 //})





// onscroll animations 


const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting) {
entry.target.classList.add("in-view");
}


})

} ,{
rootMargin: "0px",
threshold: [0, 0.1, 1]
},
) 


const tags = document.querySelectorAll(".imgbox");

tags.forEach((tag) => {
observer.observe(tag);
})


