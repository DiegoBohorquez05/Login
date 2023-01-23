const user_name = "admin"
const password = "123456789"

const inputUsuario = document.getElementById('text-user').value
const inputPassword=document.getElementById('txt-password').value
const entrar=document.getElementById('entrar')

entrar.addEventListener('click',()=>{
    // console.log(typeof(password))
    // console.log(inputUsuario===user_name?true:false)
    // console.log(inpuasiodufgiasdvbashdvashdcblaksdtPassword===password?true:false)
    // console.log(inputUsuario)
    // console.log(inputPassword)
    if(inputUsuario===user_name && inputPassword===password){
        const token='asiodufgiasdvbashdvashdcblaksd';
        console.log(token);
        localStorage.setItem("token", token);
    }else{
        console.log('No exsite')
    }
})

