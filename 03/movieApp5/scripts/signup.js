let form = document.querySelector("form");
let users;
if(localStorage.getItem('users') == null){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem('users'));
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let user ={
        name : document.getElementById("name").value,
        phNum : document.getElementById("number").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }
    if(!user.name || !user.phNum || !user.email || !user.password){
        alert("Enter All the cridentials");
        return;
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Sign Up Successful login to get started");
    window.location.href = "login.html";
})