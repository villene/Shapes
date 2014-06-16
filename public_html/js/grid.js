var Grid = Class.extend({
    init: function(level){
        shapes = new shapeData(level);
        
        
        this.list = [];        
        this.createTiles(level.gridSize);
        
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
    }
    
    //destroy probalby needs some pimpin'
    ,destroy: function(){
        for(var i=0; i<this.list.length; i++){
            this.list[i].destroy();
        }
        this.list = undefined;
    }
})