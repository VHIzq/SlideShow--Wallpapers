//initial settings
const images = [];
const time = 3000;
let index = 0;
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

//Image list
images[0] = "/imgs/img1.jpg";
images[1] = "/imgs/img2.jpg";
images[2] = "/imgs/img3.jpg";
images[3] = "/imgs/img4.jpg";

//selecting img buttons function
nextBtn.addEventListener("click", () =>{
    document.slide.src = images[index];
    index++;
    if(index > images.length -1){
        index = 0;
    }
    
})
prevBtn.addEventListener("click", ()=>{
    document.slide.src = images[index];
    index--;
    if(index < 0){
        index = images.length - 1;
    }
})


//change img time function
/* function changeImage(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++
    }else{
        i = 0;
    }
    setTimeout("changeImage()", time);
} */


