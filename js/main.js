/*
---------------------------------------------------------
Project name: Random Road Racing Game.
Author: Sohel Rana
Start Date: 09-06-2022
End Date: .........................
---------------------------------------------------------
*/
// when html document will be 100% loaded functin will be execute
window.addEventListener("load", function(){
    // all selectors
    const levelTitle = document.querySelector(".level-title");
    const level = document.querySelectorAll(".level");
    const randomRoad = document.querySelector(".random-road");
    const boundaryTop = document.querySelector(".boundary-top");
    const boundaryBottom = document.querySelector(".boundary-bottom");



// events occurse
for (let i = 0; i < level.length; i++) {
    level[i].addEventListener("click", ()=>detectLevel(level[i]))
    
}

boundaryBottom.addEventListener("mousedown",function(){
    
    // boundary touch event
    boundaryTop.addEventListener("mouseover", detectBoundary);
    boundaryBottom.addEventListener("mouseover", detectBoundary);
})




// add/remove border on level title
const stopInterval = setInterval(borderToggle, 1000)
function borderToggle(){
   if(levelTitle){
    levelTitle.classList.toggle("border-2")
   }
};

// detect selected game level and redirect to level page
function detectLevel(selectedLevel){
    if(selectedLevel.classList.contains("one")){
      setTimeout(()=>   window.location.replace("level-one.html"), 500)
    }
    else if(selectedLevel.classList.contains("two")){
        setTimeout(()=>  window.location.replace("level-two.html"), 500)
    }
    else if(selectedLevel.classList.contains("three")){
        setTimeout(()=> window.location.replace("level-three.html"), 500)
    }
}

// detect boundary touch
function detectBoundary(){
    alert('touch');
}

})