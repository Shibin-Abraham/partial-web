console.log("otp page")

let form = document.querySelector('div form')
let confirmBtn = document.getElementById('verify')
let message = document.querySelector(".message p")
form.addEventListener('submit',(event)=>{
       event.preventDefault();
       confirmBtn.style.pointerEvents = 'none;'
       confirmBtn.innerHTML = '<div class="loader"></div>'

       let formData = new FormData(form)

       fetch('http://localhost/Test-Drive-API/route/email-authentication.php',{
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
              let popUp = document.querySelector(".popup")
              document.querySelector(".popup .container p").innerText = obj.email+" is Verified"
              popUp.classList.add("active")
       }else if(obj.statuscode == 100){
              message.innerText = "Error, Please try agian later"
              confirmBtn.innerHTML = 'CONFIRM'
       }
       else if(obj.statuscode == 401){
              message.innerText = "Invalid OTP"
              confirmBtn.innerHTML = 'CONFIRM'
       }else if(obj.statuscode == 440){
              message.innerText = "Session expired, Please try agian"
              confirmBtn.innerHTML = 'CONFIRM'
       }else if(obj.statuscode == 400){
              message.innerText = "Error, Due to bad request"
              confirmBtn.innerHTML = 'CONFIRM'
       }
}


