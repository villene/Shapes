var shapeData = Class.extend({
    init: function(level){
        this.list = [];
        for (var i=0, l=level.gridSize*level.gridSize; i<l; i++)
        {
            this.list[i] = {
                shapeFrame: null, shapeCol: null
            }
        }
        gameColours = this.shapeColours(level.colours);
        console.log(gameColours);
        this.chooseShapes(level);
    }
    
    ,chooseShapes: function(level){
        var check;
        
        for (var i=0, l=level.gridSize*level.gridSize; i<l; i++)
            {
                check = false;
                var rndCnt = game.rnd.integerInRange(0, level.shapeCount-1);
                var rndCol = game.rnd.integerInRange(0, level.colours-1);
                for (var j = 0, s = this.list.length; j<s; j++)
                    {
                        if (rndCnt === this.list[j].shapeFrame && rndCol === this.list[j].shapeCol) check = true;                        
                    }
                if (check) i--;
                else {
                    this.list[i].shapeFrame = rndCnt;
                    this.list[i].shapeCol = rndCol;
                }
            }            
    }
    ,shapeColours: function(colourCount){
        var check;
        
        var newColours = [];
        
        for (var i=0; i<colourCount; i++)
            {
                check = false;
                var rnd = game.rnd.integerInRange(0, colourArray.length-1);
                for (var j = 0, s = newColours.length; j<s; j++)
                    {
                        if (rnd === newColours[j]) check = true;                        
                    }
                if (check) i--;
                else newColours[i] = rnd;
            } 
        return newColours;
    }
    ,destroy: function(){
        
    }
})