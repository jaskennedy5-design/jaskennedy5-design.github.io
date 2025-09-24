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
    createPlatform(-50, -40, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); // bottom wall
    createPlatform(-40, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width - 10, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height)
    createPlatform(-50, 650, 300, 100);
    createPlatform(600, 240, 300, 500);
    createPlatform(300, 550, 50, 10);
    createPlatform(400, 450, 50, 10);
    createPlatform(500, 350, 50, 10);
    createPlatform(100, 240, 200, 10);
    createPlatform(1200, 650, 300, 100);
    createPlatform(1200, 300, 50, 10);
    createPlatform(1000, 450, 50, 10);
    createPlatform(1100, 550, 50, 10);
    createPlatform(900, 350, 50, 10);

    // TODO 3 - Create Collectables
    //createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and .99)
    //type can be any of these. In "". database diamond grace kennedi max steve
    createCollectable("penguin", 175, 200, 1, 0);
    createCollectable("penguin", 1200, 250, 1, 0);
    createCollectable("penguin", 1000, 700, 1, 0);

    // TODO 4 - Create Cannons
    //createCannon(wallLocation, position, timeBetweenShots, width, height)
    createCannon("left", 200, 1500);
    createCannon("top", 350, 1500);
    createCannon("right", 700, 700);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
