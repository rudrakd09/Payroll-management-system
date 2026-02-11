function validateForm() { 
 
    let username = document.getElementById("username").value.trim(); 
    let email = document.getElementById("email").value.trim(); 
    let phone = document.getElementById("phone").value.trim(); 
    let password = document.getElementById("password").value; 
    let confirmPassword = document.getElementById("confirmPassword").value; 
 
    // Empty field validation 
    if (username === "" || email === "" || phone === "" || password === "" || 
confirmPassword === "") { 
        Swal.fire("Error", "All fields are mandatory.", "error"); 
        return false; 
    } 
 
    // Phone number validation 
    let phonePattern = /^[0-9]{10}$/; 
    if (!phonePattern.test(phone)) { 
        Swal.fire( 
            "Invalid Phone Number", 
            "Phone number must contain only digits and must be exactly 10 digits.", 
            "warning" 
        ); 
        return false; 
    } 
 
    // Password validation 
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/; 
    if (!passwordPattern.test(password)) { 
        Swal.fire( 
            "Weak Password", 
            "Password must be at least 7 characters long and include one uppercase letter, one digit, and one special character (&,$,#,@).", 
            "warning" 
        ); 
        return false; 
    } 
 
    // Confirm password validation 
    if (password !== confirmPassword) { 
        Swal.fire( 
            "Password Mismatch", 
            "Password and Confirm Password must match.", 
            "error" 
        ); 
        return false; 
    } 
 
    // Email validation 
    // Email validation (correct & realistic) 
let emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.com$/; 
if (!emailPattern.test(email)) { 
    Swal.fire( 
        "Invalid Email", 
        "Enter a valid email like raj@gmail.com", 
        "error" 
    ); 
    return false; 
} 
 
    //    SUCCESS ALERT AFTER SUBMIT 
    Swal.fire({ 
        title: "Submitted Successfully!", 
        text: "Student registration completed successfully.", 
        icon: "success", 
        confirmButtonText: "OK" 
    }); 
 
    //    Stop form refresh so alert is visible 
    return false;
}    