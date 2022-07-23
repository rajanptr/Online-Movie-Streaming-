

document.getElementById("signupform").addEventListener("submit", (event) => {
  event.preventDefault()
})



function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)


    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      alert('Account Created Successfully')
      location.replace("signin.html")

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
}