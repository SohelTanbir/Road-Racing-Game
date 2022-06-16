/*
---------------------------------------------------------
Project name: Random Road Racing Game.
Author: Sohel Rana
Start Date: 09-06-1022
End Date: .........................
---------------------------------------------------------
*/
// when html document will be 100% loaded functin will be execute
$(document).ready(function(){
    // all selectors
    const levelTitle = document.querySelector(".level-title");
    const level = document.querySelectorAll(".level");
   
// add event listener on multiple same element
for (let i = 0; i < level.length; i++) {
    level[i].addEventListener("click", ()=>detectLevel(level[i]))
}

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
        selectedLevel.classList.add("border-2")
      setTimeout(()=>   window.location.replace("level-one.html"), 1000);
      localStorage.setItem("level", "1")
    }
    else if(selectedLevel.classList.contains("two")){
        selectedLevel.classList.add("border-2")
        setTimeout(()=>  window.location.replace("level-two.html"), 1000);
        localStorage.setItem("level", "2");
    }
    else if(selectedLevel.classList.contains("three")){
        selectedLevel.classList.add("border-2")
        setTimeout(()=> window.location.replace("level-three.html"), 1000);
        localStorage.setItem("level", "3")
    }
    // stop borderToggle function
    clearInterval(stopInterval);
}
// Endlinel
})
