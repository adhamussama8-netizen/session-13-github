
const mobileform=document.querySelector(".mobile-form")
const NameInput=document.querySelector(".mobile-form .NameInput")
const PriceInput=document.querySelector(".mobile-form .PriceInput")
const formButton=document.querySelector(".mobile-form button")
const tBody=document.querySelector("tbody")


let updatedIndex=null

const mobiles=[

    {
    name:"samsung s10 +",
    price:10000,
    },
    {
    name:"oppo",
    price:25000,
    }
]


function handleSubmit(){
    
const mobile={
name:NameInput.value,
price:PriceInput.value

}
if(NameInput.value.length>0 && PriceInput.value.length){
if(formButton.textContent=="Create"){
    mobiles.push(mobile)

}
else
{
      mobiles.splice(updatedIndex,1,mobile)
      formButton.textContent="Create"

}

 displayMobiles()
 clearInput()

}

}

function clearInput(){
    NameInput.value=""
    PriceInput.value=""
}


function deleteMobile(mobileIndex){

mobiles.splice(mobileIndex,1)
displayMobiles()

}

function getData(mobileIndex){

const mobile =mobiles[mobileIndex]
NameInput.value = mobile.name
PriceInput.value = mobile.price
formButton.textContent="Update"
updatedIndex = mobileIndex
}



 function displayMobiles(){
    tBody.innerHTML=""
    mobiles.forEach((mobile,index) =>{
    tBody.innerHTML += `
        <tr>
                <td>${index + 1}</td>
                <td>${mobile.name}</td>
                <td>${mobile.price}</td>
                <td>
        <svg
        onclick="getData(${index})"
        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
            </g>
        </svg>
        
        
        
        
        
                    <svg
                    onclick="deleteMobile(${index})"
                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1M6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
        </svg>
        
                </td>
               </tr> 
        `
})

}
displayMobiles()


mobileform.addEventListener("submit" , (e) => {
e.preventDefault()
handleSubmit()

})
