console.log(' dashboard js');
//console.log(document.cookie)
let carDataLength = 0
let carDesignDataLength = 0
let showRoomDataLength = 0
let data=[]
let carDataTemporary,carDesignDataTemp,showRoomDataTemp //global variables arr[]
getDashBordData()
async function getDashBordData(){
  let response = await fetch("http://localhost/Test-Drive-API/route/car-data.php")
  let response2 = await fetch("http://localhost/Test-Drive-API/route/car-design-data.php")
  let response3 = await fetch("http://localhost/Test-Drive-API/route/showroom-data.php")
  if((response.status===404)||(response2.status===404)||(response3.status===404)){
    popUpHandler(2," 404 Page not found")
    setTimeout(()=>{
     // window.location.href ="./index.html" //404 page not found link
     //popUpHandler(2," 404 Page not found")
    },6000)
  }else if(response.status === 200 && response2.status === 200 && response3.status === 200){
    let cardLoader = document.querySelector(".right-box .card-loader")
    let carData = await response.json()
    let carDesignData = await response2.json()
    let showRoomData = await response3.json()
    carDataLength = await carData.length
    carDesignDataLength = await carDesignData.length
    showRoomDataLength = await showRoomData.length

    setData(carData,carDesignData,showRoomData)
    console.log("data = ",carData," design ",carDesignData,"showroom",showRoomData)
    cardLoader.style.display = "none"
    carDataTemporary = await carData
    carDesignDataTemp =await carDesignData
    showRoomDataTemp =await showRoomData
  }
}

function listSearchItems(){
  let searchData = document.getElementById("search").value.toLowerCase()
  searchData.length==0?setData(carDataTemporary,carDesignDataTemp,showRoomDataTemp):null;
  let ulSection = document.querySelector(".search-bar ul")
  ulSection.innerHTML=""
  
  for(let i=0;i<data.length;i++){
    if(searchData.length!=0&&data[i].car_name.toLowerCase().includes(searchData)){
      ulSection.innerHTML +=`<li value="${data[i].car_id}">${data[i].car_name}</li>`
    }
  }
  let liData = document.querySelectorAll(".search-bar ul li")

  liData.forEach((e,i)=>{
    e.addEventListener('click',()=>{
      document.getElementById("search").value = e.innerText
      let carDataTemp,carDesignDataTemp2,showRoomDataTemp2
      for(let i=0;i<data.length;i++){
        if(data[i].car_id==e.value){
          carDataTemp = [
            {
              car_id: `${data[i].car_id}`, car_name: `${data[i].car_name}`, company: `${data[i].company}`, img_name: `${data[i].img_name}`, showroom_id: `${data[i].showroom_id}`
            },
          ]
          console.log("temp",carDataTemp)
          for(let j=0;j<carDesignDataTemp.length;j++){
            if(carDesignDataTemp[j].car_id==e.value){
              carDesignDataTemp2 = [
                {
                  car_design_id: `${carDesignDataTemp[j].car_design_id}`, car_id: `${carDesignDataTemp[j].car_id}`, seating: `${carDesignDataTemp[j].seating}`, type: `${carDesignDataTemp[j].type}`, fuel: `${carDesignDataTemp[j].fuel}`
                },
              ]
              console.log("temwwwp",carDesignDataTemp2)
            }
          }
          for(let k=0;k<showRoomDataTemp.length;k++){
            if(showRoomDataTemp[k].showroom_id==data[i].showroom_id){
              showRoomDataTemp2 = [
                {
                  showroom_id: `${showRoomDataTemp[k].showroom_id}`, showroom_name: `${showRoomDataTemp[k].showroom_name}`, showroom_address: `${showRoomDataTemp[k].showroom_address}`, status: `${showRoomDataTemp[k].status}`, phone: `${showRoomDataTemp[k].phone}`,img_name: `${showRoomDataTemp[k].img_name}`
                },
              ]
              console.log("sho0oowp",showRoomDataTemp2)
            }
          }
         // setData(carDataTemp,carDesignDataTemp2,showRoomDataTemp)
        }
      }
      //let dataSectionDIv = document.querySelectorAll(".right-box .data-section")
      
      setData(carDataTemp,carDesignDataTemp2,showRoomDataTemp2)
      let ul = document.querySelector(".search-bar ul")
      while(ul.firstChild){
        ul.removeChild(ul.firstChild)
      }
    })
  })
  
}

async function checkDataLength(){
    let response = await fetch("http://localhost/Test-Drive-API/route/car-data.php")
    let response2 = await fetch("http://localhost/Test-Drive-API/route/car-design-data.php")
    let response3 = await fetch("http://localhost/Test-Drive-API/route/showroom-data.php")
    if((response.status === 200) && (response2.status === 200) && (response3.status === 200)){
      let carData = await response.json()
      let carDesignData = await response2.json()
      let showRoomData = await response3.json()
      if((carDataLength != carData.length)||(showRoomDataLength != showRoomData.length)||(carDesignDataLength != carDesignData.length)){
        carDataLength = carData.length
        carDesignDataLength = carDesignData.length
        showRoomDataLength = showRoomData.length
        setData(carData,carDesignData,showRoomData)
      }
    }
}
setInterval(()=>{
checkDataLength()
},20000)

