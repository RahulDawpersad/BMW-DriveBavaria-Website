<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <style>
    /* Basic CSS for styling the form */
    body {
      font-family: Arial, sans-serif;
      background-image: url('../images/bmw-klasse.webp');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: auto;
      height: 100vh;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea,
    select {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    textarea{
      resize: none;
    }
    .error {
      color: red;
      font-size: 0.8em;
    }
    input[type="submit"] {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background-color: #0056b3;
    }
    .container-wrapper{
      display: flex;
    }
    .container-wrapper .bmw-logo{
      width: 60px;
      height: 70px;
      margin-left: 1em;
    }
  </style>
</head>
<body>
  <div class="container">
   <div class="container-wrapper">
    <h2>Contact Us</h2>
    <img src="../images/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG" alt="bmw logo" class="bmw-logo">
   </div>
    <form id="contactForm" action="https://formspree.io/f/xeqygllk" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name">
      <div id="nameError" class="error"></div>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your Email">
      <div id="emailError" class="error"></div>

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="">
      <div id="phoneError" class="error"></div>

      <label for="model">BMW Model</label>
      <select id="model" name="model">
        <option value="">Select a model</option>
        <option value="X3">BMW X3</option>
        <option value="X5">BMW X5</option>
        <option value="M3">BMW M3</option>
        <option value="M5">BMW M5</option>
        <!-- Add more options as needed -->
      </select>
      <div id="modelError" class="error"></div>

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Your Message"></textarea>
      <div id="messageError" class="error"></div>

      <input type="submit" value="SEND">
    </form>
  </div>

  <script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var phoneInput = document.getElementById("phone");
      var modelInput = document.getElementById("model");
      var messageInput = document.getElementById("message");

      var nameError = document.getElementById("nameError");
      var emailError = document.getElementById("emailError");
      var phoneError = document.getElementById("phoneError");
      var modelError = document.getElementById("modelError");
      var messageError = document.getElementById("messageError");

      nameError.textContent = "";
      emailError.textContent = "";
      phoneError.textContent = "";
      modelError.textContent = "";
      messageError.textContent = "";

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        event.preventDefault();
      }

      if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        event.preventDefault();
      } else if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        event.preventDefault();
      }

      var phonePattern = /^\+\d{11}$/; // South African phone number pattern
      if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
        event.preventDefault();
      } else if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Please enter a valid South African phone number.";
        event.preventDefault();
      }

      if (modelInput.value.trim() === "") {
        modelError.textContent = "Please select a BMW model.";
        event.preventDefault();
      }

      if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        event.preventDefault();
      }
    });
  </script>
</body>
</html>
