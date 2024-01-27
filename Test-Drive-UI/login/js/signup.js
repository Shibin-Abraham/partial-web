console.log("signup js")

/*
btn.addEventListener('click',()=>{

  let e = document.getElementById('email')
  e.value=''
  e.attributes.placeholder.value = 'this email is already taken '
  //e.placeHolder='this email is already taken '
})*/

let form = document.querySelector('div form')
let signUpBtn = document.getElementById('signup')
let message = document.querySelector(".message p")
form.addEventListener('submit',(event)=>{
       event.preventDefault();
       signUpBtn.style.pointerEvents = 'none;'
       signUpBtn.innerHTML = '<div class="loader"></div>'

       let formData = new FormData(form)



       fetch('http://localhost/Test-Drive-API/route/signup.php',{
              method: 'POST',
              body: formData
            }).then((r)=>{
              return r.text();
            }).then((t)=>{
              let obj = JSON.parse(t)
              checkResponse(obj)
            }).catch((err)=>{
              message.innerText = "Error, Please check your Network"
            })
})


function checkResponse(obj){
  if(obj.statuscode == 200){
    form.reset()
    window.location.replace("otp.html")
  }else if(obj.statuscode == 424){
    signUpBtn.innerHTML = 'SIGN UP'
    message.innerText = "Error, Please try agian later"
  }
  else if(obj.statuscode == 500){
    signUpBtn.innerHTML = 'SIGN UP'
    message.innerText = "Failed To uploade file(image)"
  }else if(obj.statuscode == 403){
    signUpBtn.innerHTML = 'SIGN UP'
    let confirmPassword = document.getElementById("confirm")
    confirmPassword.value = ""
    message.innerText = "Password must be same value."
    confirmPassword.focus()
  }else if(obj.statuscode == 409){
    signUpBtn.innerHTML = 'SIGN UP'
    let email = document.getElementById("email")
    email.attributes.placeholder.value = `${email.value} is already exist`
    email.value = ""
    email.focus()
    message.innerText = "Email Already Exist"
  }else if(obj.statuscode == 406){
    signUpBtn.innerHTML = 'SIGN UP'
    form.reset()
    message.innerText = "Input Data cannot be empty"
  }else if(obj.statuscode == 400){
    signUpBtn.innerHTML = 'SIGN UP'
    form.reset()
    message.innerText = "Server Error, due to bad request"
  }
}