function setData(carData,carDesignData,showRoomData){
  console.log('---------',carData,'------',carDesignData,'------',showRoomData)
  let dataSectionDIv = document.querySelector(".right-box .data-section")
  if(carData[0].statuscode === 503){
    dataSectionDIv.innerHTML=`<p style="font-size:22px;margin:10px 0px 0px 10px;color:#ff1761;">Server Under Maintenance</p>`
  }else{
    if(carData.length>0&&carDesignData.length>0){
      data = []
      for(let i=0;i<carData.length;i++){
        for(let j=0;j<carDesignData.length;j++){
          if(carData[i].car_id == carDesignData[j].car_id){
            data.push({
              car_id:carData[i].car_id, 
              car_design_id:carDesignData[j].car_design_id,
              car_name:carData[i].car_name,
              company:carData[i].company,
              seating:carDesignData[j].seating,
              type:carDesignData[j].type,
              fuel:carDesignData[j].fuel,
              img_name:carData[i].img_name,
              showroom_id:carData[i].showroom_id
            })
          }
        }
      }
      while(dataSectionDIv.firstChild){
        //console.log("dbbbbb",dataSectionDIv.firstChild)
        dataSectionDIv.removeChild(dataSectionDIv.firstChild)
      }
      let storeDiv = ""
      data.forEach((data,index)=>{
          let dataDiv = `<div class="data">
          <div class="img-container">
           <img src="http://localhost/Test-Drive-API/images/car_img/${data.img_name}">
          </div>
          <div class="container-section">
           <div class="top-data">Test Drive</div>
           <input type="hidden" name="car_id" value=${data.car_id}>
           <div class="c-name">
            <p>${data.car_name}</p>
           </div>
           <div class="cc-name">
            <p>${data.company}</p>
           </div>
           <div class="c-design">
            <img src="img/member-icon.svg">
            <p>${data.seating}</p>
            <img src="img/gear-icon.svg">
            <p>${data.type}</p>
            <img src="img/fuel-icon.svg">
            <p>${data.fuel}</p>
           </div>
           <div class="b-btn">
            <button>Book Now</button>
           </div>
          </div>
         </div>`
         storeDiv+=dataDiv
      })

      dataSectionDIv.innerHTML= `${storeDiv}`
      /*
      dataSectionDIv.forEach((data,index)=>{
        data.remove(data)
      })*/
     
     
     
      let bookBtn = document.querySelectorAll(".right-box .data .b-btn button")
      bookBtn.forEach(bookBtnClick)
  
      function bookBtnClick(e,i){
        e.addEventListener('click', () => {
          // let form = document.querySelector(".data-section form")
          console.log(i)//for index
          console.log("data===",data[i])
          let carName = document.querySelector(".data-section form .details p")
          carName.innerText =`${data[i].car_name}  (${data[i].seating}-seater, ${data[i].type}, ${data[i].fuel})`
          let name = document.querySelector(".data-section form input[type='text']")
          name.value = `Shibin` // ${user.name}
          let email = document.querySelector(".data-section form input[type='email']")
          email.value = `Shibin@gmail.com` // ${user.email}
          let dropDown = document.querySelector(".data-section form select")
          console.log("length====",data[i].showroom_id.length)
          for(let j=0;j<showRoomData.length;j++){
            if(data[i].showroom_id === showRoomData[j].showroom_id&&showRoomData[j].status=='open'){
              dropDown.innerHTML = `<option value=${showRoomData[j].showroom_id}>${showRoomData[j].showroom_name} ${showRoomData[j].showroom_address}</option>`
            }
            if(data[i].showroom_id === showRoomData[j].showroom_id&&showRoomData[j].status!='open'){
              dropDown.innerHTML = `<option value="0"> Showroom Temporarily Unavailable</option>`
            }
          }
          let popUp = document.querySelector(".popup")
          let submitBtn = document.getElementById("submit-btn")
          if(dropDown.value==0){
            submitBtn.style.pointerEvents = 'none;';
            submitBtn.style.cursor = 'not-allowed';
            popUpHandler(2,"Showroom Temporarily Unavailable")
            setTimeout(()=>{
              submitBtn.style.pointerEvents = 'auto;';
              submitBtn.style.cursor='pointer';
              popUp.classList.remove('active')
            },2000)
          }
          popUp.classList.add('active')
          let popupCloseBtn = document.querySelector(".popup.active .close-btn img")
          let form = document.querySelector(".data-section form")
          popupCloseBtn.addEventListener('click', () => {
            dropDown.innerHTML = ''
            submitBtn.style.pointerEvents = 'auto;';
            submitBtn.style.cursor='pointer';
            popUp.classList.remove('active')
          })
          form.addEventListener('submit', (e) => {
            e.preventDefault()
            popupCloseBtn.style.pointerEvents = 'none;';
            popupCloseBtn.style.cursor = 'not-allowed';
            let formData = new FormData(form)
            let dataObj = {
              'userId': 1,/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
              'carId': data[i].car_id,
              'carDesignId': data[i].car_design_id,
              'showRoomId': formData.get('showrooms'),
              'name': formData.get('name'),
              'email': formData.get('email'),
              'phone': formData.get('phone'),
              'date': formData.get('date'),
              'time': formData.get('time')
            }   
            submitBtn.innerHTML = '<div class="loader"></div>'
            submitBtn.style.pointerEvents = 'none;'
            submitBtn.style.cursor='progress'
            fetch('http://localhost/Test-Drive-API/route/test-slot-booking.php',{
              method: 'POST',
              headers:{
                "Content-type": "application/json; charset=utf-8"
              },
              body: JSON.stringify(dataObj)
            }).then((r)=>{
              return r.text();
            }).then((t)=>{
              let obj =JSON.parse(t)
              checkResponse(obj)
            }).catch((err)=>{
              console.error(err)
            })

            function checkResponse(obj){
              if(obj.statuscode == 200){
                  popupCloseBtn.style.pointerEvents = 'auto;';
                  popupCloseBtn.style.cursor = 'pointer';
                  submitBtn.innerHTML = 'Submit';
                  submitBtn.style.pointerEvents = 'auto;';
                  submitBtn.style.cursor='pointer';
                  popUp.classList.remove('active')
                  popUpHandler(1,"Your data has been saved successfully")
                }else if(obj.statuscode == 100){
                    popupCloseBtn.style.pointerEvents = 'auto;';
                    popupCloseBtn.style.cursor = 'pointer';
                    submitBtn.innerHTML = 'Submit'
                    submitBtn.style.pointerEvents = 'auto;';
                    submitBtn.style.cursor='pointer';
                    popUp.classList.remove('active')
                    popUpHandler(2,"Something went wrong please try again")
                }else if(obj.statuscode == 406){
                      popupCloseBtn.style.pointerEvents = 'auto;';
                      popupCloseBtn.style.cursor = 'pointer';
                      submitBtn.innerHTML = 'Submit'
                      submitBtn.style.pointerEvents = 'auto;';
                      submitBtn.style.cursor='pointer';
                      popUp.classList.remove('active')
                      popUpHandler(2,"Data not acceptable please check your inputs")
                }else if(obj.statuscode == 503){
                      popupCloseBtn.style.pointerEvents = 'auto;';
                      popupCloseBtn.style.cursor = 'pointer';
                      submitBtn.innerHTML = 'Submit'
                      submitBtn.style.pointerEvents = 'auto;';
                      submitBtn.style.cursor='pointer';
                      popUp.classList.remove('active')
                      popUpHandler(2,"Server Under Maintence")
                }else if(obj.statuscode == 400){
                      popupCloseBtn.style.pointerEvents = 'auto;';
                      popupCloseBtn.style.cursor = 'pointer';
                      submitBtn.innerHTML = 'Submit'
                      submitBtn.style.pointerEvents = 'auto;';
                      submitBtn.style.cursor='pointer';
                      popUp.classList.remove('active')
                      popUpHandler(2,"Bad Request Error")
                }
              }
            /*setTimeout(() => {
              submitBtn.innerHTML = 'submited'
              submitBtn.style = `background:#123882D7;
              pointer-events:none;`
              popUp.classList.remove('active')
          
              popUpHandler(3,"Your data has been updated") // popUpControl arguments list 1-success,2-error,3-update
              popUpHandler(2,"Something went wrong ")
              //popUpHandler(3,"Successfully Logged in")
              popUpHandler(1,"Your data has been saved successfully")
              // call the form clear function
              }, 4000)*/
            })
        })
      }
    }else{
      dataSectionDIv.innerHTML=`<p style="font-size:22px;margin:10px 0px 0px 10px;color:#ff1761;">Data Not Available</p>`
    }
  }

}



let popUpHandler = (status,msg)=>{
 if(status === 1){
  let successPopUp = document.querySelector(".popup-box .success-content")
  let message = document.querySelector(".popup-box .success-content .msg p")
  message.innerText = msg
  successPopUp.classList.add('active')
  setTimeout(() => {
   successPopUp.classList.remove('active')
  }, 5000)
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
  updatePopUp.classList.add('active')
   setTimeout(() => {
    updatePopUp.classList.remove('active')
   }, 5000)
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
