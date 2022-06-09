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
    const levelTitle = document.querySelector(".level-title");



// add/remove border on level title
const stopInterval = setInterval(borderToggle, 1000)
function borderToggle(){
    levelTitle.classList.toggle("border-2")
}


})