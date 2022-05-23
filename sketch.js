function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES)

}

function draw() {

  background(30);

  rotateX(60)



  noFill()

  stroke(255)

  for (var i = 0; i < 60; i++) {

  // var r = map(sin(frameCount/ 2 ), -1, 1,100 ,200)
  // var g = map(i, 0, 50, 100, 255)
  // var b = map(sin(frameCount ), -1, 1, 200 ,100)

stroke(255,215,0)



rotate( 2 )


    beginShape()
    for (var j = 0; j < 360; j += 60) {
      var rad = i * 3
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 5) * 50

      vertex(x,y,z)
    }
    endShape(CLOSE)

  }
}
