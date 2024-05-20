var users = [];
const wrapper = document.querySelector('.wrapper');
    function registerActive() {
        wrapper.classList.toggle('active');
    }
    function loginActive() {
        wrapper.classList.toggle('active');
    }
    function add() {
    var nomvaleur = document.getElementById('name').value;
    var datevaleur = document.getElementById('date').value;
    var codevaleur = document.getElementById('password').value;
    var uservaleur = document.getElementById('email').value;
    var code2valeur = document.getElementById('confirmationPass').value;
      
    var s1Element = document.getElementById('s1');
    s1Element.innerText = '';

    if (codevaleur.length < 8) {
        s1Element.innerText = 'Password must contain at least 8 characters.';
        return;
    }

    if (codevaleur !== code2valeur) {
        s1Element.innerText = 'Password confirmation does not match.';
        return;
    }
    var user = { email: uservaleur, password: codevaleur, Date: datevaleur, name: nomvaleur };
    users.push(user);
    console.log(users);
}
        function signIn() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
        
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.email === email && user.password === password) {
                    alert('Connexion réussie !');
                    window.location.href = "homeprojethtml.html";
                    return;
                }
               else if ( user.password != password || user.email != email) {
                alert('Identifiants incorrects. Veuillez réessayer.');
          }
        }

        }

        function showPass(){
             var passValue = document.getElementById('pass');
             if(passValue.type == 'text'){
             passValue.type = 'password';
           }else if(passValue.type == 'password'){
          passValue.type = 'text';
              }
            }
