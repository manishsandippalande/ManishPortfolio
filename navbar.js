
//     const scrollbtn = document.getElementById("scrollbtn");
//     const eduslider = document.getElementById("edu-slider");

// scrollbtn.addEventListener("click", function(){
//     // eduslider.scrollBy(50,0);
//     const scrollAmount = 50; // You can change this value
//     scrollableDiv.scrollLeft -= scrollAmount;
// })






document.addEventListener("DOMContentLoaded", function () {
    const scrollLeftButton = document.getElementById("scrollbtn");
    const eduslider = document.getElementById("edu-slider");

    const skillbtn = document.getElementById("skillbtn");
    const skillslider = document.getElementById("skill-slider");
  
    scrollLeftButton.addEventListener("click", function () {
      eduslider.scrollLeft += 700;
    });

    skillbtn.addEventListener("click", function () {
      skillslider.scrollLeft+=400;
    });








    
});