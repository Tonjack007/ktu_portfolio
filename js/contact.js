
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert("Danke, Ich werde mich so schnell wie möglich bei Ihnen melden!");
       form.reset();
      } 
    });

    const inputs = form.querySelectorAll("input, select");
    inputs.forEach(input => {
      input.addEventListener("blur", function() {
        validateField(input);
      });
    });

    const validateForm = () => {
      let isValid = true;

      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      return isValid;
    };

    const validateField = (input) => {
      const value = input.value.trim();
      const errorDiv = input.nextElementSibling;

      if (value === "") {
        input.style.borderColor = "red";
        input.style.backgroundColor = "#ffebeb";
        errorDiv.textContent = "Bitte Feld ausfüllen!";
        errorDiv.style.fontSize = "16px";
        return false;
      }

      if (input.id === "postcode") {
        const postcodeRegex = /^\d{1,4}$/;
        if (!value.match(postcodeRegex)) {
          input.style.borderColor = "red";
          input.style.backgroundColor = "#ffebeb";
          errorDiv.textContent = "Bitte gültige Postleitzahl eingeben (genau 4 Nummern) ";
          errorDiv.style.fontSize = "16px";
          return false;
        }
      }

      if (input.id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.match(emailRegex)) {
          input.style.borderColor = "red";
          input.style.backgroundColor = "#ffebeb";
          errorDiv.textContent = "bitte gültige Email Address eingeben.";
          errorDiv.style.fontSize = "16px";
          return false;
        }
      }

      if (input.id === "msg" && value.length < 30) {
        input.style.borderColor = "red";
        input.style.backgroundColor = "#ffebeb";
        errorDiv.textContent = "Es ist minimum 30 Zeichen erforderlich";
        errorDiv.style.fontSize = "16px";
        return false;
      }

      input.style.borderColor = "#00ff00";
      input.style.backgroundColor = "#ebffeb";
      errorDiv.textContent = "";
      return true;
    };
  });


 