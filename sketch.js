
var maranhao;
var mattogrosso;

var regions = [];
var regionIndex = 0;

//ignore first and last cells
//make ruleset function
function setup () {
    createCanvas(800, 600);

    //create a cellular autoamta for maranhao
    //gridWidth = 60
    //gridHeight = 40
    //limit = 100 (the maximum number of activated cells)
    //color = '#ff0000'
    maranhao = new CellularAutomata("Maranhao", 60, 40, 100, '#ff0000');
    mattogrosso = new CellularAutomata("Matto Grosso", 60, 40, 10, '#00ff00');

    //make a list of all regions
    regions.push(maranhao);
    regions.push(mattogrosso);
    frameRate(10);
}

function draw () {
    background(0);

    //update and draw all regions
    for (var i = 0; i < regions.length; i++) {
        regions[i].update();
        regions[i].draw();
    }

}

// mouse press to change the value of a grid cell
function mousePressed () {

    //each mouse click activates another region
    if (regionIndex < regions.length) {
        regions[regionIndex].mousePressed(mouseX, mouseY);
        regionIndex++;
    }

}

