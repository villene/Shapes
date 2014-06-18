var Grid = Class.extend({
    init: function(level){        
        shapes = new shapeData(level);
        
        
        this.list = [];        
        this.createTiles(level.gridSize);
        this.HUD = new hud();
    }
    
    ,createTiles: function(gridSize){
        var space = gameWidth/20;
        console.log(space);
        tileSize = (gameWidth-(gridSize+1)*space) / gridSize;
        for (var y=0; y<gridSize; y++)
            {
                for (var x=0; x<gridSize; x++)
                    {
                        this.list.push(new Tile(gameWidth-(gameWidth-space-space*x-tileSize*x), gameHeight+((gameHeight-(tileSize*gridSize+(gridSize-1)*space))/2)-(gameHeight-space-space*y-tileSize*y)-gameHeight/20));
                        console.log(this.list);
                    }
            }
            correctShape = new Shape(this.list);
    }
    ,showTiles: function(level){
        var revealOrder = [];
        for (var i=0, l=level.gridSize*level.gridSize; i<l; i++)
            {
                var rnd = game.rnd.integerInRange(0, l-1);
                while(this.list[rnd].showed){
                    rnd = game.rnd.integerInRange(0, l-1);
                }
                revealOrder[i] = rnd;
                this.list[rnd].showed=true;
            }
        console.log(revealOrder);
        for(var i=0, l=this.list.length; i<l; i++) //console.log(this.list[revealOrder[i]]);
         game.time.events.add(level.showTime+i*level.showTime, this.list[revealOrder[i]].show, this.list[revealOrder[i]]);
     
         game.time.events.add(level.showTime*(this.list.length+1), correctShape.show, correctShape);
         
    }
    
    
    //destroy probalby needs some pimpin'
    ,destroy: function(){
        this.HUD.destroy();
        correctShape.destroy();
        for(var i=0; i<this.list.length; i++){
            this.list[i].destroy();
        }
        this.list = undefined;
    }
})