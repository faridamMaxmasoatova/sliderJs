const container = document.getElementsByClassName("slider");
const firstImg= document.querySelector(".first");
const secondImg=document.querySelector(".second");
const thirdImg=document.querySelector(".third");

let Imgs=["/Img1.jpg" ,"/Img2.jpg", "/Img3.jpg","Img4.jpg", "Img5.jpg","Img6.jpg"]
idx=0;
function sliderImgs(){
    secondImg.src=Imgs[idx]
    
}

document.addEventListener("keydown", (element)=>{
    let btn=element.key
    if(btn=="d"){
        idx++;
        if(idx>Imgs.length-1)idx=0;
        sliderImgs();
    }else if (element.key=="a"){
        idx--;
        if(idx<0)idx=Imgs.length-1
        sliderImgs();
    }

})