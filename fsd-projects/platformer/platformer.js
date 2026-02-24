$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    toggleGrid();

    // TODO 2 - Create Platforms
    //createPlatform(xPos, yPos, Width, Height, "Color")
    createPlatform(300, 620, 100, 25);
    createPlatform(600, 555, 100, 25);
    createPlatform(700, 555, 100, 200);
     createPlatform (1100, 650, 100, 25);
      createPlatform (1300, 525, 100, 25);
       createPlatform (1100, 425, 100, 25);
       createPlatform (1300, 325, 100, 25);
       createPlatform (1100, 225, 100, 25);
       createPlatform (900, 225, 100, 25);
       createPlatform (700, 225, 100, 25);
       createPlatform (500, 225, 100, 25);
       createPlatform (300, 225, 100, 25);
       

    // TODO 3 - Create Collectables
    createCollectable("hallejr", 1125, 170);
    createCollectable("hallejr", 650, 700);
     createCollectable("hallejr", 325, 175);



  
    // TODO 4 - Create Cannons
    //createCannon("top / right / bottom / left", position, Speed);
createCannon("top",200,1750);
createCannon("top",510,1750);
createCannon("top",710,1750);
createCannon("top",910,1750);
createCannon("top",1110,1750);
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
