var database;
var gameState=0;
var playerCount,form,player,game;
var allPlayers;
var distance=0;
var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(windowWidth-20, windowHeight-30);

    database=firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}