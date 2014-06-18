var levelList = Class.extend({
    init: function(){
        this.group = game.add.group();
        this.list=[];
        this.pageCount = Math.ceil(CONFIG.levels.length/12);
        this.currPage=1;
        
        this.draw();
        
        this.nextButton = game.add.button(gameWidth-35, gameHeight-35, 'arrows', this.nextPage, this, 1, 1);
        this.nextButton.width=70;
        this.nextButton.height=70;
        this.nextButton.anchor.setTo(0.5,0.5);
        
        this.prevButton = game.add.button(35, gameHeight-35, 'arrows', this.prevPage, this, 0);
        this.prevButton.width=70;
        this.prevButton.height=70;
        this.prevButton.anchor.setTo(0.5,0.5);
    }
    ,draw: function(){
        var space = gameWidth/20;
        var count = 0;
        //console.log(space);
        var levelTileSize = (gameWidth-4*space) / 3;
        for (var i=0; i<this.pageCount; i++){        
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
        if(this.currPage<this.pageCount){
            this.currPage++;
            game.add.tween(this.group).to({x: this.group.x-gameWidth}, 500).start();     
        }        
    }
    ,prevPage: function(){
        if(this.currPage>1){
            this.currPage--;
            game.add.tween(this.group).to({x: this.group.x+gameWidth}, 500).start();
        }        
    }
    ,destroy: function(){
        for(var i=0; i<this.list.length; i++){
            this.list[i].destroy();
        }
        this.list = undefined;
        this.group.destroy();
    }
})