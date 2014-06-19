// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    create: function() {
//        this.bird = this.game.add.sprite(100, 245, 'bird');
        this.bird = this.game.add.sprite(100, 245, 'birdAnimation');
        this.bird.animations.add('fly');
        this.bird.animations.play('fly', 10, true);
        this.bird.anchor.setTo(0.5, 0.5);
        this.bird.body.gravity.y = 1000;

        this.pipes = [];
        this.game.input.onDown.add(this.jump, this);

        this.timer = this.game.time.events.loop(1500, this.addPipes, this);

        this.score = 0;
        var style = { font: '30px Arial', fill: '#ffffff'};
        this.label_score = this.game.add.text(20, 20, '0', style);
    }
    
    , update: function() {
		if(this.bird.y > game.height){
            this.finishGame();
        }

        if (this.bird.angle < 20){
            this.bird.angle += 1;
        }

        if(this.pipes.length > 0){
            if(this.pipes[0].x < -100){
                this.deletePipes();
            }
        }

        this.game.physics.overlap(this.bird, this.pipes, this.finishGame, null, this);
    }

    , jump: function() {
        this.bird.body.velocity.y = -350;
        this.bird.angle = -20;
        this.game.sound.play('jump');
    }

    , finishGame: function(){
        this.game.sound.play('hit');
        this.game.time.events.remove(this.timer);
        this.game.state.start('finish');
    }

    , addPipes: function(){
        var hole = Math.ceil(Math.random()*5);
        for(var i=0; i<8; i++){
            if(i != hole && i != hole+1){
                var pipe = this.game.add.sprite(400, i*60+10, 'pipe');
                pipe.body.velocity.x = -200;
                this.pipes.push(pipe);
            }
        }

        this.score += 1;
        this.label_score.content = this.score;
        this.game.sound.play('score');
    }

    , deletePipes: function(){
        for(var i=0; i<6; i++){
            this.pipes[0].destroy(true);
            this.pipes.shift();
        }
    }
};



var boot_state = {
    preload: function() {
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'assets/bird.png');
        this.game.load.spritesheet('birdAnimation', 'assets/birdAnimation.png', 102/3, 24);
        this.game.load.image('pipe', 'assets/pipe.png');

        // -------- UI ---------------
        this.game.load.image('logo', 'assets/logo.png');
        this.game.load.image('startButton', 'assets/startButton.png');
        this.game.load.image('replayButton', 'assets/replayButton.png');
        this.game.load.image('instructions', 'assets/instructions.png');
        this.game.load.image('gameOver', 'assets/gameOver.png');
        this.game.load.image('scoreBoard', 'assets/scoreBoard.png');

        // ---------- Audio ------------
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.audio('hit', 'assets/hit.wav');
        this.game.load.audio('score', 'assets/score.wav');
    }

    , create: function(){
        this.game.state.start('menu');
    }
}

var menu_state = {
    create: function(){
        this.logo = this.game.add.sprite(this.game.width/2, 250, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
        this.startButton = this.game.add.button(this.game.width/2, 350, 'startButton', this.startIntro, this);
        this.startButton.anchor.setTo(0.5, 0,5);
    }

    , startIntro: function(){
        this.game.state.start('intro');
    }
}


var intro_state = {
    create: function(){
        this.instructions = this.game.add.sprite(this.game.width/2, 250, 'instructions');
        this.instructions.anchor.setTo(0.5, 0.5);
        this.instructions.inputEnabled = true;
        this.instructions.events.onInputDown.add(this.startGame, this);
    }

    , startGame: function(){
        this.game.state.start('main');
    }
}

var finish_state = {
    create: function(){
        this.gameOver = this.game.add.sprite(game.width/2, 100, 'gameOver');
        this.gameOver.anchor.setTo(0.5, 0,5);
        this.scoreBoard = this.game.add.sprite(game.width/2, 200, 'scoreBoard');
        this.scoreBoard.anchor.setTo(0.5, 0,5);
        this.restartButton = this.game.add.button(this.game.width/7*2, 350, 'replayButton', this.restartGame, this);
        this.restartButton.anchor.setTo(0.5, 0,5);
        this.menuButton = this.game.add.button(this.game.width/7*5, 350, 'startButton', this.goToMenu, this);
        this.menuButton.anchor.setTo(0.5, 0,5);
    }

    , restartGame: function(){
        this.destroy();
        this.game.state.start('main');
    }

    , goToMenu: function(){
        this.game.state.start('menu');
    }
    
    , destroy: function(){
        
    }
}

// Add and start the 'main' state to start the game
game.state.add('boot', boot_state);
game.state.add('menu', menu_state);
game.state.add('intro', intro_state);
game.state.add('main', main_state);
game.state.add('finish', finish_state);
game.state.start('boot');


var Grid = Class.extend({
    init: function(){
        this.list = [];
    }
    
    , createTiles: function(){
        for(var i=0, l=4; i<l; i++){
            this.list.push( new Tile(x, y) );
        }
    }
})

var Tile = Class.extend({
    init: function(x, y){
        
    }
})

var Object = Class.extend({
    init: function(){
        
    }
    
    , draw: function(){
        
    }
    
    , show: function(){
        
    }
    
    , destroy: function(){
        
    } 
})



CONFIG = {
    levels: [
        { shapeCount: 2, gridSize: 2 }
        , { shapeCount: 3, gridSize: 3 }
    ]
}