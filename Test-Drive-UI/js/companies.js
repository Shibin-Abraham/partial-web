popUpHandler(2,"Somethng went Error")


function popUpHandler(status,msg){
       if(status === 1){
        let successPopUp = document.querySelector(".popup-box .success-content")
        let message = document.querySelector(".popup-box .success-content .msg p")
        message.innerText = msg
        setTimeout(()=>{
         successPopUp.classList.add('active')
        },2000)
        setTimeout(() => {
         successPopUp.classList.remove('active')
        }, 9000)
       }else if(status === 2){
        let errorPopUp = document.querySelector(".popup-box .error-content")
        let message = document.querySelector(".popup-box .error-content .msg p")
        message.innerText = msg
        errorPopUp.classList.add('active')
         setTimeout(() => {
          errorPopUp.classList.remove('active')
         }, 5000)
       }else if(status === 3){
        let updatePopUp = document.querySelector(".popup-box .update-content")
        let message = document.querySelector(".popup-box .update-content .msg p")
        message.innerText = msg
        setTimeout(()=>{
         updatePopUp.classList.add('active')
        })
         
         setTimeout(() => {
          updatePopUp.classList.remove('active')
         }, 7000)
       }
      }
      
      let screenBtn = document.getElementById("screenBtn")
      
      screenBtn.addEventListener('click',()=>{
       toggleFullscreen()
      })
      
      function getFullscreenElement() {
       return document.fullscreenElement|| document.webkitfullscreenElement|| document.mozfullscreenElement|| document.msfullscreenElement;
      }
      function toggleFullscreen(){
       if(getFullscreenElement()){
        document.exitFullscreen()
       }else{
        document.documentElement.requestFullscreen().catch(console.log)
       }
      }