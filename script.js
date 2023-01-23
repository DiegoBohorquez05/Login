guardad_localstorage()

function guardad_localstorage(){
    let usuario = {
        user_name: "admin",
        password: "123456789"
    }
    
    localStorage.setItem("user", usuario.user_name)
    localStorage.setItem("password", usuario.password)
};