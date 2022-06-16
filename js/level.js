$(document).ready(function(){
    const selectLevel = localStorage.getItem("level")
    const levels = [
        [
            "0, 0, 300, 20, 300,0, 20, 400,300, 400, 300, 20, 600,220, 20, 200, 600, 200, 500, 20",
            "0,100,300,20, 300,0,20,400, 300, 400,100, 20, 400,0, 20,420, 400, 0, 800, 20, 1200, 0, 20, 200, 1200, 200, 100, 20",
            "0,100,600,20, 600,0,20,200, 600,200,50,20, 650, 0, 20,220, 650, 0, 600, 20",
            "0,100,800,20, 800,0,20,200, 800,200,200,20",
            "0,200,1200,20",
            "0,300,50,20, 50,-280, 20,300, 50, -280, 1200, 20",
            "0,300,50,20, 50,-280, 20,300, 50, -280, 1200, 20, 1250, -280, 20, 400",
            "20,20, 200, 20, 200,0,20,450, 200, 450, 600, 20",
            "20,20, 200, 20, 200,0,20,450, 200, 450, 600, 20, 800, 50, 20, 420, 800, 50, 300, 20",
            "0,0, 700, 20, 700,0, 20, 450, 700, 450, 300,20"
        ],
        [
            "0, 0, 300, 12, 300,0, 12,400,300, 400, 300, 12, 600,212, 12, 200, 600, 200, 500, 12",
            "0,100,300,12, 300,0,12,400, 300, 400,100, 12, 400,0, 12,412, 400, 0, 800, 12, 1200, 0, 12, 200, 1200, 200, 100, 12",
            "0,100,600,12, 600,0,12,200, 600,200,50,12, 650, 0,12,212, 650, 0, 600, 12",
            "0,100,800,12, 800,0,12,200, 800,200,200,12",
            "0,200,1200,12",
            "0,300,50,12, 50,-280, 12,292, 50, -280, 1200, 12",
            "0,300,50,12, 50,-280, 12,292, 50, -280, 1200, 12, 1250, -280, 12, 400",
            "20,20, 200, 12, 200,0,12,450, 200, 450, 600, 12",
            "20,20, 200, 12, 200,0,12,450, 200, 450, 600, 12, 800, 50, 12, 412, 800, 50, 300, 12",
            "0,0, 700, 12, 700,0, 12, 450, 700, 450, 300,12"
        ],
        [
            "0, 0, 300, 8, 300,0, 8,400,300, 400, 300, 8, 600,208, 8, 200, 600, 200, 500, 8",
            "0,100,300,8, 300,0,8,400, 300, 400,100, 8, 400,0, 8,408, 400, 0, 800, 8, 1200, 0, 8, 200, 1200, 200, 100, 8",
            "0,100,600,8, 600,0,8,200, 600,200,50,8, 650, 0,8,208, 650, 0, 600, 8",
            "0,100,800,8, 800,0,8,200, 800,200,200,8",
            "0,200,1200,8",
            "0,300,50,8, 50,-280, 8,288, 50, -280, 1200, 8",
            "0,300,50,8, 50,-280, 8,288, 50, -280, 1200, 8, 1250, -280, 8, 400",
            "20,20, 200, 8, 200,0,8,450, 200, 450, 600, 8",
            "20,20, 200, 8, 200,0,8,450, 200, 450, 600, 8, 800, 50, 8, 408, 800, 50, 300, 8",
            "0,0, 700, 8, 700,0, 8, 450, 700, 450, 300,8"
        ]
    ]
    //Scrores
    let positiveScores = 0;
    let negativeScores = 0; 
    let stopScoreInterval = "";
    let mouseDown = false;

// select element to show output score
const scoresID = document.getElementById("scores");
const negativeScore = document.querySelector("#negativeScores span");
      
// increment score
function incrementScore(){
    positiveScores += 1;
    scoresID.innerText = positiveScores;
}
// increment negative score
function countNegativeScore(e){
    if(e.relatedTarget.classList.contains("road-box")){
        negativeScores +=1;
        negativeScore.innerHTML = negativeScores;
    }
}
// generate random line
function generateLine(argumentsList){
    const line = document.querySelector(".line");
    const lineArr = argumentsList?.split(",");
    const coordinates = [];
    const xy = [];
    const wh = [];

    for (let i = 0; i < lineArr?.length; i++) {
        if(i%2 == 0){
            coordinates.push({x:lineArr[i], y:lineArr[i+1]})
        }
    }
// detect coordinate value 
coordinates.map((coordinate, index)=>{
    if(index %2 == 0){
        xy.push(coordinate);
    }else{
        wh.push(coordinate);
    }
})

for (let i = 0; i < xy.length; i++) {
    
    if(line.children.length > 0){
        const sub_line = document.createElement("div");
        sub_line.setAttribute("class", "sub-line")
        sub_line.style =`left:${xy[i].x}px; top:${xy[i].y}px; width:${wh[i].x}px; height:${wh[i].y}px; background:yellow `;
        line.children[0].appendChild(sub_line)
    }else{
        const sub_line = document.createElement("div");
        sub_line.setAttribute("class", "sub-line")
        sub_line.style =`left:${xy[i].x}px; top:${xy[i].y}px; width:${wh[i].x}px; height:${wh[i].y}px; background:yellow `;
        line.appendChild(sub_line)
    }
}
}
$(".line").on("mousedown", function(){
    if(!mouseDown){
        stopScoreInterval  = setInterval(incrementScore, 1000);
        mouseDown = true;
    }
    $(this).on("mouseout",countNegativeScore);
    $(this).css({background:"red"})
});

// select random coordinate to draw line
function selectCoordinate(randomIndex){
    generateLine(levels[selectLevel-1][randomIndex])
}
// generate random number according to lines array length
function generateRandomNumber(){
    const max = levels[selectLevel-1].length;
    const randomNumber = Math.floor(Math.random() * max);
    selectCoordinate(randomNumber);
   
}
generateRandomNumber();



})