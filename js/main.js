var sugarStar = {
    init : function(){
        $(".ssContainer").on("mouseleave",function(event){
            sugarStar.close(event);
        });
        this.setVert(0);
        this.setHor(0);
        var curPos = sugarStar.getHor();
        this.setArrowPos(0-curPos);
    },
    setHor : function(xPos){
        var arrowWidth = 40;
        var borderRadius = 10;
        xPos = xPos - arrowWidth/2 - borderRadius;
        var ssBlockWidth = $(".ssContainer").width();
        var pageWidth = $(Document).width();
        var minPosX = 0;
        var maxPosX = pageWidth - ssBlockWidth;
        if(xPos > maxPosX)
            xPos = maxPosX;
        else if(xPos < minPosX)
            xPos = minPosX;

        $(".ssContainer").css("left",xPos+"px");
    },
    setVert : function(yPos){
        $(".ssContainer").css("top",yPos+"px");
    },
    getHor : function(){
        return parseInt($(".ssContainer").css("left"),10);
    },
    setArrowPos : function(posX){
        var boxWidth = 300;
        var arrowWidth = 40;
        var borderRadius = 10;
        var maxPos = boxWidth - (2*borderRadius) - arrowWidth;
        posX = posX - arrowWidth/2 - borderRadius;
        if(posX<0){
            posX=0;
        }
        if(posX>maxPos){
            posX=maxPos;
        }
        $(".ssContainer .arrow-svg").css("margin-left",posX+"px");
    },
    open : function(event){
            this.setVert(event.pageY-2);
            this.setHor(event.pageX);
            var curPos = sugarStar.getHor();
            this.setArrowPos(event.pageX-curPos);
            $(".ssContainer").slideDown();
    },
    close : function(event){
            $(".ssContainer").slideUp();
    }
};
