'use strict';

let btnSearch = document.getElementById('btn-search');
let btnNew = document.getElementById('btn-new');
let btnBuild = document.getElementById('btn-build');
let btnQuery = document.getElementById('btn-query');

btnNew.addEventListener('click', function(){
  window.open( 'https://buy.bmw.co.za/', '_blank');
})

btnSearch.addEventListener('click', function(){
  window.open( 'https://bmwdigitalshowroom.co.za/ds/#/home', '_blank');
})

btnBuild.addEventListener('click', function(){
  window.open( 'https://www.bmw.co.za/en/configurator.html', '_blank');
})

btnQuery.addEventListener('click', function(){
  window.open( 'https://www.bmw.co.za/en/topics/offers-and-services/bmw-financial-services/insurance/bmw-insurance.html#contact_insurance', '_blank');
})


/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Scroll Animation Functionality
//create the intersection observer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {   //it can observe multiple entries at the same time
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});
//grab all the elements that have that specific class.
const hiddenElements = document.querySelectorAll('.hidden');

//tell it what to observe
hiddenElements.forEach((el)=> observer.observe(el)); //Tell the observer to observe

function validateName() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePhone() {
  var phoneInput = document.getElementById("phone");
  var phoneError = document.getElementById("phoneError");
  var phonePattern = /^\+\d{2}\s\d{2}\s\d{3}\s\d{4}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = "Please enter a valid phone number";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validateModel() {
  var modelInput = document.getElementById("model");
  var modelError = document.getElementById("modelError");
  if (modelInput.value.trim() === "") {
    modelError.textContent = "Please select a BMW model";
    return false;
  } else {
    modelError.textContent = "";
    return true;
  }
}

function validateMessage() {
  var messageInput = document.getElementById("message");
  var messageError = document.getElementById("messageError");
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter your message";
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
}

function validateForm() {
  var isValid = true;
  isValid &= validateName();
  isValid &= validateEmail();
  isValid &= validatePhone();
  isValid &= validateModel();
  isValid &= validateMessage();
  var submitButton = document.getElementById("btnSubmit");
  submitButton.disabled = !isValid;
}

document.getElementById("contact-form").addEventListener("input", validateForm);

