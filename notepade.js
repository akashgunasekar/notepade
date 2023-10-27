let plusbtn = document.getElementById("plus-btn")

let canclebtn =document.getElementById("cancle-btn")
let inputdiv = document.getElementById("inputct")
let overlaydiv = document.getElementById("overlay")



plusbtn.addEventListener('click',()=>{
    
    overlaydiv.style.display="block"
    inputdiv.style.display="block"

   
})
canclebtn.addEventListener('click',()=>{
    overlaydiv.style.display="none"
    inputdiv.style.display="none"

})


let selectcontainer=document.getElementById("container")
let addbtn = document.getElementById("add-btn")
let inoutvalue =document.getElementById("input-value")
let textvalue = document.getElementById("text-value")
let deletbtn =document.getElementById("deltbtn")


addbtn.addEventListener('click',()=>{
    let newdiv = document.createElement("div")
    newdiv.setAttribute("class","container")
    newdiv.innerHTML=`<h2>${inoutvalue.value}</h2> <p>${textvalue.value}</p> <button onclick="delt(event)" >Delete</button>`
   
    selectcontainer.append(newdiv)
    overlaydiv.style.display="none"
    inputdiv.style.display="none"


    


    
    
})
function delt(event){
 

   
    event.target.parentElement.remove()
}
