function checkUsername() {                             // Declare function
  var elMsg = document.getElementById('feedback0');     // Get feedback element
  var elUsername = document.getElementById('username0');// Get username input
  if (elUsername.value.length < 5) {                   // If username too short
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                              // Otherwise
    elMsg.textContent = '';                             // Clear message
  }
}