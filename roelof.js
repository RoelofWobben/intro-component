var button = document.querySelector('.btn'); 

button.addEventListener('click', () => {

    // find the input for the firstname 

    var first_name_box = document.querySelector('.fname');
    var first_name = first_name_box.value;

    var last_name_box = document.querySelector('.lname');
    var last_name = last_name_box.value
    
    var error_message = document.querySelector('.error');
    var icon = document.querySelector('.icon_error');  
    
    //check first name 

    if (first_name.length <= 0) {
        error_message.style = 'visibility: visible';
        first_name_box.style = 'border: 2px solid red';
        icon.style = 'visibility: visible';
    } else {
        error_message.style = 'visibility: hidden';
        first_name_box.style = 'border: 2px solid green';
        icon.style = 'visibility: hidden';
    }

    //check last name 

    if (last_name.length <= 0) {
        console.log("last name is empty"); 
        error_message.style = 'visibility: visible';
        first_name_box.style = 'border: 2px solid red';
        icon.style = 'visibility: visible';
    } else {
        error_message.style = 'visibility: hidden';
        first_name_box.style = 'border: 2px solid green';
        icon.style = 'visibility: hidden';
    }

})
