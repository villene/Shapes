var game, tileSize;
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;
game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser'); //{preload: preload, create: create});

var main_state = {
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('tile', 'assets/tile.png');
    }
    
    ,init: function(){
        
        //game.add.sprite(200, 200, 'tile');
        new Grid(CONFIG.levels[0].gridSize);
    }
}

var Grid = Class.extend({
    init: function(gridSize){
        this.list = [];
        this.createTiles(gridSize);
    }
    
    ,createTiles: function(gridSize){
        var space = gameWidth/20;
        console.log(space);
        tileSize = (gameWidth-(gridSize+1)*space) / gridSize;
        for (var y=0; y<gridSize; y++)
            {
                for (var x=0; x<gridSize; x++)
                    {
                        this.list.push(new Tile(gameWidth-(gameWidth-space-space*x-tileSize*x), gameHeight+((gameHeight-(tileSize*gridSize+(gridSize-1)*space))/2)-(gameHeight-space-space*y-tileSize*y)));
                        console.log(this.list);
                    }
            }
    }
    
    ,destroy:function(){
        for(var i=0, l=this.list.length; i<l; i++) this.list.destroy(true);
    }
})

var Tile = Class.extend({
    init: function(x,y){
        console.log(x,y);
        this.draw(x,y);
    }
    
    ,draw: function(x,y){
        this.sprite = game.add.sprite(x, y, 'tile');
        this.sprite.height=tileSize;
        this.sprite.width=tileSize;
    }
    ,destroy: function(){
        this.sprite.destroy(true);
    }
})

game.state.add('main', main_state);
game.state.start('main');