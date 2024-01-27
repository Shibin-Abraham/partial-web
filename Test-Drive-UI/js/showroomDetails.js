console.log("showroom")
getShowRoomData()
async function getShowRoomData(){
  let response = await fetch('http://localhost/Test-Drive-API/route/showroom-data.php')
  if(response.status === 404){
    popUpHandler(2," 404 Page not found")
    setTimeout(()=>{
      window.location.href ="./index.html" //404 page not found link
    },6000)
  }else if(response.status === 200){
    let preLoader = document.querySelector(".pre-loader")
    let shoowRoomData = await response.json()
    setShowRoomData(shoowRoomData)
    preLoader.style.display = "none"
  }
}

function setShowRoomData(shoowRoomData){
  let showRoomDataDiv = document.querySelector(".right-box .showroom-section")
  if(shoowRoomData[0].statuscode == 503){
    showRoomDataDiv.innerHTML=`<p style="font-size:22px;margin:10px 0px 0px 10px;color:#ff1761;">Server Under Maintenance</p>`
  }else{
    if(shoowRoomData.length>0){
      shoowRoomData.forEach((data,i)=>{
        showRoomDataDiv.innerHTML += `<div class="row-container">
        <div class="box-1">
         <div class="img-wrapper">
          <img src="http://localhost/Test-Drive-API/images/showroom_img/${data.img_name}">
         </div>
        </div>
        <div class="box-2">
         <div>
          <p id="address">${data.showroom_name} ${data.showroom_address}</p>
         </div>
         <div class="bx">
          <p>${data.status}</p>
          <label>${data.phone}</label>
         </div>
        </div>
       </div>`
      });
    }else{
      showRoomDataDiv.innerHTML=`<p style="font-size:22px;margin:10px 0px 0px 10px;color:#ff1761;">Data Not Available</p>`
    }
  }
}

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