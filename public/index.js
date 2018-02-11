//signup en ny användare med email o password, nya användaren sparas i firebase, logga sedan in, logga ut knappen kommer upp om man är inloggad.

/**(function(){**/
    //Get elements
   /* var auth = firebase.auth();*/
/**    var textEmail = document.getElementById("textEmail");    
    var textPassword = document.getElementById("textPassword"); 
    var btnLogin = document.getElementById("btnLogin"); 
    var btnSignUp = document.getElementById("btnSignUp"); 
    var btnLogout = document.getElementById("btnLogout"); 
    var infotext = document.getElementById("infotext");


 
    //Add login event
    btnLogin.addEventListener('click', e =>{
        
        //Get email and pass
        var email = textEmail.value;
        var pass = textPassword.value;
        var auth = firebase.auth();
       
        //Sign in
        var promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
        
        //Add signup event
        btnSignUp.addEventListener('click', e =>{
            
            //Get email and pass
            // CHECK 4 REAL EMAILZ
        var email = textEmail.value;
        var pass = textPassword.value;
        var auth = firebase.auth();
       
        //Sign in
       var promise = auth.createUserWithEmailAndPassword(email, pass);
       promise.catch(e => console.log(e.message));
            
        });

        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        });


        //Add a realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser);
                btnLogout.classList.remove('btnactionhide')
            } else {
                console.log('not logged in');
                btnLogout.classList.add('btnactionhide')
            } 
        });
    

}());**/

/*
var auth = firebase.auth();

auth.signInWithEmailAndPassword

auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => {});*/

























