window.addEventListener("load", function(){
// predefined line
const lines = [
    "200, 100, 200, 300, 400, 300,400,200, 800,200, 800, 400, 100, 400",
    "100, 100, 200, 300, 300,200, 200, 200, 200, 100, 400, 100, 400, 300, 1200, 300,1200, 200, 1250, 200",
    "200, 100, 400, 100, 400, 300, 1200, 300,1200, 200, 1250, 200",
    "200, 100, 200, 300, 400, 300,400,200, 800,200, 800, 300, 1200, 300",
    "100, 100, 30, 200, 100, 200,400,200, 300,400, 500, 300, 1000, 300, 1000, 400, 1200,400",
];

// draw a line
function drawLine(line){
    const lineArr = line?.split(",");
    const coordinates = [];
    const canvas = document.getElementById("canvas_line");
    const context = canvas.getContext("2d");
    context.beginPath();
    context.lineWidth = "20";
    context.moveTo(10, 100);
    for (let i = 0; i < lineArr?.length; i++) {
        if(i%2 == 0){
            coordinates.push({x:lineArr[i], y:lineArr[i+1]})
        }
    }
    coordinates.map(coordinate =>{
        context.lineTo(coordinate.x, coordinate.y)
    })
    context.strokeStyle ="orange"
    context.stroke();
    
}
// select random coordinate to draw line
const coor = []
function selectCoordinate(randomIndex){
    drawLine(lines[randomIndex])
}

// generate random number according to lines array length
function generateRandomNumber(){
    const max = lines.length;
    const randomNumber = Math.floor(Math.random() * max);
    selectCoordinate(randomNumber);
   
}
generateRandomNumber();

// add event
document.getElementById("canvas_line").addEventListener("mouseout", function(){

})



// endline
});