

function logout() {
    firebase.auth().signOut()

        .then(() => {
            // Sign-out successful.
            alert('Sign-out successful')
        }).catch((error) => {
            // An error happened.
            alert('error')
        });
}
