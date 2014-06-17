var levelList = Class.extend({
    init: function(){
        this.group = game.add.group();
        this.list=[];
        
        this.draw();
    }
    ,draw: function(){
        var space = gameWidth/20;
        var count = 0;
        //console.log(space);
        var levelTileSize = (gameWidth-4*space) / 3;
        for (var i=0, l=Math.ceil(CONFIG.levels.length/12); i<l; i++){        
            for (var y=0; y<4; y++)
                {
                    for (var x=0; x<3; x++)
                        {
                            this.list.push(new LevelTile(i*gameWidth + gameWidth-(gameWidth-space-space*x-levelTileSize*x), gameHeight+((gameHeight-(levelTileSize*4+3*space))/2)-(gameHeight-space-space*y-levelTileSize*y)-gameHeight/20, levelTileSize, count));
                            this.group.add(this.list[count].sprite);
                            this.group.add(this.list[count].text);
                            //console.log(this.list[count].text);
                            count++;
                            if (count===CONFIG.levels.length) break;
                        }
                }
        }
    }
    ,nextPage: function(){
        //this.group.x = -gameWidth;
        game.add.tween(this.group).to({x: this.group.x-gameWidth}, 500).start();
    }
    ,prevPage: function(){
        game.add.tween(this.group).to({x: this.group.x+gameWidth}, 500).start();
    }
    ,destroy: function(){
        for(var i=0; i<this.list.length; i++){
            this.list[i].destroy();
        }
        this.list = undefined;
    }
})