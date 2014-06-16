var game, tileSize, grid, correctShape, shapes, gameColours;
var colourArray = ['black', 'red', 'yellow'];
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;

game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser'); //{preload: preload, create: create});

var main_state = {
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.spritesheet('tile', 'assets/tile.png', 100, 100, 2);
        this.game.load.spritesheet('black', 'assets/black.png', 100, 100, 4);
        this.game.load.spritesheet('red', 'assets/red.png', 100, 100, 4);
        this.game.load.spritesheet('yellow', 'assets/yellow.png', 100, 100, 4);
        this.game.load.image('shapebg', 'assets/shapebg.png');
    }
    
    ,create: function(){
        
        grid = new Grid(CONFIG.levels[0]);
        correctShape = new Shape();
    }
}

game.state.add('main', main_state);
game.state.start('main');