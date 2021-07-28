var btnLeft = document.querySelector("._2nut .left"),
    btnRight = document.querySelector("._2nut .right"),
    slides = document.querySelectorAll(".slides ul li"),
    lengthSlides = slides.length,
    positionCurrent  = 0,
    status = "Stopped";
    // console.log(btnLeft);
    // console.log(btnRight);
    // console.log(slides);


var clickBtnRight = function(){
    if(status == "Moving"){return false;}
    status = "Moving";
    var statusCurrent = 0;
    var elementCurrent = slides[positionCurrent];
    if(positionCurrent < lengthSlides -1)
    {
        positionCurrent++;
    }else{
        positionCurrent = 0;
    }
    var elementNext = slides[positionCurrent];
    elementCurrent.classList.add("getOut");
    elementNext.classList.add("getIn");
    console.log(elementCurrent);
    console.log(elementNext);
    //function webkitAnimationEnd
    var currentEnd = function(){
        elementCurrent.classList.remove("active");
        elementCurrent.classList.remove("getOut");
        statusCurrent++;
        if(statusCurrent  == 2){status = "Stopped";}
    }
    var nextEnd = function(){
        elementNext.classList.remove("getIn");
        elementNext.classList.add("active");
        statusCurrent++;
        if(statusCurrent  == 2){status = "Stopped";}
    }
    elementCurrent.addEventListener("webkitAnimationEnd",currentEnd);
    elementNext.addEventListener("webkitAnimationEnd",nextEnd);





}
var clickBtnLeft  = function(){
    if(status == "Moving"){
        return false;
    }
    status = "Moving";
    var statusCurrent = 0;
   var elementCurrent = slides[positionCurrent];
   if(positionCurrent > 0){positionCurrent--}
   else{
       positionCurrent = lengthSlides -1;
   }
   var elementNext = slides[positionCurrent];
 /*   console.log(elementCurrent)
   console.log(elementNext) */
   elementCurrent.classList.add("getOutClickPre");
   elementNext.classList.add("getInClickPre");
   var currentEnd = function(){
        elementCurrent.classList.remove("active");
        elementCurrent.classList.remove("getOutClickPre");
        statusCurrent++;
        if(statusCurrent ==2){status="Stopped";}
   }
   var nextEnd = function(){
    elementNext.classList.add("active");
    elementNext.classList.remove("getInClickPre");
    statusCurrent++;
    if(statusCurrent ==2){status="Stopped";}

    }   
   elementCurrent.addEventListener("webkitAnimationEnd",currentEnd);
   elementNext.addEventListener("webkitAnimationEnd",nextEnd);
}

btnRight.addEventListener("click",clickBtnRight);
btnLeft.addEventListener("click",clickBtnLeft);