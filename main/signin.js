

document.getElementById("signupform").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("main.html")
    }
})



function signin() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)

        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            alert('Logged In Successfully')

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

        
}