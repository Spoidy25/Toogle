
let toggle=document.getElementById("toggle")
let container=document.getElementById("container")
let h1 = document.getElementById("div1")
toggle.addEventListener("click",()=>{
    toggle.checked?container.style.backgroundColor="#171717":container.style.backgroundColor="#ffffff"
    toggle.checked?h1.style.color="#ffffff":h1.style.color="#171717"
})