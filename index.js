const form = document.querySelector('div')
let counterNum = document.getElementById('gacha')
let input = document.getElementById('input')
let btn = document.getElementById('savebtm')
let salovat = document.getElementById('salovat')
let krug = document.getElementById('krug')
const mainBtm  = document.getElementById('btn')
let reset  = document.getElementById('reset')

let krugCounter = 0
let num  = 0
let audio = new Audio('audio.wav')


mainBtm.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(num <33){
        
num++
     }else{
         audio.play()
         num = 0
         krugCounter++
     }
     krug.innerHTML = krugCounter
    counterNum.innerHTML = num
})
// console.log(btn);
btn.addEventListener('click' , ()=>{
    if(input.value.length > 0){
      salovat.innerHTML =   input.value
    input.value = null
  }
})

reset.addEventListener('click' , ()=>{
    krugCounter =0
    num =0
    input.value = null
    counterNum.innerHTML = num
    krug.innerHTML = krugCounter
    salovat.innerHTML =   `Siz yozgan salovat shu yerda ko'rinadI`

})