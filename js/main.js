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
    // import js
    //Scrores
    let positiveScores = 0;
    let negativeScores = 0; 
    let stopScoreInterval = "";

    // all selectors
    const scoresID = document.getElementById("scores");
    const negativeScore = document.querySelector("#negativeScores span");
    const levelTitle = document.querySelector(".level-title");
    const level = document.querySelectorAll(".level");
    const randomRoad = document.querySelector(".random-road");
    const boundaryTop = document.querySelector(".boundary-top");
    const boundaryBottom = document.querySelector(".boundary-bottom");
    const roadBox = document.querySelector(".road-box");
  




// add event listener on multiple same element
for (let i = 0; i < level.length; i++) {
    level[i].addEventListener("click", ()=>detectLevel(level[i]))
    
}


randomRoad?.addEventListener("mousedown",function(){
    stopScoreInterval  = setInterval(incrementScore, 1000);
    this.addEventListener("mousemove",function(){
        // boundary touch event
        boundaryTop.addEventListener("mouseover", detectBoundary);
        boundaryBottom.addEventListener("mouseover", detectBoundary);
});
    // if mouse out of the element then remove EventListerner
    this.addEventListener("mouseup",function(){
          
    });
})

// increment score
function incrementScore(){
    positiveScores += 1;
    scoresID.innerText = positiveScores;
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
      setTimeout(()=>   window.location.replace("level-one.html"), 1000)
    }
    else if(selectedLevel.classList.contains("two")){
        selectedLevel.classList.add("border-2")
        setTimeout(()=>  window.location.replace("level-two.html"), 1000)
    }
    else if(selectedLevel.classList.contains("three")){
        selectedLevel.classList.add("border-2")
        setTimeout(()=> window.location.replace("level-three.html"), 1000)
    }
}

// detect boundary touch
function detectBoundary(){
    // stop score counting
    clearInterval(stopScoreInterval);

    // increment negative score
    countNegativeScore();
}

// increment negative score
function countNegativeScore(){
    // calculate negative scores
    negativeScores +=1;
    negativeScore.innerHTML = negativeScores;
}

// create a line 
const coordinates = [10,10, 300,50];
/*
start-coordinate = sx
start-coordinate = sy
x-width = xw;
x-height = xh;
x-position = px;
y-position = py;

*/
const linePosition = [];
let prevSx = 0;
let prevSy = 0;
function createLine(sx, sy, xw, xh){
    linePosition.push({sx,sy,xw, xh});
    const lineLength = linePosition.length;
    if(lineLength >1){
        prevSx = linePosition[lineLength-2].sx;
        prevSy = linePosition[lineLength-2].sy;
    }
    const line = document.createElement("span");
    line.setAttribute("class", "road")
    line.style = `position:absolute; background:yellow; width:${xw}px; height:${xh}px; left:${sx+prevSx}px; top:${sy+prevSy}px`;
    roadBox.appendChild(line);
    // console.log(roadBox);
    // addEvent listerner on road 
}

createLine(100,100, 300, 20);
createLine(300,0, 20, 300);
createLine(100,400, 300,20);
createLine(600,-180, 20,200);
createLine(100,400, 300, 20);


const road = document.querySelectorAll(".road");
for (let i = 0; i < road.length; i++) {
    road[i].addEventListener("mousedown", function(){
        stopScoreInterval  = setInterval(incrementScore, 1000);
        road[i].addEventListener("mouseout", ()=> console.log('out'))
    })
       
}



// Endline
})