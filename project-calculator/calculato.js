const nums =document.querySelectorAll("#num")
let screen =document.querySelector("#textbox")

nums.forEach(num => {
    num.addEventListener("click",()=>{
      if(screen.value==0){
         screen.value="";}
      screen.value += num.innerText;
})
});
const ac =document.querySelector("#AC")
ac.addEventListener("click",()=>{
    screen.value = "0";
   
})
const de =document.querySelector("#DE")
de.addEventListener("click",()=>{
    screen.value =screen.value.slice(0,-1);
})
const meds =document.querySelectorAll("#med")
meds.forEach(med => {
    med.addEventListener("click",()=>{
      if(screen.value!="")
        {screen.value += med.innerText;}
})
});
const ans =document.querySelector("#ans")
ans.addEventListener("click",()=>{
    screen.value = eval(screen.value);
})

