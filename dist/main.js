addEventListener("DOMContentLoaded", ()=>{
    let modal = document.getElementsByClassName("modal")[0];

    document.querySelector(".hide").addEventListener("click",(e)=>{
        Object.assign(modal.style, {bottom:"-300px"})
    })
    document.querySelector(".btn").addEventListener("click", (e)=>{
        Object.assign(modal.style, {bottom: "20px"});
    })
});
