var shapeData = Class.extend({
    init: function(){
        this.list = [];        
        this.chooseShapes();
    }
    
    ,chooseShapes: function(){
        var check;
        for (var i=0, l=CONFIG.levels[0].gridSize*CONFIG.levels[0].gridSize; i<l; i++)
            {
                check = false;
                var rnd = game.rnd.integerInRange(0, CONFIG.levels[0].shapeCount-1);
                for (var j = 0, s = this.list.length; j<s; j++)
                    {
                        if (rnd === this.list[j]) check = true;                        
                    }
                if (check) i--;
                else this.list[i] = rnd;
            }            
    }
    ,destroy: function(){
        
    }
})