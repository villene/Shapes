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
    
    ,checkRepeat: function(nr){
        var result = false
        for (var i=0, l=this.list.length; i<l; i++)
            {
                if (nr===this.list[i].shape.frame)
                    result = true;                
            }
        return result;
    }
    //destroy probalby needs some pimpin'
    ,destroy: function(){
        for(var i=0; i<this.list.length; i++){
            this.list[i].destroy();
        }
        this.list = undefined;
    }
})