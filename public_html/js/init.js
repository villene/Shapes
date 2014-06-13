var game, tileSize;
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;
game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser');

var main_state = Class.extend({
    preload: function(){
        game.stage.backgroundColor = '#71c5cf';
        game.load.image('tile', 'assets/tile.png');
    }
    
    ,init: function(){
        
        //game.add.sprite(200, 200, 'tile');
        new Grid(CONFIG.levels[0].gridSize);
    }
})

var Grid = Class.extend({
    init: function(gridSize){
        this.list = [];
        this.createTiles(gridSize);
    }
    
    ,createTiles: function(gridSize){
        var space = gameWidth/20;
        tileSize = (gameWidth-(gridSize+1)*space) / gridSize;
        for (var y=0; y<gridSize; y++)
            {
                for (var x=0; x<gridSize; x++)
                    {
                        this.list.push(new Tile(gameWidth-(gameWidth-space-tileSize*x), gameHeight-(gameHeight-space-y*(gridSize*tileSize))));
                        console.log(this.list);
                    }
            }
    }
    
    ,destroy:function(){
        
    }
})

var Tile = Class.extend({
    init: function(x,y){
        console.log(x,y);
        this.sprite = false;
        this.draw(x,y);
    }
    
    ,draw: function(x,y){
        this.sprite = game.add.sprite(x, y, 'tile');
    }
    ,destroy: function(){
        
    }
})

game.state.add('main', main_state);
game.state.start('main');