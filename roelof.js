var button = document.querySelector('.btn');

const displayErrorMessage = (isValid, error_message, input_box, icon) => {
    if (!isValid) {
        error_message.style = "visibility: visible"
        input_box.style = 'border: 2px solid red';
        icon.style = 'visibility: visible';
    } else {
        error_message.style = 'visibility: hidden';
        input_box.style = 'border: 2px solid green';
        icon.style = 'visibility: hidden';
    }
}

const validateTextEmptyInput = (class1, class2, min_length, max_length, text) => {
    
    var div = document.querySelector(class1);
    var input_box = document.querySelector(class2);
    var input = input_box.value;
    var error_message = div.querySelector('.error');
    var icon = div.querySelector('.icon_error');
    var isValid = true; 

    if (input.length > max_length) {
        error_message.innerHTML = text + " cannot be bigger then " + max_length  + " characters";
        isValid = false; 
    }
    
    if (input.length < min_length) {
        error_message.innerHTML = text + " cannot be smaller then " + min_length  + " characters";
        isValid = false; 
    }

    if (input.length <= 0) {
        error_message.innerHTML = text +  " cannot be empty";
        isValid = false; 
    }

    displayErrorMessage(isValid, error_message, input_box, icon); 

}

const validateEmailInput = () => {
    
    var div = document.querySelector('.email');
    var input_box = document.querySelector('.mail'); 
    var icon = div.querySelector('.icon_error')
    var input = document.querySelector('.mail').value;
    var error_message = div.querySelector('.error');
        
    // validate input if it is a valid email adress

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.match(validRegex)){
        error_message.innerHTML = "Looks like this is not a valid email address"
    }
    
    displayErrorMessage(input.match(validRegex), error_message , input_box, icon); 
}

const validatePassword = () => {
    var strength = 0 ;
    
    var div = document.querySelector('.password');
    var input_box = document.querySelector('.pword'); 
    var icon = div.querySelector('.icon_error')
    var input = input_box.value;
    var error_message = div.querySelector('.error'); 

    //check password length 

    if (input.length < 8) {
        error_message.innerHTML = "Password must be at least 8 characters"
    } else {
        strength += 1
    }

    // Check for mixed case
  if (input.match(/[a-z]/) && input.match(/[A-Z]/)) {
    strength += 1;
  } else {
    var error = div.querySelector('.error').innerHTML;
    if (error.length != 0) {
        error_message.innerHTML += "<br />Use both lowercase and uppercase letters. ";
    } else {
        error_message.innerHTML += "Use both lowercase and uppercase letters. ";
    }
  }

  //Check for numbers
  
  if (input.match(/\d/)) {
    strength +=1 
  } else {
    var error = div.querySelector('.error').innerHTML;
    if (error.length != 0) {
        error_message.innerHTML += "<br />Include at least 1 number ";
    } else {
        error_message.innerHTML += "Include at least a number";
    }
  }
  
  //Check for spacial characters
  if (input.match(/[^a-zA-Z\d]/)) {
    strength += 1 
  } else {
    var error = div.querySelector('.error').innerHTML;
    if (error.length != 0) {
        error_message.innerHTML += "<br />Include at least 1 special character ";
    } else {
        error_message.innerHTML += "Include at least a 1 special character";
    }
  }

  displayErrorMessage(strength == 4 , error_message , input_box, icon); 
}

button.addEventListener('click', (e) => {

    e.preventDefault(); 

    //handle the validation of the firstname
    validateTextEmptyInput(".firstname", ".fname", 2, 10, "First name");
 

    // handle the last name validation.

    validateTextEmptyInput(".lastname", ".lname",2, 10, "Last name");

    // handle the email address

    validateEmailInput(); 

    //handle the password validation 

    validatePassword(); 

})

