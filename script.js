const user_name = "admin"
const password = "123456789"

const inputUsuario = document.getElementById('text-user').value
const inputPassword=document.getElementById('txt-password').value
const entrar=document.getElementById('entrar')

entrar.addEventListener('click',()=>{
    if(inputUsuario===user_name && inputPassword===password){
        const token='asiodufgiasdvbashdvashdcblaksd';
        console.log(token);
        localStorage.setItem("token", token);
    }else{
        console.log('No exsite')
    }
})

