var game, tileSize;
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;

game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser'); //{preload: preload, create: create});

var main_state = {
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.spritesheet('tile', 'assets/tile.png', 100, 100, 2);
    }
    
    ,create: function(){
        
        new Grid(CONFIG.levels[0].gridSize);
    }
}

game.state.add('main', main_state);
game.state.start('main');