let form = document.querySelector("form");
let users;
if(localStorage.getItem('users') == null){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem('users'));
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let loginUser = {
        login_email : document.getElementById("email").value,
        login_password : document.getElementById("password").value,
    }
    users.forEach(user => {
        if(user.email == loginUser.login_email){
            if(user.password == loginUser.login_password){
                alert("Login Successful");
                window.location.href = "index.html";
                return;
            }else{
                alert("Wrong Password");
            }
        }
    });
})