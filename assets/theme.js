
document.querySelectorAll(".tab-btn").forEach(btn=>{
btn.addEventListener("click",()=>{
const id=btn.dataset.tab
document.querySelectorAll(".tab-panel").forEach(p=>p.style.display="none")
document.querySelector("#tab-"+id).style.display="block"
})
})
