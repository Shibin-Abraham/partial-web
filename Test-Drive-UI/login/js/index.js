console.log("login page")
let form = document.getElementById('login-form')
console.log(form)
let loginBtn = document.getElementById('login')
let message = document.querySelector(".message p")
console.log(document.cookie)
form.addEventListener('submit',(event)=>{
       event.preventDefault()
       loginBtn.style.pointerEvents = 'none;'
       loginBtn.innerHTML = '<div class="loader"></div>'

       let formData = new FormData(form)

       fetch('http://localhost/Test-Drive-API/route/login.php',{
              method: 'POST',
              body: formData
       }).then((r)=>{
              return r.text()
       }).then((t)=>{
              let obj = JSON.parse(t)
              checkResponse(obj)
       }).catch((err)=>{
              message.innerText = "Error, Please check your Network"
            })
})

function checkResponse(obj){
       if(obj.statuscode == 200){
              console.log("token is",obj)
              //document.cookie="token="+obj.JWT+"; path=/";
             // window.location.replace('../index.html')
       }else if(obj.statuscode == 401 && obj.password == true){
              let pass =document.getElementById('password')
              pass.value = ""
              pass.focus()
              message.innerText = "Invalid Password"
              loginBtn.innerHTML = 'LOGIN'
       }else if(obj.statuscode == 406){
              let email =document.getElementById('email')
              let pass =document.getElementById('password')
              email.value = ""
              pass.value = ""
              email.focus()
              message.innerText = "Input can't be empty"
              loginBtn.innerHTML = 'LOGIN'
       }else if(obj.statuscode == 401){
              let email =document.getElementById('email')
              let pass =document.getElementById('password')
              email.value = ""
              pass.value = ""
              email.focus()
              message.innerText = "Invalid Email"
              loginBtn.innerHTML = 'LOGIN'
       }else if(obj.statuscode == 400){
              message.innerText = "Error, Due to bad request"
              loginBtn.innerHTML = 'LOGIN'
       }
}