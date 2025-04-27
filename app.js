function validate() {
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error_message = document.getElementById("error_message");
  
    let error = "";
  
    if (name.length < 3) {
      error += "Name must be at least 3 characters long.<br>";
    }
  
    if (subject === "") {
      error += "Subject is required.<br>";
    }
  
    if (!/^\d{11}$/.test(phone)) {
      error += "Phone must be a 11-digit number.<br>";
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      error += "Email format is invalid.<br>";
    }
  
    if (message.length < 10) {
      error += "Message must be at least 10 characters long.<br>";
    }
  
    if (error !== "") {
      error_message.innerHTML = error;
      return false; // prevent form submission
    }
  
    alert("Form submitted successfully!");
    return true; // allow form submission
  }
  