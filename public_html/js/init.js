var game, tileSize, grid, correctShape, shapes;
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;

game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser'); //{preload: preload, create: create});

var main_state = {
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.spritesheet('tile', 'assets/tile.png', 100, 100, 2);
        this.game.load.spritesheet('black', 'assets/black.png', 100, 100, 4);
        this.game.load.image('shapebg', 'assets/shapebg.png');
    }
    
    ,create: function(){
        shapes = new shapeData();
        correctShape = new Shape();
        grid = new Grid(CONFIG.levels[0].gridSize);
        
    }
    ,chooseShapes: function(){
        this.list = [];
        var rnd;
        for (var i=0, l=CONFIG.levels[0].gridSize*CONFIG.levels[0].gridSize; i<l; i++)
            {
                rnd = game.rnd.integerInRange(0, CONFIG.levels[0].shapeCount-1);
                for (var j = 0, s = this.list.length; j<s; j++)
                    {
                        if (rnd === this.list[i]) rnd = game.rnd.integerInRange(0, CONFIG.levels[0].shapeCount-1);
                        else this.list[i]=rnd;
                    }                              
            }
        return this.list;
    }
}

game.state.add('main', main_state);
game.state.start('main');