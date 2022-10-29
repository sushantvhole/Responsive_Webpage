console.log("hello sushant");

function navslide(){
    const nav=document.querySelector(".navbar");
    const menu=document.querySelector(".nav-links");
    const burger=document.querySelector(".burger");

    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active");

        burger.classList.toggle("toggle")

    })

}

navslide();

const accordionHead = document.querySelectorAll(".accordian-item-header");

accordionHead.forEach(accordionHead => {
    accordionHead.addEventListener("click", ()=> {
        accordionHead.classList.toggle("active");
    })
})

function imachan(){
    let img1=document.getElementById("chaim1");

    let btn1=document.getElementById("btn1");

    btn1.addEventListener("click",()=>{
        if(img1.src.match="./imag/img1.jpg"){
            img1.src="./imag/img2.jpg"
        }else{
            img1.src="./imag/img1.jpg"
        }
    })
}

imachan();



 