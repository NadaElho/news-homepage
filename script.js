document.querySelector(".menu").onclick=()=>{
    document.querySelector(".overlay").classList.remove("hide");
    document.querySelector(".close").classList.remove("hide");
    document.querySelector(".lists").style.display="flex";
}
document.querySelector(".close").onclick=()=>{
    document.querySelector(".overlay").classList.add("hide");
    document.querySelector(".close").classList.add("hide");
    document.querySelector(".lists").style.display="none";
}