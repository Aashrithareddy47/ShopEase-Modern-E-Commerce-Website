function login(){

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    if(username==="admin" && password==="12345"){

        localStorage.setItem("loggedIn","true");

        window.location.href="index.html";

    }
    else{

        document.getElementById("message").textContent =
        "Invalid Username or Password";

    }

}