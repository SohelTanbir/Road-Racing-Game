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




// events occurse
for (let i = 0; i < level.length; i++) {
    level[i].addEventListener("click", ()=>detectLevel(level[i]))
    
}

// add/remove border on level title
const stopInterval = setInterval(borderToggle, 1000)
function borderToggle(){
    levelTitle.classList.toggle("border-2")
};

// detect selected game level
function detectLevel(selectedLevel){
    if(selectedLevel.classList.contains("one")){
        window.location.replace("level-one.html")
    }
    else if(selectedLevel.classList.contains("two")){
        window.location.replace("level-two.html")
    }
    else if(selectedLevel.classList.contains("three")){
        window.location.replace("level-three.html")
    }
}


})