window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('backdrop', 'assets/Hospital.png');
    game.load.image('card', 'assets/Doktor.gif');
	//game.load.audio('Musik', ['assets/Air Battle.ogg']);
	//game.load.audio('soundOfFreedom', ['assets/F-14 Tomcat fly by with sonic boom.wav', 'assets/F-14 Tomcat fly by with sonic boom.ogg']);
}
var cursors;
var music;
var text;
var launched = false;
var doktor;
var stateText;
function create() {
	text = game.add.text(game.world.centerX, game.world.centerY, "Welcome! You've won the world's greatest lottery! You've joined Unit 137\n No, I don't mean 731\n Anyway, the Fighting 137th is known for one thing and one thing only, advancing science!\n Listen, I'm sure these 731 fellows also talked about science, but I have no idea who they are.\n Anyway, it's time to go see what we've set up for you.", { font: "20px Times New Roman", fill: "#FFF", align: "center" });
	text.anchor.setTo(0.5, 0.5);
	game.input.onDown.addOnce(removeText, this);
	function removeText()
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0, 0, 800, 600);
		game.add.sprite(0, 0, 'backdrop');
		doktor = game.add.sprite(10,550, 'card');
		doktor.scale.set(4);
		doktor.anchor.setTo(0.5, 0.5);
		text = game.add.text(game.world.centerX, game.world.centerY, "This will be your bed, any questions?", { font : "20px Georgia", fill: "#000", align: "center"});
		game.input.onDown.addOnce(response, this);
		function response()
		{
			text.visible = false;
			text = game.add.text(game.world.centerX, game.world.centerY + 20, "W. You bet your ass I have questions!\n What the hell is all this, is that sunrise?", { font: "20px Georgia", fill: "#000", align: "center"});
			text.visible = true;
			stateText = game.add.text(game.world.centerX, game.world.centerY - 20, "S. Um...I don't think so...", { font: "20px Georgia", fill:"#000", align:"center"});
			if (game.input.keyboard.isDown(Phaser.Keyboard.W))
			{
				optionOne();
			}
			else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
			{
				optionTwo();
			}
			function optionOne()
			{
				text.visible = false;
				stateText.visible = false;
			}
			function optionTwo()
			{
				text.visible = false;
				stateText.visible = false;
			}
		}
		launched = true;
	}
}

function update() {
	if(launched)
	{
		/*card.body.velocity.x = 0;
		card.body.velocity.y = 0;
		card.body.angularVelocity = 0;
	
		card.body.angularAcceleration = 0;
	
		if (game.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			card.body.angularAcceleration -= 2500;
		}
		else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			card.body.angularAcceleration += 2500;
		}


		if (game.input.keyboard.isDown(Phaser.Keyboard.W))
		{
			game.physics.arcade.velocityFromAngle(card.angle, 300, card.body.velocity);
		}

		game.world.wrap(card, 0, true);*/
		if (game.input.keyboard.isDown(Phaser.Keyboard.W))
		{
				optionOne();
		}
		else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
		{
				optionTwo();
		}
	}
}

function render() {

}
};
