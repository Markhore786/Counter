
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let p = document.getElementById("p")
let num = 0

btn1.addEventListener("click",function () {
  
 num++
 

  p.innerText = num

})

btn2.addEventListener("click",function () {
  
  num--

   p.innerText = num

 })