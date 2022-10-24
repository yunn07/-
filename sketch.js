function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("#F5F5DC");
  //ellipse(25,25,50)  //大圓
  rectMode(CENTER)
  //rect(25,25,25)     //正方形
  //ellipse(25,25,25)  //小圓

  //ellipse(25+50,25,50)
  //rect(25+50,25,25)
  //ellipse(25+50,25,25)

 
  noFill()
  strokeWeight(2)    //框線粗細為2

  var w= mouseX/8

  for(var i=0;i<width/50;i++)
  {
    for(var j=0;j<height/50;j++)
    {
    stroke("#2A52BE")
    ellipse(25+50*i,25+50*j,w)
    stroke("#990036")
    rect(25+50*i,25+50*j,mouseY/6)
    stroke("#BDB76B")
    ellipse(25+50*i,25+50*j,25)
    }
  
  }
}