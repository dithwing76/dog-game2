var doggy, database;
var position;
var foodStock,dog,happydog,foodS = 20
var dog, i =1
var feedbttn,refilbttn
var outline1,outline2

var foodimg
var food
var food1,food2,food3,food4,food5
var food6,food7,food8,food9,food10

var food1x,food2x,food3x,food4x,food5x
var food6x,food7x,food8x,food9x,food10x
function preload(){
    dog =loadImage("Dog.png")
    happydog =loadImage("happydog.png")
    foodimg =loadImage("Milk.png")
}
function setup(){
    database = firebase.database();

    createCanvas(500,500);

    doggy = createSprite(400,250,10,10);
    doggy.addImage(dog)
    doggy.scale = 0.1

    outline1= createSprite(300,15,75,25)
    outline1.shapeColor ="black"
    feedbttn = createSprite(300,15,70,20)
    feedbttn.shapeColor ="white"
    
    

    outline2= createSprite(425,15,75,25)
    outline2.shapeColor ="black"
    refilbttn = createSprite(425,15,70,20)
    refilbttn.shapeColor ="white"
    
    food =createSprite(337,250)
    food.addImage(foodimg)
    food.scale=0.1
    food.rotation = 90
    food.visible =false


    food1 = createSprite(25,150)
    food1.addImage(foodimg)
    food1.scale=0.1
    
    food2 = createSprite(50,150)
    food2.addImage(foodimg)
    food2.scale=0.1

    food3 = createSprite(75,150)
    food3.addImage(foodimg)
    food3.scale=0.1

    food4 = createSprite(100,150)
    food4.addImage(foodimg)
    food4.scale=0.1

    food5 = createSprite(125,150)
    food5.addImage(foodimg)
    food5.scale=0.1

    food6 = createSprite(150,150)
    food6.addImage(foodimg)
    food6.scale=0.1
    
    food7 = createSprite(175,150)
    food7.addImage(foodimg)
    food7.scale=0.1

    food8 = createSprite(200,150)
    food8.addImage(foodimg)
    food8.scale=0.1

    food9 = createSprite(225,150)
    food9.addImage(foodimg)
    food9.scale=0.1

    food10 = createSprite(250,150)
    food10.addImage(foodimg)
    food10.scale=0.1

    food1x = createSprite(25,250)
    food1x.addImage(foodimg)
    food1x.scale=0.1
    
    food2x = createSprite(50,250)
    food2x.addImage(foodimg)
    food2x.scale=0.1

    food3x = createSprite(75,250)
    food3x.addImage(foodimg)
    food3x.scale=0.1

    food4x = createSprite(100,250)
    food4x.addImage(foodimg)
    food4x.scale=0.1

    food5x = createSprite(125,250)
    food5x.addImage(foodimg)
    food5x.scale=0.1

    food6x = createSprite(150,250)
    food6x.addImage(foodimg)
    food6x.scale=0.1
    
    food7x = createSprite(175,250)
    food7x.addImage(foodimg)
    food7x.scale=0.1

    food8x = createSprite(200,250)
    food8x.addImage(foodimg)
    food8x.scale=0.1

    food9x = createSprite(225,250)
    food9x.addImage(foodimg)
    food9x.scale=0.1

    food10x = createSprite(250,250)
    food10x.addImage(foodimg)
    food10x.scale=0.1

    //foodStock=database.ref('Food');
    //foodStock.on("value",readStock)
}

function draw(){
    background("cyan");
    //if(keyDown(LEFT_ARROW)){
        //changePosition(-1,0);
    //}
    //else if(keyDown(RIGHT_ARROW)){
        //changePosition(1,0);
    //}
    //else 
    if(mouseIsOver(refilbttn) ){
        refilbttn.shapeColor ="grey"
        if(mouseWentDown("leftButton")&&i ==1){
        //changePosition(0,-1);
        
        foodS = foodS +1
        
        }
    }else{
        refilbttn.shapeColor ="white"
    }
    if(mouseIsOver(feedbttn) ){
        feedbttn.shapeColor ="grey"
        if(mouseWentDown("leftButton")&&i ==1){
        //changePosition(0,-1);
        doggy.addImage(happydog)
        foodS = foodS -1
        i = 0
        food.visible =true
        }
    }else{
        feedbttn.shapeColor ="white"
    }
    //else if(keyDown(DOWN_ARROW)){
        //changePosition(0,+1);
    //}
    drawSprites();
    if (frameCount%60 === 0&&i==0){
        doggy.addImage(dog)
        i = 1
        food.visible =false
    }
    
    if (foodS>20){
        foodS =20
    }

    if(foodS>0){
        food1.visible =true
    }else{
        food1.visible =false
    }

    if(foodS>1){
        food2.visible =true
    }else{
        food2.visible =false
    }

    if(foodS>2){
        food3.visible =true
    }else{
        food3.visible =false
    }

    if(foodS>3){
        food4.visible =true
    }else{
        food4.visible =false
    }

    if(foodS>4){
        food5.visible =true
    }else{
        food5.visible =false
    }

    if(foodS>5){
        food6.visible =true
    }else{
        food6.visible =false
    }

    if(foodS>6){
        food7.visible =true
    }else{
        food7.visible =false
    }

    if(foodS>7){
        food8.visible =true
    }else{
        food8.visible =false
    }

    if(foodS>8){
        food9.visible =true
    }else{
        food9.visible =false
    }

    if(foodS>9){
        food10.visible =true
    }else{
        food10.visible =false
    }

    if(foodS>10){
        food1x.visible =true
    }else{
        food1x.visible =false
    }

    if(foodS>11){
        food2x.visible =true
    }else{
        food2x.visible =false
    }

    if(foodS>12){
        food3x.visible =true
    }else{
        food3x.visible =false
    }

    if(foodS>13){
        food4x.visible =true
    }else{
        food4x.visible =false
    }

    if(foodS>14){
        food5x.visible =true
    }else{
        food5x.visible =false
    }

    if(foodS>15){
        food6x.visible =true
    }else{
        food6x.visible =false
    }

    if(foodS>16){
        food7x.visible =true
    }else{
        food7x.visible =false
    }

    if(foodS>17){
        food8x.visible =true
    }else{
        food8x.visible =false
    }

    if(foodS>18){
        food9x.visible =true
    }else{
        food9x.visible =false
    }

    if(foodS>19){
        food10x.visible =true
    }else{
        food10x.visible =false
    }

    if(foodS<0){
        foodS = 0
    }
    fill ("black")
    

    text ("feed dog",280,20)
    text ("add food",400,20)
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPositon(data){
    position = data.val
    ball.x =position.x
    ball.y =position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
        'x': position.x+x,
        'y': position.y+y        
    })

}