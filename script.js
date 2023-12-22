// Function to open the add pet modal
function openAddPetModal() {
  document.getElementById("addPetModal").style.display = "block";
}

// Function to close the add pet modal
function closeAddPetModal() {
  document.getElementById("addPetModal").style.display = "none";
}

// Function to submit the form
function submitForm() {
  // Fetch values from the form
  var petName = document.getElementById("petName").value;
  var petType = document.getElementById("petType").value;
  var petAge = document.getElementById("petAge").value;
  var petDescription = document.getElementById("petDescription").value;

  // Create a new object to represent the pet
  var newPet = {
      name: petName,
      type: petType,
      age: petAge,
      description: petDescription
  };

  // You can send the newPet object to your backend for further processing

  // For now, let's log the newPet object to the console
  console.log(newPet);

  // Optionally, you can clear the form after submission
  document.getElementById("addPetForm").reset();

  // Close the modal after submission
  closeAddPetModal();
}

// Event listener to open the modal when the button is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addPetButton').addEventListener('click', openAddPetModal);
});

// Function to open the add user modal
function openAddUserModal() {
  document.getElementById("addUserModal").style.display = "block";
}

// Function to close the add user modal
function closeAddUserModal() {
  document.getElementById("addUserModal").style.display = "none";
}

// Function to submit the form
function submitUserForm() {
  // Fetch values from the form
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userAge = document.getElementById("userAge").value;
  var userDescription = document.getElementById("userDescription").value;

  // Create a new object to represent the user
  var newUser = {
      name: userName,
      email: userEmail,
      age: userAge,
      description: userDescription
  };

  // You can send the newUser object to your backend for further processing

  // For now, let's log the newUser object to the console
  console.log(newUser);

  // Optionally, you can clear the form after submission
  document.getElementById("addUserForm").reset();

  // Close the modal after submission
  closeAddUserModal();
}

// Event listener to open the modal when the button is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addUserButton').addEventListener('click', openAddUserModal);
});


// Function to perform pet search
function searchPets() {
  var searchInput = document.querySelector(".search-bar input[type='text']").value.toLowerCase();
  var petItems = document.querySelectorAll(".pet-item");

  petItems.forEach(function(petItem) {
    var petName = petItem.querySelector(".pet-name").innerText.toLowerCase();

    if (petName.includes(searchInput)) {
      petItem.style.display = "block";
    } else {
      petItem.style.display = "none";
    }
  });
}

function completePurchase(cardEnding) {
  // Simulate completion of purchase with selected card
  alert(`Purchase completed using card ending in ${cardEnding}. Thank you for adopting Pet!`);
}

function showCardForm() {
  document.getElementById("cardForm").style.display = "block";
}

function saveCardDetails() {
  // Get card details
  const cardNumber = document.getElementById("cardNumber").value;
  const cardName = document.getElementById("cardName").value;

  // Simulating saving card details to user account (using local storage)
  localStorage.setItem("cardNumber", cardNumber);
  localStorage.setItem("cardName", cardName);

  alert("Card details saved successfully!");
}
function getPetInfoFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedPetInfo = urlParams.get('pet');

  if (encodedPetInfo) {
      const decodedPetInfo = decodeURIComponent(encodedPetInfo);
      alert(`Chosen Pet Information:\n\n${decodedPetInfo}`);
  }
}

document.addEventListener('DOMContentLoaded', getPetInfoFromURL);



document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  const registrationForm = document.querySelector('.registration-form');
  const loginLabel = document.querySelector('label[for="check"]');
  const signupLabel = document.querySelectorAll('label[for="check"]')[1];

  // Switch to registration form when clicking "Signup"
  signupLabel.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
  });

  // Switch to login form when clicking "Login"
  loginLabel.addEventListener('click', function() {
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
  });

  // Handle signup form submission
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can perform client-side validation and eventually submit the form to the server
    // Simulating a successful signup with an alert and then redirecting to login form
    alert('Signup Successful! Redirecting to Login...');
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
  });

  // Handle login form submission
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can perform client-side validation and eventually submit the form to the server
    // After successful login, you might redirect the user to the index.html or home page
    alert('Login Successful! Redirecting to homepage...'); // Placeholder for success message and redirection logic
    window.location.href = 'index.html'; // Redirect to home page
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulating login check - Replace this with your actual authentication logic
    const enteredUsername = document.getElementById('login-username').value;
    const enteredPassword = document.getElementById('login-password').value;

    // Replace this condition with your actual authentication logic
    if (enteredUsername === 'your_username' && enteredPassword === 'your_password') {
      // Redirect to index.html on successful login
      window.location.href = 'index.html';
    } else {
      // Handle incorrect login credentials - Display an error message or perform other actions
      alert('Invalid username or password. Please try again.');
    }
  });
});
